import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      {!started ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover beautiful houseplants that bring life, freshness,
            and peace into your home.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="get-started-btn"
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;