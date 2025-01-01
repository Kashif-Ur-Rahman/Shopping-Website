import React from "react";

const mensProducts = [
    { id: 1, name: "Formal Suit", description: "Premium quality formal suit.", img: "/formal-sout.jpeg" },
    { id: 2, name: "Casual Shirt", description: "Stylish and comfortable casual shirt.", img: "/casual-shirt.jpg" },
    { id: 3, name: "Jeans", description: "Trendy and durable jeans.", img: "/jeans.jpg" },
    { id: 4, name: "Shoes", description: "Elegant and durable shoes.", img: "/shoes.jpeg" },
    { id: 5, name: "Blazer", description: "Classic blazer for formal occasions.", img: "/blazer.jpg" },
    { id: 6, name: "T-Shirt", description: "Casual t-shirt for daily wear.", img: "/T-Shirt.jpg" },
    { id: 7, name: "Jacket", description: "Stylish jacket for cold weather.", img: "/Jacket.jpg" },
    { id: 8, name: "Sweater", description: "Comfortable sweater for winter.", img: "/sweater.jpg" },
];

const MensPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Men's Wear</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mensProducts.map((product) => (
                        <div
                            key={product.id}
                            className="h-96 w-full max-w-sm border rounded-lg shadow-md overflow-hidden flex flex-col mx-auto"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="h-2/3 w-full object-cover"
                            />
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
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

export default MensPage;
