// src/app/hot-offers/page.tsx

import React from "react";

const hotOffers = [
    { id: 1, name: "50% Off Formal Suit", description: "Premium quality formal suit at half the price.", img: "/hot-offer-formal-suit.jpg" },
    { id: 2, name: "Buy 1 Get 1 Free - Perfume", description: "Exclusive perfume deal for a limited time.", img: "/hot-offer-perfume.jpg" },
    { id: 3, name: "Discount on Jewelry", description: "Save up to 30% on our premium jewelry collection.", img: "/hot-offer-jewelry.jpg" },
    { id: 4, name: "Casual Wear Sale", description: "Trendy casual wear now at 40% off.", img: "/hot-offer-casual.jpg" },
    { id: 5, name: "Winter Collection Sale", description: "Flat 20% off on our exclusive winter collection.", img: "/hot-offer-winter.jpg" },
    { id: 6, name: "Shoes Special Offer", description: "Stylish and durable shoes with up to 25% discount.", img: "/hot-offer-shoes.jpg" },
    { id: 7, name: "T-Shirts Combo", description: "Buy 3 T-Shirts and save 20%.", img: "/hot-offer-tshirts.jpg" },
    { id: 8, name: "Luxury Watches Sale", description: "Exclusive luxury watches up to 40% off.", img: "/hot-offer-watches.jpg" },
];

const HotOffersPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Content */}
            <div className="p-6 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Hot Offers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className="h-96 w-full max-w-sm border rounded-lg shadow-md overflow-hidden flex flex-col mx-auto"
                        >
                            <img
                                src={offer.img}
                                alt={offer.name}
                                className="h-2/3 w-full object-cover"
                            />
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <h2 className="text-xl font-semibold mb-2">{offer.name}</h2>
                                <p className="text-gray-600">{offer.description}</p>
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

export default HotOffersPage;
