
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

import { useState } from "react";

import LoginModal from "./loginModal";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  openLogin,
  closeLogin,
} from "../reduxStore/loginModalSlice";

import { Link } from "react-router-dom";

import "./navbar.css";


const Navbar = ({ token, onLogout ,url }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cart.items
  );

  const isLoginOpen = useSelector(
    (state) => state.loginModal.isLoginOpen
  );

  const [openDropdown, setOpenDropdown] = useState(null);


  const onLoginClick = () => {
    dispatch(openLogin());
  };


  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  const closeDropdown = () => {
    setOpenDropdown(null);
  };


  /* =========================
     DROPDOWN DATA
  ========================= */

  const dropdownData = {

    bestsellers: {
      items: [
        "BW Bestsellers",
        "International Bestsellers",
        "Min 40% Off Bestsellers",
        "Min 50% Off Bestsellers",
        "Upto 45% Off on Bestsellers",
      ],
    },


    shopByAge: {
      items: [
        "0-2 Years",
        "3-5 Years",
        "6-8 Years",
        "9-12 Years",
        "Teen and Young Adults",
      ],
    },


    recommend: {
      items: [
        "Award Winners",
        "Best Books of 2025",
        "Best Summer Reads",
        "Best Winter Reads",
        "BW Monthly Picks",
      ],
    },


    budget: {
      items: [
        "Above Rs. 499",
        "Rs. 300 - Rs. 499",
        "Rs. 99 - Rs. 299",
        "Under Rs 100",
      ],
    },


    browse: {
      items: [
        "Best Books of the Year",
        "Book Awards",
        "Books Box Sets",
        "Books in Foreign Languages",
        "Books in Indian Languages",
        "International Hardcovers",
        "Large Print Books",
        "New Releases",
        "Paperbacks up to 45% Off",
        "Special Editions for Gifts",
        "Sprayed Edges",
      ],
    },


    subjects: {
      items: [
        "Modern & Contemporary Fiction",
        "General, Modern and Contemporary Fiction",
        "Fiction: General and Literary",
        "Thriller / Suspense Fiction",
        "Christianity",
        "Advice on Careers and Achieving Success",
        "History",
        "Self-help, Personal Development and Practical Advice",
        "Classic Crime and Mystery Fiction",
        "Ancient Sagas and Epics",
        "Classic Fiction",
        "Crime and Mystery Fiction",
        "Action and Adventure Stories",
        "Nature and Animal Stories",
        "Fantasy",
      ],
    },

  };


  /* =========================
     DROPDOWN COMPONENT
  ========================= */

  const Dropdown = ({
    label,
    items,
    menuKey,
    isMega = false,
  }) => {

    return (

      <div
        className={`dropdown-container ${
          isMega ? "mega-dropdown-container" : ""
        }`}

        onMouseEnter={() =>
          setOpenDropdown(menuKey)
        }

        onMouseLeave={closeDropdown}
      >

        <button
          type="button"
          className="dropdown-trigger"
        >

          {label}

          <FaChevronDown
            className={
              openDropdown === menuKey
                ? "rotated"
                : ""
            }
          />

        </button>


        {openDropdown === menuKey && (

          <div
            className={`dropdown-menu ${
              isMega ? "mega-menu" : ""
            }`}
          >

            {items.map((item, index) => (

              <Link
                key={index}
                to={`/category/${encodeURIComponent(item)}`}
                className="dropdown-item"
              >
                {item}
              </Link>

            ))}

          </div>

        )}

      </div>

    );
  };


  return (

    <>

      {/* =========================
          TOP BAR
      ========================= */}

      <div className="top-bar">

        <div className="top-bar-left">

          <span>
            Free Shipping on orders above Rs. 499
          </span>

        </div>


        <div className="top-bar-right">

          {token ? (

            <>

              <span className="user-icon">

                <FaUser size={16} />

                <span>
                  Welcome!
                </span>

              </span>


              <button
                className="logout-btn"
                onClick={onLogout}
              >
                Logout
              </button>

            </>

          ) : (

            <button
              className="signin-btn"
              onClick={onLoginClick}
            >
              Sign In
            </button>

          )}

        </div>

      </div>


      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="logo" onClick={()=>navigate("/home")}>

          Book<span>Store</span>

        </div>


        {/* NAV LINKS */}

        <div className="nav-links">

          <Dropdown
            label="Bestsellers"
            items={dropdownData.bestsellers.items}
            menuKey="bestsellers"
          />


          <Dropdown
            label="Shop by Age"
            items={dropdownData.shopByAge.items}
            menuKey="shopByAge"
          />


          <Dropdown
            label="We Recommend"
            items={dropdownData.recommend.items}
            menuKey="recommend"
          />


          <Dropdown
            label="Budget"
            items={dropdownData.budget.items}
            menuKey="budget"
          />


          <Dropdown
            label="Browse"
            items={dropdownData.browse.items}
            menuKey="browse"
            isMega={true}
          />


          <Dropdown
            label="Subjects"
            items={dropdownData.subjects.items}
            menuKey="subjects"
            isMega={true}
          />

        </div>


        {/* CART */}

        <div className="cart-icon">

          <Link to="/cart">

            <FaShoppingCart />

            {totalCartItems > 0 && (

              <span>
                {totalCartItems}
              </span>

            )}

          </Link>

        </div>

      </nav>


      {/* LOGIN MODAL */}

      <LoginModal
        isOpen={isLoginOpen}
        url = {url}
        onClose={() =>
          dispatch(closeLogin())
        }
      />

    </>

  );
};


export default Navbar;
