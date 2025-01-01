// src/app/categories/page.tsx

import React from "react";

const categories = [
    { id: 1, name: "Men's Wear", description: "Explore our men's clothing collection.", img: "/mens-wear.png" },
    { id: 2, name: "Women's Wear", description: "Discover the latest trends in women's fashion.", img: "/womens-wear.jpg" },
    { id: 3, name: "Jewelry", description: "Find the perfect jewelry to complete your look.", img: "/jewelry.jpeg" },
    { id: 4, name: "Perfume", description: "Shop our exclusive range of perfumes.", img: "/perfume.png" },
    { id: 5, name: "Watches", description: "Stylish and elegant watches for every occasion.", img: "/watches.jpg" },
    { id: 6, name: "Bags", description: "Discover a range of trendy and durable bags.", img: "/bags.jpg" },
    { id: 7, name: "Footwear", description: "Comfortable and fashionable footwear for everyone.", img: "/footwear.jpg" },
    { id: 8, name: "Accessories", description: "Complete your look with our exclusive accessories.", img: "/accessories.jpg" },
];

const CategoriesPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="h-96 w-full max-w-sm border rounded-lg shadow-md overflow-hidden flex flex-col mx-auto"
                        >
                            <img
                                src={category.img}
                                alt={category.name}
                                className="h-2/3 w-full object-cover"
                            />
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                                <p className="text-gray-600">{category.description}</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
 