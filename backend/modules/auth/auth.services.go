package auth

import (
	"context"
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
	"github.com/sharathcx/LinkTrack/backend/globals"
	rediscache "github.com/sharathcx/LinkTrack/backend/redisCache"
	"github.com/sharathcx/LinkTrack/backend/utils"
)

func SendOTP(c *gin.Context, req *SendOTPPayloadSchema) (*any, string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	redisKey := fmt.Sprintf("otp:email:%s", req.Email)

	// 1. Check if OTP already exists in Redis (rate limiting)
	exists, err := rediscache.RedisClient.Exists(ctx, redisKey).Result()
	if err != nil {
		fmt.Printf("Redis Error (Exists): %v\n", err)
		return nil, "", utils.NewApiError(500, "Cache error", utils.ErrInternalError, nil)
	}
	if exists > 0 {
		return nil, "Please wait before requesting a new OTP", nil
	}

	// 2. Generate 6-digit OTP
	otp := fmt.Sprintf("%06d", rand.Intn(1000000))

	// 3. Prepare SendGrid Email
	from := mail.NewEmail("LinkTrack", globals.Vars.SENDGRID_FROM_EMAIL)
	subject := "Your OTP Code"
	to := mail.NewEmail(req.Name, req.Email)

	plainTextContent := "Your OTP is: " + otp
	htmlContent := "<strong>Your OTP is: " + otp + "</strong>"

	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(globals.Vars.SENDGRID_API_KEY)

	// 4. Send Email FIRST
	resp, err := client.Send(message)
	if err != nil {
		fmt.Printf("SendGrid Error (Send): %v\n", err)
		return nil, "", utils.NewApiError(500, "Failed to send email", utils.ErrInternalError, nil)
	}

	if resp.StatusCode >= 400 {
		fmt.Printf("SendGrid API Error: Status %d, Body %s\n", resp.StatusCode, resp.Body)
		return nil, "", utils.NewApiError(resp.StatusCode, "SendGrid API Error", utils.ErrInternalError, nil)
	}

	// 5. Store in Redis ONLY if email was sent successfully
	err = rediscache.RedisClient.Set(ctx, redisKey, otp, 60*time.Second).Err()
	if err != nil {
		fmt.Printf("Redis Error (Set): %v\n", err)
		return nil, "", utils.NewApiError(500, "Failed to store OTP in cache", utils.ErrInternalError, nil)
	}

	return nil, "OTP sent successfully", nil
}

func VerifyOTP(c *gin.Context, req *VerifyOTPPayloadSchema) (*any, string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	redisKey := fmt.Sprintf("otp:email:%s", req.Email)

	storedOTP, err := rediscache.RedisClient.Get(ctx, redisKey).Result()
	if err != nil {
		return nil, "Invalid or expired OTP", nil
	}

	if storedOTP != req.OTP {
		return nil, "Invalid OTP", nil
	}

	rediscache.RedisClient.Del(ctx, redisKey)

	// Generate Tokens
	accessToken, refreshToken, err := utils.GenerateTokens(req.Email)
	if err != nil {
		return nil, "", utils.NewApiError(500, "Failed to generate tokens", utils.ErrInternalError, nil)
	}

	// Set Access Token Cookie (15 minutes)
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("access_token", accessToken, 15*60, "/", "", false, true)

	// Set Refresh Token Cookie (7 days)
	c.SetCookie("refresh_token", refreshToken, 7*24*60*60, "/", "", false, true)

	return nil, "OTP verified successfully", nil
}
