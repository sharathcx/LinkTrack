package globals

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func loadenv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Println("Warning: Unable to find .env")
	}
}

type VarsStruct struct {
	MONGO_URI           string
	DATABASE_NAME       string
	PORT                string
	REDIS_URL           string
	SENDGRID_API_KEY    string
	SENDGRID_FROM_EMAIL string
	JWT_SECRET          string
}

var Vars VarsStruct

func init() {
	loadenv()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	Vars = VarsStruct{
		MONGO_URI:           os.Getenv("MONGO_URI"),
		DATABASE_NAME:       os.Getenv("DATABASE_NAME"),
		PORT:                port,
		REDIS_URL:           os.Getenv("REDIS_URL"),
		SENDGRID_API_KEY:    os.Getenv("SENDGRID_API_KEY"),
		SENDGRID_FROM_EMAIL: os.Getenv("SENDGRID_FROM_EMAIL"),
		JWT_SECRET:          os.Getenv("JWT_SECRET"),
	}
}
