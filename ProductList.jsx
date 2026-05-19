import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plantsData = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Rose", price: 25, category: "Flowering" },
  { id: 5, name: "Fern", price: 12, category: "Indoor" },
  { id: 6, name: "Pothos", price: 18, category: "Indoor" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded([...added, plant.id]);
  };

  const categories = ["Succulents", "Flowering", "Indoor"];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div style={{ display: "flex" }}>
            {plantsData
              .filter(p => p.category === cat)
              .map(plant => (
                <div className="plant-card" key={plant.id}>
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    disabled={added.includes(plant.id)}
                    onClick={() => handleAdd(plant)}
                  >
                    {added.includes(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
