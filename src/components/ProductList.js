import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-row" key={product.id}>
          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-content">
            <Link
              className="product-name"
              to={`/products/${product.id}`}
            >
              {product.name}
            </Link>

            <div className="product-bottom">
              <span className="price">
                Price: {product.price}
              </span>

              <button className="buy-btn">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;