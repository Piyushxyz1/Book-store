import React, { useEffect, useState } from "react";
import "./cartItems.css";
import axios from "axios";
import { removeFromCart } from "../reduxStore/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const Cart = ({ token }) => {

  const url = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const removeItemsFromCart = async (product) => {

    const response = await axios.post(`${url}/api/cart/remove`, {
      itemId: product.id
    }, {
      headers: {
        token: token
      }
    })

    if (response.data.success) {
     console.log("PRODUCT:", product);
     console.log("ID:", product.id);
     console.log(cartItems)

      toast.success(response.data.message)
      dispatch(removeFromCart(product))


    }

    else {
      toast.error(response.data.message)
    }

  }


  const handlePayment = async () => {
  try {
    const token = localStorage.getItem("token");

    // Backend se Razorpay order create karna
    const response = await axios.post(
      `${url}/api/order/create-payment`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );

    const data = response.data;

    if (!data.success) {
      alert(data.message);
      return;
    }

    // Razorpay Checkout options
    const options = {
      key: data.key,

      amount: data.razorpayOrder.amount,

      currency: data.razorpayOrder.currency,

      name: "My Book Store",

      description: "Book Purchase",

      order_id: data.razorpayOrder.id,

      handler: async function (response) {
        try {
          // Payment verify karne backend ko bhejna
          const verifyResponse = await axios.post(
            `${url}/api/order/verify-payment`,
            {
              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_signature:
                response.razorpay_signature,
            },
            {
              headers: {
                token: token,
              },
            }
          );

          if (verifyResponse.data.success) {
            alert("Payment successful!");

            // Yahan cart refresh / empty kar sakte ho
          } else {
            alert("Payment verification failed");
          }
        } catch (error) {
          console.log(error);
          alert("Payment verification failed");
        }
      },

      prefill: {
        name: "Piyush",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    return sum + price * quantity;
  }, 0);

  // Calculate tax
  const tax = subtotal * 0.10;

  // Calculate total
  const total = subtotal + tax;

 return (
  <div className="cart-container">

    <div className="cart-header">
      <div>
        <h2>Shopping Cart</h2>
        <p>{cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart</p>
      </div>
    </div>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some books to your cart and come back here.</p>
      </div>
    ) : (
      <div className="cart-layout">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="cart-items-section">

          {cartItems.map((item, index) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;
            const itemTotal = price * quantity;

            return (
              <div
                key={item.id || item._id || index}
                className="cart-item"
              >

                <div className="cart-item-image">
                  {item.image || "📚"}
                </div>

                <div className="cart-item-content">

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <p>
                      ${price.toFixed(2)} × {quantity}
                    </p>
                  </div>

                  <div className="cart-item-bottom">

                    <span className="item-total">
                      ${itemTotal.toFixed(2)}
                    </span>

                    <button
                      className="remove-btn"
                      onClick={() => removeItemsFromCart(item)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* RIGHT SIDE - SUMMARY */}
        <div className="cart-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="pay-now-btn"
            onClick={handlePayment}
          >
            Pay Now
          </button>

          <p className="secure-payment">
            🔒 Secure payment powered by Razorpay
          </p>

        </div>

      </div>
    )}

  </div>
);
};

export default Cart;