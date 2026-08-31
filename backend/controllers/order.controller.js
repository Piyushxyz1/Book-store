import Razorpay from "razorpay";
import crypto from "crypto";
import Order from "../model/orderModel.js";
import User from "../model/user.Model.js";
import redisClient from "../config/redis.js";

const razorpay = new Razorpay({
  key_id: process.env.api_key,
  key_secret: process.env.KEY_SECRET,
});


// CREATE PAYMENT
const createPayment = async (req, res) => {
  try {
    const userId = req.user.id;

    const cachedCart = await redisClient.get(`cart:${userId}`);

    let cartData;

    if (cachedCart) {
      cartData = JSON.parse(cachedCart);
    } else {
      const user = await User.findById(userId);

      if (!user) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }

      cartData = user.cartData;
    }

    if (!cartData || Object.keys(cartData).length === 0) {
      return res.json({
        success: false,
        message: "Cart is empty",
      });
    }

    const items = Object.entries(cartData).map(
      ([productId, product]) => ({
        productId: Number(productId),
        name: product.name,
        price: Number(product.price),
        quantity: Number(product.quantity),
      })
    );

    const amount = items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

    // Razorpay amount is in paise
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json({
      success: true,
      key: process.env.api_key,
      razorpayOrder,
      items,
      amount,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// VERIFY PAYMENT
const verifyPayment = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = req.body;

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.KEY_SECRET
      )
      .update(
        razorpay_order_id + "|" + razorpay_payment_id
      )
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Get cart again
    const cachedCart = await redisClient.get(`cart:${userId}`);

    let cartData;

    if (cachedCart) {
      cartData = JSON.parse(cachedCart);
    } else {
      const user = await User.findById(userId);

      if (!user) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }

      cartData = user.cartData;
    }

    const items = Object.entries(cartData).map(
      ([productId, product]) => ({
        productId: Number(productId),
        name: product.name,
        price: Number(product.price),
        quantity: Number(product.quantity),
      })
    );

    const amount = items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

    // NOW create MongoDB order
    const order = await Order.create({
      userId,
      items,
      amount,
      paymentId: razorpay_payment_id,
      payment: true,
      status: "Order processing",
    });

    // Clear Redis cart
    await redisClient.del(`cart:${userId}`);

    // Clear User cart
    await User.findByIdAndUpdate(userId, {
      cartData: {},
    });

    res.json({
      success: true,
      message: "Payment successful",
      order,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export {
  createPayment,
  verifyPayment,
};