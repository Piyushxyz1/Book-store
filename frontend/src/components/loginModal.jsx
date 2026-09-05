import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginModal = ({ isOpen, onClose, url }) => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "signin") {
        const response = await fetch(`${url}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        console.log(data);

        if (response.ok) {
          localStorage.setItem("token", data.token);

          navigate("/home");
          onClose();
        } else {
          console.log(data.message);
          toast.error(data.message);
        }
      } else {
        const response = await fetch(`${url}/api/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data);

        if (response.ok) {
          localStorage.setItem("token", data.token);

          navigate("/home");
          onClose();
        } else {
          console.log(data.message);
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log("Authentication error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const switchMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* LEFT DECORATIVE PANEL */}
        <div className="modal-art">

          <div className="modal-art-inner">

            <span className="modal-art-label">
              THE BOOKSTORE
            </span>

            <div className="modal-book-mark">
              “
            </div>

            <h3>
              Every story
              <br />
              begins with
              <br />
              <em>one page.</em>
            </h3>

            <div className="modal-art-line"></div>

            <p>
              Find books that inspire,
              challenge and stay with you.
            </p>

            <span className="modal-est">
              EST. 2026
            </span>

          </div>

        </div>

        {/* RIGHT FORM PANEL */}
        <div className="modal-form">

          <div className="modal-form-header">

            <span className="modal-eyebrow">
              {mode === "signin"
                ? "WELCOME BACK"
                : "JOIN THE COMMUNITY"}
            </span>

            <h2>
              {mode === "signin"
                ? "Sign in."
                : "Create account."}
            </h2>

            <p>
              {mode === "signin"
                ? "Continue your reading journey."
                : "Start building your personal library."}
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* SIGNUP NAME */}
            {mode === "signup" && (
              <div className="form-field">
                <label htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="form-field">
              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={onChangeHandler}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-field">
              <label htmlFor="password">
                PASSWORD
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
            >
              <span>
                {mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
              </span>

              <span className="auth-arrow">
                →
              </span>
            </button>

          </form>

          {/* SWITCH MODE */}
          <div className="auth-switch">

            <span>
              {mode === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>

            <button
              type="button"
              onClick={switchMode}
            >
              {mode === "signin"
                ? "Create Account"
                : "Sign In"}
            </button>

          </div>

          {/* FOOTER */}
          <div className="modal-footer-note">
            <span>✦</span>
            Your reading journey starts here.
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginModal;



/* =========================================================
   PREMIUM BOOKSTORE LOGIN MODAL
========================================================= */
