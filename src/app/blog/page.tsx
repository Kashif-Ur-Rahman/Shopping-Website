// src/app/blog/page.tsx

import React from "react";

const blogPosts = [
    { id: 1, title: "Fashion Trends 2024", description: "Stay updated with the latest fashion trends of 2024.", img: "/fashion-trends.jpg" },
    { id: 2, title: "Jewelry Care Tips", description: "Learn how to maintain your jewelry to keep it shining.", img: "/jewelry-care.jpg" },
    { id: 3, title: "Perfume Guide", description: "Discover how to choose the perfect fragrance.", img: "/perfume-guide.jpg" },
    { id: 4, title: "Men's Style Essentials", description: "Top style essentials every man must own.", img: "/mens-style.jpg" },
    { id: 5, title: "Sustainable Fashion", description: "Explore sustainable fashion practices.", img: "/sustainable-fashion.jpg" },
    { id: 6, title: "Women's Wardrobe Must-Haves", description: "Key items every woman should have in her wardrobe.", img: "/womens-wardrobe.jpg" },
    { id: 7, title: "The Art of Layering", description: "Master the art of layering your outfits for any season.", img: "/layering-art.jpg" },
    { id: 8, title: "Seasonal Perfume Picks", description: "Best perfumes to wear in every season.", img: "/seasonal-perfume.jpg" },
];

const BlogPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="h-96 w-full max-w-sm border rounded-lg shadow-md overflow-hidden flex flex-col mx-auto"
                        >
                            <img
                                src={post.img}
                                alt={post.title}
                                className="h-2/3 w-full object-cover"
                            />
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-gray-600">{post.description}</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
