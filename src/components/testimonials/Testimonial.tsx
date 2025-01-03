"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial = () => {
    return (
        <div className="container pt-16 pb-16 grid grid-col-2 ">
            <h2 className="font-bold text-3xl text-red-500 pb-4">Testimonial</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <motion.div
                    className="bg-white shadow-lg rounded-lg border-2 p-6 max-w-sm text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image
                        className="rounded-full mx-auto object-cover"
                        src="/Elon-Musk.jpeg"
                        width={100}
                        height={130}
                        alt="Elon Musk"
                    />

                    <h2 className="text-blackish font-bold text-xl pt-4">Elon Musk</h2>
                    <p className="text-gray-500">CEO & Founder of Twitter</p>

                    {/* Quote Icon */}
                    <div className="pl-24 pt-4 pb-4 text-3xl text-accent">
                        <FaQuoteLeft />
                    </div>
                    {/* Quote Text */}
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae
                        iste quo! Quisquam fuga qui eos sunt voluptates? Iure cupiditate
                        exercitationem laudantium repudiandae quasi quia esse voluptate et
                        aspernatur qui.
                    </p>
                </motion.div>
                <div className="bg-red-600 bg-[url(/summer-collection.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                    <div className="bg-[#ffffffab] min-w-[270px] sm:m-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 grid place-items-center gap-3">
                        <motion.button
                            className="bg-blackish text-white p-2 rounded-md"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            25% DISCOUNT
                        </motion.button>

                        <h2 className="font-extrabold text-2xl text-[#272727]">Summer Collection</h2>

                        <p className="text-gray-500 text-[20px]">Starting @ $30 <b>SHOP NOW</b></p>
                    </div>
                </div>
            </div>

            {/* Go to Top Button */}
            <div className="flex items-center justify-center pt-12">
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-blue-500 text-white text-xl py-2 px-4 rounded hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Go to Top
                </motion.button>
            </div>
        </div>
    );
};

export default Testimonial;
