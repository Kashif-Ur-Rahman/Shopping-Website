"use client";

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useCart } from "./CartContext";

const HeaderMain = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Parent container */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo Section */}
        <div className="font-bold text-3xl sm:text-4xl text-center sm:text-left text-blackish">
          <img
            src="/Shopping-Hub-logo.png"
            alt="Shopping Hub Logo"
            className="w-20 h-20 sm:w-32 sm:h-32"
          />
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[60%] md:w-[70%] relative">
          <input
            className="border border-gray-400 p-2 px-4 rounded-lg w-full text-sm md:text-base"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
            size={20}
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 text-gray-500 text-2xl md:text-[30px]">
          {/* Authentication Section */}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="text-gray-700 text-xl font-bold hover:text-blue-500">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Heart Icon */}
          <div className="relative text-gray-500 text-[30px]">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-[10px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          {/* Shopping Bag Icon */}
          <div className="relative text-gray-500 text-[30px]">
            <HiOutlineShoppingBag onClick={toggleCart} className="cursor-pointer" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-[10px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
              {state.cart.length} {/* Display the number of items in the cart */}
            </div>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute top-10 left-6 w-64 bg-gray-500 text-white text-sm shadow-lg rounded-lg p-4">
                <h3 className="font-bold text-lg text-white mb-2">Your Cart</h3>
                {state.cart.length > 0 ? (
                  <ul>
                    {state.cart.map((item, index) => (
                      <li key={index} className="border-b py-2">
                        <div className="flex justify-between">
                          <span>{item.title}</span>
                          <span>${item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white text-xl">Your cart is empty.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
