
import React from "react";
import { useParams, Link } from "react-router-dom";
import { booksData } from "./booksData";
import "./book-content.css";

const BookContent = () => {
  const { id } = useParams();

  const book = booksData.find((book) => book.slug === id);

  if (!book) {
    return (
      <div className="book-not-found">
        <div className="not-found-icon">📚</div>

        <h2>Book Not Found</h2>

        <p>
          Sorry, we couldn't find the book you're looking for.
        </p>

        <Link to="/" className="back-home">
          ← Back to Books
        </Link>
      </div>
    );
  }

  const authorImages = {
    1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&crop=face",
    4: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
    5: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    6: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
  };

  const authorNames = {
    1: "Morgan Housel",
    2: "James Clear",
    3: "Paulo Coelho",
    4: "Robert Kiyosaki",
    5: "Cal Newport",
    6: "Héctor García & Francesc Miralles",
  };

  const authorDescriptions = {
    1: "Morgan Housel is an award-winning author and partner at The Collaborative Fund. He writes extensively about investing, wealth, psychology and human behavior.",
    2: "James Clear is an author and speaker focused on habits, decision-making and continuous improvement. His work has helped millions of people build better systems.",
    3: "Paulo Coelho is a Brazilian novelist known around the world for philosophical and inspirational stories that explore dreams, destiny and the human journey.",
    4: "Robert Kiyosaki is an entrepreneur and author best known for his work on financial education, investing and building long-term wealth.",
    5: "Cal Newport is a computer science professor and author who writes about productivity, focused work, digital minimalism and creating meaningful professional lives.",
    6: "Héctor García and Francesc Miralles are writers and researchers whose work explores Japanese culture, wellbeing, purpose, longevity and the philosophy of living meaningfully.",
  };

  return (
    <div className="book-content-page">

      {/* =========================================
          NAVIGATION
      ========================================= */}

      <div className="book-container">

        <Link to="/" className="back-button">
          <span>←</span> Back to Books
        </Link>


        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="book-hero">

          <div className="book-cover-wrapper">
            <div className="book-cover-shadow"></div>

            {book.coverImage ? (
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
              />
            ) : (
              <div className="book-cover-placeholder">
                <span>📖</span>
                <h3>{book.title}</h3>
              </div>
            )}
          </div>


          <div className="book-hero-content">

            <span className="book-category">
              {book.category}
            </span>

            <h1 className="book-detail-title">
              {book.title}
            </h1>

            <p className="book-author">
              By{" "}
              <strong>
                {authorNames[book.id] || "Unknown Author"}
              </strong>
            </p>

            <div className="book-rating">
              <span className="stars">★★★★★</span>
              <span>Highly Recommended</span>
            </div>

            <p className="book-description">
              {book.description}
            </p>

            <div className="book-meta">

              <div className="meta-item">
                <span className="meta-label">Format</span>
                <strong>{book.format}</strong>
              </div>

              <div className="meta-item">
                <span className="meta-label">Language</span>
                <strong>{book.language}</strong>
              </div>

              <div className="meta-item">
                <span className="meta-label">Category</span>
                <strong>{book.category}</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="book-content-grid">

          <main className="book-main-content">

            {/* OVERVIEW */}

            <section className="content-section">

              <div className="section-heading">
                <span className="section-number">01</span>

                <div>
                  <span className="section-small-title">
                    THE BOOK
                  </span>

                  <h2>Overview</h2>
                </div>
              </div>

              <p className="story-text">
                {book.story}
              </p>

              {book.extendedStory && (
                <p className="story-text">
                  {book.extendedStory}
                </p>
              )}

            </section>


            {/* QUOTE */}

            <section className="quote-section">

              <div className="quote-mark">“</div>

              <blockquote>
                {book.quote}
              </blockquote>

              <div className="quote-line"></div>

              <p>
                A thought worth carrying beyond the pages.
              </p>

            </section>


            {/* KEY TAKEAWAYS */}

            <section className="content-section">

              <div className="section-heading">
                <span className="section-number">02</span>

                <div>
                  <span className="section-small-title">
                    KEY IDEAS
                  </span>

                  <h2>What You'll Take Away</h2>
                </div>
              </div>

              <div className="takeaways-grid">

                {book.takeaways.map((takeaway, index) => (
                  <div
                    className="takeaway-card"
                    key={index}
                  >
                    <div className="takeaway-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{takeaway}</p>
                  </div>
                ))}

              </div>

            </section>


            {/* WHAT YOU WILL LEARN */}

            {book.learn && (
              <section className="content-section">

                <div className="section-heading">
                  <span className="section-number">03</span>

                  <div>
                    <span className="section-small-title">
                      PRACTICAL VALUE
                    </span>

                    <h2>What You'll Learn</h2>
                  </div>
                </div>

                <div className="learning-list">

                  {book.learn.map((item, index) => (
                    <div
                      className="learning-item"
                      key={index}
                    >
                      <span className="check-icon">✓</span>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}

                </div>

              </section>
            )}


            {/* THEMES */}

            {book.themes && (
              <section className="content-section">

                <div className="section-heading">
                  <span className="section-number">04</span>

                  <div>
                    <span className="section-small-title">
                      EXPLORE
                    </span>

                    <h2>Core Themes</h2>
                  </div>
                </div>

                <div className="themes-wrapper">

                  {book.themes.map((theme, index) => (
                    <span
                      className="theme-tag"
                      key={index}
                    >
                      {theme}
                    </span>
                  ))}

                </div>

              </section>
            )}

          </main>


          {/* =========================================
              SIDEBAR
          ========================================= */}

          <aside className="book-sidebar">

            {/* BOOK DETAILS */}

            <div className="sidebar-card">

              <h3>Book Details</h3>

              <div className="detail-row">
                <span>Title</span>
                <strong>{book.title}</strong>
              </div>

              <div className="detail-row">
                <span>Author</span>
                <strong>
                  {authorNames[book.id]}
                </strong>
              </div>

              <div className="detail-row">
                <span>Format</span>
                <strong>{book.format}</strong>
              </div>

              <div className="detail-row">
                <span>Language</span>
                <strong>{book.language}</strong>
              </div>

              <div className="detail-row">
                <span>Category</span>
                <strong>{book.category}</strong>
              </div>

            </div>


            {/* AUTHOR */}

            <div className="sidebar-card author-card">

              <span className="sidebar-label">
                ABOUT THE AUTHOR
              </span>

              <img
                src={authorImages[book.id]}
                alt={authorNames[book.id]}
                className="author-image"
              />

              <h3 className="author-name">
                {authorNames[book.id]}
              </h3>

              <p className="author-role">
                Author & Writer
              </p>

              <p className="author-bio">
                {authorDescriptions[book.id]}
              </p>

            </div>


            {/* WHY READ */}

            {book.whyRead && (
              <div className="sidebar-card why-read-card">

                <span className="sidebar-label">
                  WHY READ IT?
                </span>

                <h3>
                  A book worth your time.
                </h3>

                <p>
                  {book.whyRead}
                </p>

              </div>
            )}

          </aside>

        </div>


        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="book-ending">

          <span>KEEP READING</span>

          <h2>
            Every great book<br />
            leaves something behind.
          </h2>

          <Link to="/" className="explore-books-btn">
            Explore More Books
            <span>→</span>
          </Link>

        </section>

      </div>

    </div>
  );
};

export default BookContent

