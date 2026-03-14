package rediscache

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/sharathcx/LinkTrack/backend/globals"

	"github.com/redis/go-redis/v9"
)

var RedisClient *redis.Client

func InitRedis() {
	opt, err := redis.ParseURL(globals.Vars.REDIS_URL)
	if err != nil {
		log.Fatal("Failed to parse Redis URL", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
    if RedisClient = redis.NewClient(opt); RedisClient == nil {
		log.Fatal("Failed to connect to Redis")
	}
	if err := RedisClient.Ping(ctx).Err(); err != nil {
		log.Fatal("Failed to connect to Redis", err)
	}
	fmt.Println("Connected to Redis")
}
