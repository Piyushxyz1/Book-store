
import React from "react";
import { useDispatch } from "react-redux";
import { openLogin } from "../reduxStore/loginModalSlice";
import "./welcome.css";

function Welcome() {
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch(openLogin());
  };

  return (
    <main className="welcome-page">

      {/* Background decorative elements */}
      <div className="welcome-bg-circle welcome-circle-one"></div>
      <div className="welcome-bg-circle welcome-circle-two"></div>

      <div className="welcome-content">

        {/* Small top label */}
        <div className="welcome-eyebrow">
          <span className="eyebrow-line"></span>
          <span>THE BOOKSTORE</span>
          <span className="eyebrow-line"></span>
        </div>

        {/* Main heading */}
        <h1 className="welcome-title">
          Stories that
          <br />
          <em>stay with you.</em>
        </h1>

        {/* Description */}
        <p className="welcome-description">
          Discover books that inspire new ideas, spark imagination,
          and become part of your everyday journey. Your next great
          read is waiting for you.
        </p>

        {/* CTA */}
        <button
          className="welcome-button"
          onClick={handleGetStarted}
        >
          <span>Start Exploring</span>
          <span className="welcome-arrow">→</span>
        </button>

        {/* Bottom information */}
        <div className="welcome-info">

          <div className="welcome-info-item">
            <span className="info-number">01</span>
            <div>
              <strong>Discover</strong>
              <p>Curated stories</p>
            </div>
          </div>

          <div className="welcome-info-divider"></div>

          <div className="welcome-info-item">
            <span className="info-number">02</span>
            <div>
              <strong>Choose</strong>
              <p>Books you'll love</p>
            </div>
          </div>

          <div className="welcome-info-divider"></div>

          <div className="welcome-info-item">
            <span className="info-number">03</span>
            <div>
              <strong>Read</strong>
              <p>Something meaningful</p>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative book quote */}
      <div className="welcome-quote">
        <span className="quote-mark">“</span>
        <p>
          A room without books
          <br />
          is like a body without a soul.
        </p>
        <span className="quote-author">
          — Marcus Tullius Cicero
        </span>
      </div>

      {/* Bottom year */}
      <div className="welcome-est">
        EST. 2026
      </div>

    </main>
  );
}

export default Welcome;


