package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/sharathcx/LinkTrack/backend/utils"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Read token from cookie
		tokenString, err := c.Cookie("access_token")
		if err != nil {
			c.JSON(401, gin.H{"success": false, "message": "Authentication cookie is missing"})
			c.Abort()
			return
		}

		claims, err := utils.ValidateToken(tokenString)
		if err != nil {
			c.JSON(401, gin.H{"success": false, "message": "Invalid or expired token"})
			c.Abort()
			return
		}

		// Set user data in context
		c.Set("user_email", claims.Email)
		c.Next()
	}
}
