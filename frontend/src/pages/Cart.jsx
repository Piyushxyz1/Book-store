import React from "react";
import "./cartItems.css";
import axios from "axios";
import { removeFromCart } from "../reduxStore/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({ token }) => {
  const url = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const removeItemsFromCart = async (product) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/remove`,
        {
          itemId: product.id,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(removeFromCart(product));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to remove item");
    }
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");

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
        toast.error(data.message);
        navigate("/failure");
        return;
      }

      const options = {
        key: data.key,
        amount: data.razorpayOrder.amount,
        currency: data.razorpayOrder.currency,

        name: "My Book Store",
        description: "Book Purchase",

        order_id: data.razorpayOrder.id,

        handler: async function (response) {
          try {
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
              // Remove purchased items from Redux
              cartItems.forEach((item) => {
                dispatch(removeFromCart(item));
              });

              // Go to success page
              navigate("/success", {
                state: {
                  username: verifyResponse.data.username,
                },
              });
            } else {
              navigate("/failure");
            }
          } catch (error) {
            console.log(error);
            navigate("/failure");
          }
        },

        prefill: {
          name: "Piyush",
        },

        theme: {
          color: "#2563eb",
        },

        modal: {
          ondismiss: function () {
            navigate("/failure");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log(error);
      navigate("/failure");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    return sum + price * quantity;
  }, 0);

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="cart-wrapper">

        {/* HEADER */}
        <div className="cart-page-header">
          <div>
            <span className="cart-label">YOUR CART</span>
            <h1>Shopping Cart</h1>
            <p>
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* EMPTY CART */
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              Looks like you haven't added any books yet.
            </p>

            <a href="/" className="continue-shopping">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="cart-layout">

            {/* LEFT SIDE */}
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

                    {/* IMAGE */}
                    <div className="cart-item-image">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      ) : (
                        <div className="image-placeholder">
                          📚
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="cart-item-content">

                      <div className="cart-item-info">
                        <span className="book-label">
                          BOOK
                        </span>

                        <h3>{item.name}</h3>

                        <p className="item-price">
                          ${price.toFixed(2)}
                        </p>

                        <p className="item-quantity">
                          Quantity: {quantity}
                        </p>
                      </div>

                      <div className="cart-item-bottom">

                        <strong className="item-total">
                          ${itemTotal.toFixed(2)}
                        </strong>

                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeItemsFromCart(item)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* RIGHT SIDE */}
            <div className="cart-summary">

              <div className="summary-header">
                <span>SUMMARY</span>
                <h2>Order Summary</h2>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax</span>
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
                <span>→</span>
              </button>

              <div className="secure-payment">
                <span>🔒</span>
                <div>
                  <strong>Secure Checkout</strong>
                  <p>
                    Your payment is securely processed by Razorpay.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;