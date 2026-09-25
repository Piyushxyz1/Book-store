import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../pages/booksbycategory/CategoryData";
import "./footer.css";

const Footer = () => {
  // Selected categories from categoryData
  const categories = [
    "BW Bestsellers",
    "New Releases",
    "Fantasy",
    "Classic Fiction",
    "Thriller / Suspense Fiction",
    "History",
    "Self-help, Personal Development and Practical Advice",
    "Action and Adventure Stories",
  ];

  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo">
            BOOK<span>STORE</span>
          </div>

          <p className="footer-description">
            A carefully curated space for stories,
            ideas, knowledge and books worth
            spending time with.
          </p>

          <Link
            to="/"
            className="footer-cta"
          >
            Explore our collection
            <span>↗</span>
          </Link>

        </div>


        {/* NAVIGATION */}

        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            Our Story
          </Link>

          <Link to="/products">
            Books
          </Link>

          <Link to="/category/New%20Releases">
            New Arrivals
          </Link>

        </div>


        {/* CATEGORIES */}

        <div className="footer-column">

          <h4>Categories</h4>

          {categories.slice(0, 4).map((categoryName) => (
            <Link
              key={categoryName}
              to={`/category/${encodeURIComponent(categoryName)}`}
            >
              {categoryData[categoryName].title}
            </Link>
          ))}

        </div>


        {/* MORE CATEGORIES */}

        <div className="footer-column">

          <h4>More to Explore</h4>

          {categories.slice(4).map((categoryName) => (
            <Link
              key={categoryName}
              to={`/category/${encodeURIComponent(categoryName)}`}
            >
              {categoryData[categoryName].title}
            </Link>
          ))}

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 BookStore. All rights reserved.
        </span>

        <div>

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

          <a href="#top">
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;