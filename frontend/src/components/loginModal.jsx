import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginModal = ({ isOpen, onClose}) => {
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
      // =========================
      // LOGIN
      // =========================

      if (mode === "signin") {
        const response = await fetch(
          "http://localhost:4000/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        console.log(data);

        if (response.ok) {
          // Save token
          localStorage.setItem("token", data.token);

          // Go to home
          navigate("/home");

          // Close modal
          onClose();
        } else {
          console.log(data.message);
          toast.error(data.message)
        }
      }

      // =========================
      // SIGNUP
      // =========================

      else {
        const response = await fetch(
          "http://localhost:4000/api/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        console.log(data);

        if (response.ok) {
          // Save token
          localStorage.setItem("token", data.token);
          // Go to home
          navigate("/home");

          // Close modal
          onClose();
        } else {
          console.log(data.message);
        }
      }
    } catch (error) {
      console.log("Authentication error:", error);
    }
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

        {/* =========================
            SIGN IN
        ========================= */}

        {mode === "signin" && (
          <>
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit}>

              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={onChangeHandler}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />

              <button type="submit">
                Sign In
              </button>

            </form>

            <p>
              Don't have an account?
            </p>

            <button
              type="button"
              onClick={() => setMode("signup")}
            >
              Create Account
            </button>
          </>
        )}

        {/* =========================
            SIGN UP
        ========================= */}

        {mode === "signup" && (
          <>
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={onChangeHandler}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={onChangeHandler}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={onChangeHandler}
                required
              />

              <button type="submit">
                Create Account
              </button>

            </form>

            <p>
              Already have an account?
            </p>

            <button
              type="button"
              onClick={() => setMode("signin")}
            >
              Sign In
            </button>
          </>
        )}

        {/* =========================
            CLOSE
        ========================= */}

        <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>

      </div>
    </div>
  );
};

export default LoginModal;