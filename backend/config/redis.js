import { createClient } from "redis";
import { configDotenv } from "dotenv";

configDotenv();

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379"
});

redisClient.on("error", (err) => {
  console.log("Redis Error:", err);
});

await redisClient.connect();

console.log("Redis Connected");

export default redisClient;