
import React from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-page">
      <div className="payment-card error-card">

        <div className="payment-icon error-icon">
          ✕
        </div>

        <h1>Payment Failed</h1>

        <p className="payment-message">
          Unfortunately, your payment could not be completed.
        </p>

        <p className="payment-info">
          Don't worry, no order has been placed. Please try the payment
          again or return to your cart.
        </p>

        <div className="payment-actions">

          <button
            className="payment-button"
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
};

export default PaymentFailed;
