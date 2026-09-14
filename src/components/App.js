import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "./../styles/App.css";

const initialProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S8 64GB Black",
    price: 16303,
    image: "https://dummyimage.com/120x120/e5e5e5/ffffff",
    description: "Samsung Galaxy S8 64GB Black mobile phone."
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    image: "https://dummyimage.com/120x120/333333/ffffff",
    description: "Samsung Galaxy S9 64GB Black mobile phone."
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 18701,
    image: "https://dummyimage.com/120x120/173d68/ffffff",
    description: "Samsung Galaxy S8+ 64GB Black mobile phone."
  },
  {
    id: 4,
    name: "Samsung Galaxy S7 32GB Black",
    price: 14500,
    image: "https://dummyimage.com/120x120/222222/ffffff",
    description: "Samsung Galaxy S7 32GB Black mobile phone."
  },
  {
    id: 5,
    name: "Samsung Galaxy S9+ 128GB Black",
    price: 23500,
    image: "https://dummyimage.com/120x120/444444/ffffff",
    description: "Samsung Galaxy S9+ 128GB Black mobile phone."
  },
  {
    id: 6,
    name: "Samsung Galaxy Note 8 Black",
    price: 19400,
    image: "https://dummyimage.com/120x120/555555/ffffff",
    description: "Samsung Galaxy Note 8 Black mobile phone."
  },
  {
    id: 7,
    name: "Samsung Galaxy A50 Black",
    price: 15900,
    image: "https://dummyimage.com/120x120/333333/ffffff",
    description: "Samsung Galaxy A50 Black mobile phone."
  },
  {
    id: 8,
    name: "Samsung Galaxy A70 Black",
    price: 21500,
    image: "https://dummyimage.com/120x120/111111/ffffff",
    description: "Samsung Galaxy A70 Black mobile phone."
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id:
        products.length > 0
          ? Math.max(...products.map((p) => p.id)) + 1
          : 1
    };

    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, ...updatedProduct }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/admin">ADMIN</Link>
        </nav>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductList products={products} />
            )}
          />

          <Route
            path="/products/:id"
            render={() => (
              <ProductDetails products={products} />
            )}
          />

          <Route
            path="/admin"
            render={() => (
              <AdminPanel
                products={products}
                addProduct={addProduct}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;