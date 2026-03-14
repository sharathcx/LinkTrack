package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/sharathcx/LinkTrack/backend/fastapify"
	auth "github.com/sharathcx/LinkTrack/backend/modules/auth"
	rediscache "github.com/sharathcx/LinkTrack/backend/redisCache"
)

func main() {
	r := gin.Default()

	// CORS configuration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	app := fastapify.New(r)

	rediscache.InitRedis()

	auth.RegisterRoutes(app)
	app.SetupSwagger("/openapi.json")
	log.Println("Server running on http://localhost:8080")
	log.Println("Swagger docs available at http://localhost:8080/docs")
	r.Run(":8080")
}
