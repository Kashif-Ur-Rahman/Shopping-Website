import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const MobNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[500px] mx-auto px-6 sm:px-8 lg:hidden">
            <div className="flex justify-between items-center text-[24px] sm:text-[28px] py-3">
                {/* Shopping Bag Icon with Badge */}
                <div className="relative">
                    <HiOutlineShoppingBag />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[10px] sm:text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </div>

                {/* Home Icon */}
                <AiOutlineHome />

                {/* Heart Icon with Badge */}
                <div className="relative">
                    <FiHeart />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[10px] sm:text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
                        0
                    </div>
                </div>

                {/* Appstore Icon */}
                <AiOutlineAppstore />
            </div>
        </div>
    );
};

export default MobNavbar;
