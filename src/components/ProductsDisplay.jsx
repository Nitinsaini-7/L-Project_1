import React, { useContext } from "react";
import { CategoryContext } from "../context/ProductsContext";


const ProductsDisplay = ({ products }) => {
  const { selectedCategory } = useContext(CategoryContext);

  const filteredProducts = selectedCategory && selectedCategory !== "All"
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        {selectedCategory && selectedCategory !== "All" ? `Products in "${selectedCategory}"` : "All Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.category}</p>
          </div>
        ))}
      </div>
      <p>lorem3000</p>
    </div>
  );
};

export default ProductsDisplay;
