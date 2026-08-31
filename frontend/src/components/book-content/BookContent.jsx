import React from "react";
import { useParams, Link } from "react-router-dom";
import { booksData } from "./booksData";
import "./book-content.css";

const BookContent = () => {
  const { bookId } = useParams();

  const book = booksData.find((book) => book.slug === bookId);

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book Not Found</h2>
        <p>Sorry, we couldn't find the book you're looking for.</p>
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Author images mapping
  const authorImages = {
    1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    4: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    5: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    6: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  };

  // Author names
  const authorNames = {
    1: "Morgan Housel",
    2: "James Clear",
    3: "Paulo Coelho",
    4: "Robert Kiyosaki",
    5: "Cal Newport",
    6: "Héctor García & Francesc Miralles"
  };

  return (
    <div className="book-content-page">
      <div className="book-container">
        <Link to="/" className="back-button">
          ← Back to Books
        </Link>

        <div className="book-detail-card">
          <div className="book-detail-header">
            <div>
              <h1 className="book-detail-title">{book.title}</h1>
              <p className="book-author">by {authorNames[book.id] || "Unknown Author"}</p>
            </div>
          </div>

          <div className="book-content-wrapper">
            <div className="book-author-section">
              <img 
                src={authorImages[book.id]} 
                alt={authorNames[book.id]}
                className="author-image"
              />
              <div className="author-info">
                <h3 className="author-name">{authorNames[book.id]}</h3>
                <p className="author-bio">Bestselling Author</p>
              </div>
            </div>

            <div className="book-story-section">
              <p>{book.story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContent;