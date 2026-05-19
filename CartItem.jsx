import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../redux/CartSlice";

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="plant-card">
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Qty: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => (window.location.href = "/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
