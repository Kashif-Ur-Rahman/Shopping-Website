"use client";

import React from "react";
import { useParams } from "next/navigation"; // To access dynamic route parameters
import MensPage from "@/screens/mens/mens";
import WomensPage from "@/screens/womens/womens";
import JewelryPage from "@/screens/jewelry/jewelry";
import PerfumePage from "@/screens/perfume/perfume";
import BlogPage from "@/screens/blog/blog";
import HotOffersPage from "@/screens/hot-offers/hot-offers";
// Import other components as needed...

const CategoryPage = () => {
    const { category } = useParams(); // Extract the dynamic 'category' parameter

    // Map the category to its corresponding component
    const renderComponent = () => {
        switch (category) {
            case "mens":
                return <MensPage />;

            case "womens":
                return <WomensPage />;

            case "jewelry":
                return <JewelryPage />;

            case "perfume":
                return <PerfumePage />;

            case "blogs":
                return <BlogPage />;

            case "hot-offers":
                return <HotOffersPage />;
            default:
                return <h1 className="text-3xl font-bold">Category Not Found</h1>;
        }
    };

    return <div className="p-6">{renderComponent()}</div>;
};

export default CategoryPage;
