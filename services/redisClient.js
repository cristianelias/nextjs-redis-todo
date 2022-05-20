import "dotenv/config";
import Redis from "ioredis";
const logger = require("pino")();

class RedisClient {
  constructor() {
    this.redis = new Redis(process.env["REDIS_URL"] || "");
    this.redis.on("error", (err) => redisLogger.error(err));
    this.logger = logger.child({ operation: "redis" });
  }

  async read({ key, onSuccess, onError }) {
    let res;
    try {
      res = await this.redis.get(key);
      onSuccess();
    } catch (error) {
      onError();
    }
    return JSON.parse(res);
  }

  async write({ payload, key, onSuccess, onError }) {
    try {
      this.redis.set(key, JSON.stringify(payload));
    } catch (error) {
      onError();
    }
    onSuccess();
  }
}

export default RedisClient;
