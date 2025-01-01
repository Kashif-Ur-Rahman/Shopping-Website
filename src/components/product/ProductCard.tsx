"use client";

import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

// Corrected propType to include id
interface propType {
    id?: number; // Optional in the propType, as it can be generated
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: number;
}

const ProductCard: React.FC<propType> = ({ id, img, title, desc, rating, price }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: id || Date.now(), // Use `id` if provided, otherwise generate one
                img,
                title,
                desc,
                rating,
                price
            },
        });
    };

    const generateRatings = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="px-4 border border-gray-200 rounded-xl max-w-[400px]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Product Image */}
            <div>
                <Image
                    className="w-full h-auto max-w-full"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />
            </div>

            {/* Product Details */}
            <div className="space-y-2 py-2">
                <h2 className="text-accent font-medium uppercase">{title}</h2>
                <p className="text-gray-500 max-w-[150px]">{desc}</p>

                <div>{generateRatings(rating)}</div>

                <div className="font-bold text-red-500 flex gap-4">
                    ${price}
                    <del className="text-gray-500 font-normal">
                        ${price + 50}.00
                    </del>
                </div>

                {/* Add to Cart Button with Framer Motion */}
                <motion.button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-500"
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
