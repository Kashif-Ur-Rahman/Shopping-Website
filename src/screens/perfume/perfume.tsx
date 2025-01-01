// src/app/perfume/page.tsx

import React from "react";

const perfumeProducts = [
    { id: 1, name: "Rose Scent", description: "Aromatic rose perfume for a refreshing feel.", img: "/rose-scent.jpg" },
    { id: 2, name: "Citrus Blend", description: "Energizing citrus blend for daily wear.", img: "/citrus-blend.jpg" },
    { id: 3, name: "Vanilla Essence", description: "Warm vanilla essence for a comforting aroma.", img: "/vanilla-essence.jpg" },
    { id: 4, name: "Woody Musk", description: "Bold woody musk for a signature style.", img: "/woody-musk.jpg" },
    { id: 5, name: "Floral Bouquet", description: "Sophisticated floral bouquet for elegance.", img: "/floral-bouquet.jpg" },
    { id: 6, name: "Ocean Breeze", description: "Refreshing ocean breeze for a calming scent.", img: "/ocean-breeze.jpg" },
    { id: 7, name: "Amber Glow", description: "Luxurious amber glow for special occasions.", img: "/amber-glow.jpg" },
    { id: 8, name: "Lavender Fields", description: "Soothing lavender fields for relaxation.", img: "/lavender-fields.jpg" },
];

const PerfumePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Perfume Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perfumeProducts.map((product) => (
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

export default PerfumePage;
