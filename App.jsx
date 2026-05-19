import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import { useSelector } from "react-redux";

const App = () => {
  const [page, setPage] = useState("home");
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <a onClick={() => setPage("home")}>Home</a>
          <a onClick={() => setPage("plants")}>Plants</a>
          <a onClick={() => setPage("cart")}>
            Cart ({cart.reduce((a, c) => a + c.quantity, 0)})
          </a>
        </div>
      </div>

      <div className="container">
        {page === "home" && <AboutUs />}
        {page === "plants" && <ProductList />}
        {page === "cart" && <CartItem />}
      </div>
    </div>
  );
};

export default App;
