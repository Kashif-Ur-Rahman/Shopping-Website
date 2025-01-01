// src/app/categories/components/CategoryCard.tsx

import React from "react";

type Category = {
  id: number;
  name: string;
  description: string;
  img: string;
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={category.img}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
        <p className="text-gray-600">{category.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
