import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
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
                    {/* User Icon - Hidden on small screens */}
                    <div className="hidden sm:block">
                        <BiUser />
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
                        <HiOutlineShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-[10px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
