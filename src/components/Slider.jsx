import React, { useContext } from "react";
import { CategoryContext } from "../context/ProductsContext";


const CategoriesSlider = ({ categories }) => {
    
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  return (
    <div className="flex overflow-x-auto  scrollbar-hide space-x-4 pb-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className={`flex-none bg-blue-500 text-white rounded-full px-4 py-2 text-sm cursor-pointer transition-transform transform hover:scale-110 ${
            selectedCategory === category ? "bg-blue-700" : "bg-blue-500"
          }`}
        >

          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesSlider;
