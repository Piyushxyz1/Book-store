
import React from "react";
import "./cartItems.css";
import axios from "axios";
import { removeFromCart } from "../reduxStore/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ token, url }) => {
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
        toast.success(response.data.message, {
          toastId: "removed from cart"
        });
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
              cartItems.forEach((item) => {
                dispatch(removeFromCart(item));
              });

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
          color: "#8b6f47",
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

        {/* ================= HEADER ================= */}
        <header className="cart-page-header">
          <div className="cart-heading-content">
            <span className="cart-label">YOUR COLLECTION</span>

            <h1>Your Shopping Cart</h1>

            <p>
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "book" : "books"} ready
              for checkout
            </p>
          </div>

          <div className="cart-header-decoration">
            <span>BOOKSTORE</span>
            <span>EST. 2026</span>
          </div>
        </header>

        {/* ================= EMPTY CART ================= */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">

            <div className="empty-book-icon">
              <span>📖</span>
            </div>

            <span className="empty-label">
              NOTHING HERE YET
            </span>

            <h2>Your reading list is waiting.</h2>

            <p>
              Discover something worth reading and add your
              favorite books to your collection.
            </p>

            <Link to={"/home"} className="continue-shopping">
              Explore Books
              <span>→</span>
            </Link>

          </div>
        ) : (

          /* ================= CART CONTENT ================= */
          <div className="cart-layout">

            {/* ================= LEFT ================= */}
            <section className="cart-items-section">

              <div className="cart-section-heading">
                <div>
                  <span>YOUR BOOKS</span>
                  <h2>Selected Titles</h2>
                </div>

                <span className="cart-count">
                  {cartItems.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="cart-items-list">

                {cartItems.map((item, index) => {
                  const price = Number(item.price) || 0;
                  const quantity = Number(item.quantity) || 0;
                  const itemTotal = price * quantity;

                  return (
                    <article
                      key={item.id || item._id || index}
                      className="cart-item"
                    >

                      {/* BOOK NUMBER */}
                      <div className="cart-item-number">
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </div>

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

                          <div className="item-meta">
                            <span>
                              Qty. {quantity}
                            </span>

                            <span className="meta-dot">
                              •
                            </span>

                            <span>
                              Paperback
                            </span>
                          </div>

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
                            <span>×</span>
                            Remove
                          </button>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

              <a
                href="/"
                className="continue-browsing"
              >
                <span>←</span>
                Continue browsing
              </a>

            </section>

            {/* ================= RIGHT ================= */}
            <aside className="cart-summary">

              <div className="summary-top">
                <span className="summary-label">
                  ORDER SUMMARY
                </span>

                <h2>
                  Your
                  <br />
                  Order
                </h2>
              </div>

              <div className="summary-books">

                <div className="summary-mini-row">
                  <span>Books</span>
                  <span>
                    {cartItems.length
                      .toString()
                      .padStart(2, "0")}
                  </span>
                </div>

              </div>

              <div className="summary-prices">

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Tax</span>
                  <span>
                    ${tax.toFixed(2)}
                  </span>
                </div>

              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <div>
                  <span>TOTAL</span>
                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>
              </div>

              <button
                className="pay-now-btn"
                onClick={handlePayment}
              >
                <span>Proceed to Payment</span>
                <span className="payment-arrow">
                  →
                </span>
              </button>

              <div className="secure-payment">

                <div className="secure-icon">
                  ✓
                </div>

                <div>
                  <strong>
                    Secure Checkout
                  </strong>

                  <p>
                    Payments are securely processed
                    by Razorpay.
                  </p>
                </div>

              </div>

              <div className="summary-note">
                <span>✦</span>
                Thank you for supporting independent
                reading.
              </div>

            </aside>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;



