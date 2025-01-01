"use client";

import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
    const { state } = useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {state.cart.length > 0 ? (
                <ul>
                    {state.cart.map((item, index) => (
                        <li
                            key={index}
                            className="border-b border-gray-300 py-4 flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
