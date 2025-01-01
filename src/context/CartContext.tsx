"use client";

import React, { createContext, useReducer, useContext } from "react";

// Define the Product and CartState types
interface Product {
  id: number; // Add a unique identifier
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number; // Change price from string to number
}

interface CartState {
  cart: Product[];
}


// Initial state will be retrieved from localStorage
const getInitialState = (): CartState => {
  if (typeof window !== "undefined") {
    // Try to get cart from localStorage if available
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return { cart: JSON.parse(savedCart) };
    }
  }
  return { cart: [] };
};

const initialState: CartState = getInitialState();

// Action type
type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product }; // Add this line

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };

    case "REMOVE_FROM_CART":
      // Remove the item from the cart using its unique id
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(filteredCart));
      }
      return { cart: filteredCart };

    default:
      return state;
  }
}


// Create context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// CartProvider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
