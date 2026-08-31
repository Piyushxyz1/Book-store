import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  createPayment,
  verifyPayment,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/create-payment",authMiddleware, createPayment);

router.post("/verify-payment",authMiddleware, verifyPayment);

export default router;