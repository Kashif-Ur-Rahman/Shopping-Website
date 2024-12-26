"use client";

import { useCart } from './CartContext';

const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.length > 0 ? (
        <ul>
          {state.cart.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
