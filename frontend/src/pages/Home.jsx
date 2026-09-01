import { useState } from "react";
import axios from "axios";
import "./Cart.css";
import ProductCard from "../components/productCard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "../reduxStore/cartSlice";

const Home = ({ token }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log(cart);

  const url = import.meta.env.VITE_API_URL;

  const products = [
    {
      id: 1,
      name: "The Psychology of Money",
      price: 19.99,
      image: "/images/psychology-of-money.jpg",
      description: "Learn how people think about money, wealth, and financial decisions.",
      href: "/book/psychology-of-money"
    },
    {
      id: 2,
      name: "Atomic Habits",
      price: 24.99,
      image: "/images/atomic-habits.jpg",
      description: "Build better habits and make meaningful changes in your daily life.",
      href: "/book/atomic-habits"
    },
    {
      id: 3,
      name: "The Alchemist",
      price: 14.99,
      image: "/images/the-alchemist.png",
      description: "A timeless story about dreams, purpose, and following your journey.",
      href: "/book/the-alchemist"
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      price: 21.99,
      image: "/images/rich-dad-poor-dad.webp",
      description: "Explore financial education, investing, and building wealth.",
      href: "/book/rich-dad-poor-dad"
    },
    {
      id: 5,
      name: "Deep Work",
      price: 22.99,
      image: "/images/Deep-Work.jpg",
      description: "Discover strategies for focused work and improving productivity.",
      href: "/book/deep-work"
    },
    {
      id: 6,
      name: "Ikigai",
      price: 17.99,
      image: "/images/ikigai.webp",
      description: "Explore the Japanese concept of finding purpose and meaning in life.",
      href: "/book/ikigai"
    },
  ];

  const viewBook = (product) => {
    window.location.href = product.href;
  };

  // ADD TO CART

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/add`,
        {
          itemId: product.id,
          productName: product.name,
          price: product.price,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(addToCartRedux(product));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="home">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">
          Book<span>Store</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Books</a>
        </div>

        <div className="cart-icon">
          <Link to={"/cart"}>🛒</Link>
          <span>{totalCartItems}</span>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">
            DISCOVER GREAT BOOKS
          </p>

          <h1>
            Your Next
            <span> Great Read.</span>
          </h1>

          <p className="hero-description">
            Explore a carefully selected collection of books
            designed to inspire, educate, entertain, and
            transform the way you think.
          </p>

          <a href="#products" className="shop-btn">
            Browse Books →
          </a>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <div className="hero-product product-one">
            📚
          </div>

          <div className="hero-product product-two">
            📖
          </div>

          <div className="hero-product product-three">
            📕
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="features">
        <div className="feature">
          <h3>🚚 Fast Delivery</h3>

          <p>
            Get your favorite books delivered quickly and safely.
          </p>
        </div>

        <div className="feature">
          <h3>📚 Wide Collection</h3>

          <p>
            Discover books across multiple genres and categories.
          </p>
        </div>

        <div className="feature">
          <h3>🔒 Secure Payments</h3>

          <p>
            Shop confidently with safe and secure payments.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about" id="about">
        <div className="about-image">
          <div className="about-box">
            <span>📖</span>
            <h3>Knowledge & Imagination</h3>
          </div>
        </div>

        <div className="about-content">
          <p className="section-tag">
            ABOUT BOOKSTORE
          </p>

          <h2>
            Stories That Inspire
            <span> Your Journey.</span>
          </h2>

          <p>
            At BookStore, we believe every book has the power
            to inspire new ideas, spark imagination, and create
            meaningful experiences.
          </p>

          <p>
            From bestselling novels and self-development books
            to business, finance, and inspirational reads, we
            bring great stories and valuable knowledge together
            in one place.
          </p>

          <div className="about-stats">
            <div>
              <h3>10K+</h3>
              <p>Happy Readers</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Books Available</p>
            </div>

            <div>
              <h3>4.8★</h3>
              <p>Reader Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section
        className="products-section"
        id="products"
      >
        <div className="section-header">
          <div>
            <p className="section-tag">
              OUR COLLECTION
            </p>

            <h2>
              Explore Our Latest
              <span> Books.</span>
            </h2>
          </div>

          <p>
            Find your next favorite book from our carefully
            selected collection.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              viewBook={viewBook}
            />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <div>
          <p className="section-tag">
            START READING
          </p>

          <h2>
            Every Book Opens
            <span> A New World.</span>
          </h2>
        </div>

        <a href="#products">
          Explore Books
        </a>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div>
          <div className="logo">
            Book<span>Store</span>
          </div>

          <p>
            Your destination for inspiring stories,
            knowledge, and great books.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Books</a>
        </div>

        <p className="copyright">
          © 2026 BookStore. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;