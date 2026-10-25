import User from "../model/user.Model.js";
import redisClient from "../config/redis.js";


// ===============================
// ADD TO CART
// ===============================
const addToCart = async (req, res) => {
  try {
    const { itemId, productName, price } = req.body;

    // User ID comes from authMiddleware
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Product already exists
    if (user.cartData[itemId]) {
      user.cartData[itemId].quantity += 1;
    }

    // Product does not exist
    else {
      user.cartData[itemId] = {
        name: productName,
        quantity: 1,
        price: price,
      };
    }

    // Tell Mongoose that cartData object has changed
    user.markModified("cartData");

    // Save updated cart to MongoDB
    await user.save();

    // Delete old cached cart
    await redisClient.del(`cart:${userId}`);

    res.json({
      success: true,
      message: "Items added to cart",
      cartData: user.cartData,
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// REMOVE FROM CART
// ===============================

const removeFromCart = async (req, res) => {
  try {

    const { itemId } = req.body;
   

    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Check if product exists
    if (user.cartData[itemId]) {

      delete user.cartData[itemId];

      // Tell Mongoose that cartData object has changed
      user.markModified("cartData");

      await user.save();
      await redisClient.del(`cart:${userId}`);
    }
    

    res.json({
      success: true,
      message: "Item removed from cart",
      cartData: user.cartData,
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });

  }
};


// ===============================
// GET CART
// ===============================
const getCart = async (req, res) => {
  try {

    const userId = req.user.id;

    // ===============================
    // CHECK REDIS
    // ===============================
    const cachedCart = await redisClient.get(`cart:${userId}`);

    // ===============================
    // REDIS HIT
    // ===============================
    if (cachedCart) {

      console.log("🔥 REDIS HIT");

      const cartData = Object.entries(JSON.parse(cachedCart)).map(
        ([id, item]) => ({
          id,
          ...item
        })
      );

      return res.json({
        success: true,
        cartData,
      });
    }

    // ===============================
    // REDIS MISS
    // ===============================
    console.log("❌ REDIS MISS");

    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // ===============================
    // SAVE CART TO REDIS
    // ===============================
    await redisClient.set(
      `cart:${userId}`,
      JSON.stringify(user.cartData)
    );

    console.log("✅ CART SAVED TO REDIS");

    // ===============================
    // CONVERT CART OBJECT TO ARRAY
    // ===============================
    const cartData = Object.entries(user.cartData).map(
      ([id, item]) => ({
        id,
        ...item
      })
    );

    res.json({
      success: true,
      cartData,
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });

  }
};

export {
  addToCart,
  removeFromCart,
  getCart,
};