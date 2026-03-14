package auth

import (
	"github.com/sharathcx/LinkTrack/backend/fastapify"
)

func RegisterRoutes(app *fastapify.Wrapper) {
	fastapify.Post(app, "/auth/send-otp", SendOTP)
	fastapify.Post(app, "/auth/verify-otp", VerifyOTP)
}
