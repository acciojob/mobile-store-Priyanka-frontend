import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="details">
        <h2>Product Not Found</h2>

        <Link to="/" className="btn">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="details">
      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h3>Price: {product.price}</h3>

      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
}

export default ProductDetails;