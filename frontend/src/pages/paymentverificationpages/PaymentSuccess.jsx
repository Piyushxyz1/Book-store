
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./payment.css";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username || "Customer";

  return (
    <div className="payment-page">
      <div className="payment-card success-card">

        <div className="payment-icon success-icon">
          ✓
        </div>

        <h1>Payment Successful!</h1>

        <p className="payment-message">
          Thank you, <strong>{username}</strong>!
        </p>

        <p className="payment-info">
          Your payment has been successfully processed and your order has
          been placed.
        </p>

        <p className="email-message">
          You will receive a confirmation email shortly with your order
          details.
        </p>

        <button
          className="payment-button"
          onClick={() => navigate("/home")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default PaymentSuccess
