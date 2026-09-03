import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.Routes.js";
import cartRouter from "./routes/cart.Routes.js";
import redisClient from "./config/redis.js";
import  orderRouter  from './routes/order.Routes.js'

configDotenv()

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api",userRoutes)
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  connectDB();

  console.log(`server is running on ${PORT}`);
});