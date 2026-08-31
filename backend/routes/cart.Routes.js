import express from "express";

import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();


// Add item
cartRouter.post("/add",authMiddleware, addToCart);


// Remove item
cartRouter.post("/remove",authMiddleware , removeFromCart);


// Get user's cart
cartRouter.post("/get",authMiddleware , getCart);


export default cartRouter;