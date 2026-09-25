import { useParams } from "react-router-dom";
import categoryData from "./CategoryData";
import booksData from "../../components/book-content/booksData";
import "./category.css";
import ProductCard from "../../components/productCard";

const CategoryPage = ({ addToCart }) => {
  const { categoryName } = useParams();

  const category = categoryData[categoryName];

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className="category-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home <span>/</span> Categories <span>/</span> {category.title}
      </div>

      {/* Category Hero */}
      <section className="category-hero">

        <div className="category-hero-content">
         

          <h1>{category.title}</h1>

          <h2>{category.subtitle}</h2>

          <p>{category.description}</p>

          <p>
            Explore our carefully selected collection of books and discover
            your next favourite read. From bestselling titles to hidden gems,
            we have something for every kind of reader.
          </p>
        </div>

      </section>

      {/* Category Information */}
      <div className="category-info">

        <div>
          <h3>Discover Your Next Read</h3>
          <p>
            Browse through our collection and find books that match your
            interests, mood and reading style.
          </p>
        </div>

        <div className="category-stats">
          <strong>{category.books.length}+</strong>
          <span>Books Available</span>
        </div>

      </div>

      {/* Books Section */}
      <section className="books-section">

        <div className="books-header">

          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Books You’ll Love</h2>
            <p>
              Handpicked books selected for readers looking for their next
              great story.
            </p>
          </div>

        </div>

        <div className="books-grid">
          {category.books.map((book, index) => (
            <ProductCard
              key={index}
              product={book}
              addToCart={addToCart}
            />
          ))}
        </div>

      </section>

      {/* Bottom Content */}
      <section className="category-footer">

        <h2>Find Your Next Favourite Book</h2>

        <p>
          Whether you're looking for an exciting thriller, a timeless classic,
          a personal development book or an unforgettable story, our collection
          has plenty of choices waiting for you.
        </p>

        <p>
          Take your time, explore the collection and pick a book that deserves
          a place on your bookshelf.
        </p>

      </section>

    </div>
  );
};

export default CategoryPage;