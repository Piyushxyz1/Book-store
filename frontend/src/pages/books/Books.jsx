import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../booksbycategory/CategoryData";
import ProductCard from "../../components/productCard";
import "./books.css";

const Books = ({ addToCart }) => {

  // Featured books from BW Bestsellers category
  const featuredBooks =
    categoryData["BW Bestsellers"]?.books?.slice(0, 4) || [];

  return (
    <main className="books-page">

      {/* HERO */}

      <section className="books-hero">

        <div className="books-hero-image">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400"
            alt="Books"
          />
        </div>

        <div className="books-hero-content">

          <span className="books-eyebrow">
            THE WORLD OF BOOKS
          </span>

          <h1>
            Find the book
            <br />
            <em>that finds you.</em>
          </h1>

          <p>
            From unforgettable stories to ideas that change the way
            you see the world, explore books for every kind of reader.
          </p>

          <Link to="/products" className="books-button">
            Browse all books
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* GENRES */}

      <section className="books-genres">

        <div className="books-section-title">

          <span className="books-eyebrow">
            EXPLORE BY GENRE
          </span>

          <h2>
            Something for
            <br />
            every reader.
          </h2>

        </div>

        <div className="genre-list">

          <Link to="/category/Modern%20%26%20Contemporary%20Fiction">
            <span>01</span>
            Fiction
            <b>↗</b>
          </Link>

          <Link to="/category/Thriller%20%2F%20Suspense%20Fiction">
            <span>02</span>
            Thriller & Suspense
            <b>↗</b>
          </Link>

          <Link to="/category/Classic%20Fiction">
            <span>03</span>
            Classics
            <b>↗</b>
          </Link>

          <Link to="/category/History">
            <span>04</span>
            History
            <b>↗</b>
          </Link>

          <Link to="/category/Fantasy">
            <span>05</span>
            Fantasy
            <b>↗</b>
          </Link>

          <Link to="/category/Self-help%2C%20Personal%20Development%20and%20Practical%20Advice">
            <span>06</span>
            Self Development
            <b>↗</b>
          </Link>

        </div>

      </section>


      {/* FEATURED BOOKS */}

      <section className="books-featured">

        <div className="books-featured-header">

          <div>

            <span className="books-eyebrow">
              HANDPICKED
            </span>

            <h2>
              Featured books
            </h2>

          </div>

          <Link to="/products">
            View all →
          </Link>

        </div>


        <div className="books-grid">

          {featuredBooks.map((book) => (
            <ProductCard
              key={book.id}
              product={book}
              addToCart={addToCart}
            />
          ))}

        </div>

      </section>


      {/* STATEMENT */}

      <section className="books-statement">

        <span className="books-eyebrow">
          TAKE YOUR TIME
        </span>

        <h2>
          A good book doesn't
          <br />
          ask for much.
          <em> Just time.</em>
        </h2>

        <p>
          Slow down. Turn the page. Discover something you didn't
          know you were looking for.
        </p>

      </section>

    </main>
  );
};

export default Books;