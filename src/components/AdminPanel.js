import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({
  products,
  addProduct,
  updateProduct,
  deleteProduct
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);

  const clearForm = () => {
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      updateProduct(editingId, {
        name: name,
        description: description,
        image: image,
        price: Number(price)
      });
    } else {
      addProduct({
        name: name,
        description: description,
        image: image,
        price: Number(price)
      });
    }

    clearForm();
  };

  const editProduct = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description);
    setImage(product.image);
    setPrice(product.price);
  };

  return (
    <div className="admin">
      <h1>ADMIN</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">
          {editingId !== null ? "Save" : "Add"}
        </button>
      </form>

      <div className="admin-products">
        {products.map((product) => (
          <div className="admin-product" key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>

            <button
              type="button"
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>

            <button
              type="button"
              className="float-right"
              onClick={() => editProduct(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;