import React from "react";
import CategoriesSlider from "../components/Slider";
import ProductsDisplay from "../components/ProductsDisplay";

const OurProductsPage = () => {
  const categories = [
    "All",
    "Tiffin Carrier",
    "Dabba (Containers)",
    "Table Dish & Donga",
    "Pooja Thali",
    "Gift Set",
    "Dinner & Kitchen Sets",
    "Plates & Serving (Heavy Gauge)",
    "Water Glass",
    "Cookware Aluminium",
    "Cookware Hard Anodized",
    "Cookware Steel",
    "Bowls & Serving",
    "Fruit Basket & Chalna",
    "Storage Container",
    "Steel Casseroles",
    "Cutlery",
    "Steel Water Jugs",
    "Thermo Steel Items",
    "Pressure Cooker",
    "Steel Water Bottles",
    "Vati",
    "Triply Cookware",
    "Kitchen Tools and Accessories",
    "Non Stick",
    "Dustbin",
  ];
  const products = [
    { id: 1, name: "Aluminium Tiffin Carrier", category: "Tiffin Carrier" },
    { id: 2, name: "Steel Dabba Set", category: "Dabba (Containers)" },
    { id: 3, name: "Pressure Cooker XL", category: "Pressure Cooker" },
    // Add more products
  ];

  return (
    <div className="mt-20 h-screen">
      <CategoriesSlider categories={categories} />
      <ProductsDisplay products={products} /> 
    </div>
  );
};

export default OurProductsPage;
