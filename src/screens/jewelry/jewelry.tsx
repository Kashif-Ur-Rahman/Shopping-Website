// src/app/jewelry/page.tsx

import React from "react";

const jewelryProducts = [
    { id: 1, name: "Gold Necklace", description: "Exquisite gold necklace for a luxurious look.", img: "/gold-necklace.jpg" },
    { id: 2, name: "Diamond Earrings", description: "Elegant diamond earrings for special occasions.", img: "/diamond-earrings.jpg" },
    { id: 3, name: "Silver Bracelet", description: "Stylish silver bracelet for everyday wear.", img: "/silver-bracelet.jpg" },
    { id: 4, name: "Pearl Ring", description: "Classic pearl ring to complement your outfit.", img: "/pearl-ring.jpg" },
    { id: 5, name: "Charm Pendant", description: "Trendy charm pendant for a chic style.", img: "/charm-pendant.jpg" },
    { id: 6, name: "Gold Bangles", description: "Beautiful gold bangles for a traditional look.", img: "/gold-bangles.jpg" },
    { id: 7, name: "Gemstone Brooch", description: "Unique gemstone brooch to enhance your outfit.", img: "/gemstone-brooch.jpg" },
    { id: 8, name: "Platinum Ring", description: "Luxurious platinum ring for elegant occasions.", img: "/platinum-ring.jpg" },
];

const JewelryPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Jewelry Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {jewelryProducts.map((product) => (
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

export default JewelryPage;
