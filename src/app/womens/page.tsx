// src/app/womens/page.tsx

import React from "react";

const womensProducts = [
    { id: 1, name: "Evening Dress", description: "Elegant evening dress for special occasions.", img: "/evening-dress.jpg" },
    { id: 2, name: "Casual Top", description: "Stylish and comfortable casual top.", img: "/casual-top.jpg" },
    { id: 3, name: "Skirt", description: "Trendy and fashionable skirt.", img: "/skirt.jpg" },
    { id: 4, name: "Handbag", description: "Chic handbag for everyday use.", img: "/handbag.jpg" },
    { id: 5, name: "Jumpsuit", description: "Modern jumpsuit for a stylish look.", img: "/jumpsuit.jpg" },
    { id: 6, name: "Tunic", description: "Elegant tunic for casual wear.", img: "/tunic.jpg" },
    { id: 7, name: "Scarf", description: "Soft and beautiful scarf to enhance your style.", img: "/scarf.jpg" },
    { id: 8, name: "Heels", description: "Stylish heels for formal and casual wear.", img: "/heels.jpg" },
];

const WomensPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Women's Wear</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {womensProducts.map((product) => (
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

export default WomensPage;
