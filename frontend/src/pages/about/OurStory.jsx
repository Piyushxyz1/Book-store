import React from "react";
import { Link } from "react-router-dom";
import "./ourstory.css";

const OurStory = () => {
  return (
    <main className="our-story">

      {/* HERO */}
      <section className="story-hero">

        <div className="story-hero-content">
          <span className="story-eyebrow">
            OUR STORY
          </span>

          <h1>
            Books that deserve
            <em> your time.</em>
          </h1>

          <p>
            We believe a great bookstore is more than a place to buy books.
            It is a place to discover ideas, stories and perspectives that
            stay with you long after the final page.
          </p>
        </div>

        <div className="story-hero-image">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400"
            alt="Bookshelves"
          />
        </div>

      </section>


      {/* INTRO */}
      <section className="story-intro">

        <div className="story-intro-number">
          01
        </div>

        <div className="story-intro-content">
          <span className="story-eyebrow">
            WHY BOOKSTORE
          </span>

          <h2>
            A carefully chosen
            <br />
            collection of books.
          </h2>

          <p>
            The world has no shortage of books. What it sometimes lacks is
            the time to find the right one.
          </p>

          <p>
            Our collection brings together bestselling titles, timeless
            classics, contemporary fiction, practical knowledge and books
            worth discovering. Every category is designed to make finding
            your next read simpler and more enjoyable.
          </p>
        </div>

      </section>


      {/* PHILOSOPHY */}
      <section className="story-philosophy">

        <div className="story-philosophy-heading">
          <span className="story-eyebrow">
            OUR PHILOSOPHY
          </span>

          <h2>
            Read widely.
            <br />
            Choose deliberately.
          </h2>
        </div>

        <div className="story-values">

          <article>
            <span>01</span>
            <h3>Curated</h3>
            <p>
              We bring together books across genres so there is always
              something new to explore.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Accessible</h3>
            <p>
              Great books should be easy to discover, whether you are a
              lifelong reader or buying your first book.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Enduring</h3>
            <p>
              We value books that remain meaningful long after trends
              disappear.
            </p>
          </article>

        </div>

      </section>


      {/* QUOTE */}
      <section className="story-quote">

        <div className="quote-mark">“</div>

        <blockquote>
          Some books are read once.
          <br />
          The best ones become part of you.
        </blockquote>

      </section>


      {/* CTA */}
      <section className="story-cta">

        <span className="story-eyebrow">
          FIND YOUR NEXT READ
        </span>

        <h2>
          Your next favourite book
          <br />
          might be waiting.
        </h2>

        <Link to="/products" className="story-button">
          Explore the collection
          <span>↗</span>
        </Link>

      </section>

    </main>
  );
};

export default OurStory;