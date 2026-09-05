
{/* =====================================================
    FOOTER
===================================================== */}
import React from 'react'
import "./footer.css"

const Footer = () => {
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

      <a
        href="#products"
        className="footer-cta"
      >
        Explore our collection
        <span>↗</span>
      </a>

    </div>


    {/* NAVIGATION */}

    <div className="footer-column">

      <h4>Explore</h4>

      <a href="#home">
        Home
      </a>

      <a href="#about">
        Our Story
      </a>

      <a href="#products">
        Books
      </a>

      <a href="#products">
        New Arrivals
      </a>

    </div>


    {/* CATEGORIES */}

    <div className="footer-column">

      <h4>Categories</h4>

      <a href="#products">
        Self Development
      </a>

      <a href="#products">
        Business
      </a>

      <a href="#products">
        Finance
      </a>

      <a href="#products">
        Fiction
      </a>

    </div>


    {/* INFORMATION */}

    <div className="footer-column footer-info">

      <h4>BookStore</h4>

      <p>
        Discover your next great read
        and make every page count.
      </p>

      <span>
        Open every day
      </span>

      <span>
        Online bookstore
      </span>

    </div>

  </div>


  {/* FOOTER BOTTOM */}

  <div className="footer-bottom">

    <span>
      © 2026 BookStore. All rights reserved.
    </span>

    <div>
      <a href="#home">
        Privacy
      </a>

      <a href="#home">
        Terms
      </a>

      <a href="#home">
        Back to top ↑
      </a>
    </div>

  </div>

</footer>


    
  )
}

export default Footer
