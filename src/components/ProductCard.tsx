"use client";

import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useCart } from './CartContext';

interface propType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}


const ProductCard: React.FC<propType> = ({ img, title, desc, rating, price }) => {

    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { img, title, desc, rating, price },
        });
    };

    const generateRatings = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            case 6:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
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
    }

    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>

            <div>
                <Image
                    className="w-full h-auto max-w-full"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />

            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>

                <div>
                    {generateRatings(rating)}
                </div>

                <div className='font-bold text-red-500 flex gap-4 '>
                    ${price}
                    <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>

        </div>
    )
}

export default ProductCard
