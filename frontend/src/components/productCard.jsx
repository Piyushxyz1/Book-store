const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image}
      </div>

      <div className="product-info">
        <a href={product.href} className="view-book-button">
          View Book
        </a>
        
        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <h4>
            ${product.price.toFixed(2)}
          </h4>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;