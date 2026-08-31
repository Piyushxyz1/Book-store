import { FaShoppingCart, FaUser } from "react-icons/fa";
import LoginModal from "./loginModal";
import { useSelector, useDispatch } from "react-redux";
import { openLogin, closeLogin } from "../reduxStore/loginModalSlice";

const Navbar = ({ token, onLogout }) => {
  const dispatch = useDispatch();

  const isLoginOpen = useSelector(
    (state) => state.loginModal.isLoginOpen
  );

  const onLoginClick = () => {
    dispatch(openLogin());
  };

  return (
    <nav
      style={{
        background: "#1a1a2e",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <FaShoppingCart size={24} />

        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          ShopVibe
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {token ? (
          <>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <FaUser size={16} />
            </span>

            <button
              onClick={onLogout}
              style={{
                background: "#e74c3c",
                color: "white",
                padding: "0.4rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "500",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={onLoginClick}
            style={{
              background: "#4a6cf7",
              color: "white",
              padding: "0.4rem 1.5rem",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            Sign In
          </button>
        )}
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => dispatch(closeLogin())}
      />
    </nav>
  );
};

export default Navbar;