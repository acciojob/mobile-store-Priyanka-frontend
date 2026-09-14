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
        name,
        description,
        image,
        price: Number(price)
      });
    } else {
      addProduct({
        name,
        description,
        image,
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

      {/* ADD / EDIT FORM */}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          value={name}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="form-control"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          className="form-control"
          value={price}
          placeholder="Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">
          {editingId !== null ? "Save" : "Add"}
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="admin-products">
        {products.map((product) => (
          <div className="admin-product" key={product.id}>

            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>

            <span>
              Price: {product.price}
            </span>

            {/* DELETE */}
            <button
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>

            {/* EDIT */}
            <button
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