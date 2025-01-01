// import React from "react";
// import CategoriesSlider from "./Slider"; 
// import ProductsDisplay from "./Display";
// import A from "./A";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Features from "./components/Features";

// const categories = [
//   "All",
//   "Tiffin Carrier",
//   "Dabba (Containers)",
//   "Table Dish & Donga",
//   "Pooja Thali",
//   "Gift Set",
//   "Dinner & Kitchen Sets",
//   "Plates & Serving (Heavy Gauge)",
//   "Water Glass",
//   "Cookware Aluminium",
//   "Cookware Hard Anodized",
//   "Cookware Steel",
//   "Bowls & Serving",
//   "Fruit Basket & Chalna",
//   "Storage Container",
//   "Steel Casseroles",
//   "Cutlery",
//   "Steel Water Jugs",
//   "Thermo Steel Items",
//   "Pressure Cooker",
//   "Steel Water Bottles",
//   "Vati",
//   "Triply Cookware",
//   "Kitchen Tools and Accessories",
//   "Non Stick",
//   "Dustbin",
// ];

// const products = [
//   { id: 1, name: "Aluminium Tiffin Carrier", category: "Tiffin Carrier" },
//   { id: 2, name: "Steel Dabba Set", category: "Dabba (Containers)" },
//   { id: 3, name: "Pressure Cooker XL", category: "Pressure Cooker" },
//   // Add more products
// ];

// const App = () => {
//   return (
//     <div className="">
//     <Navbar/> 
//     <div >
//       {/* <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
//       <CategoriesSlider categories={categories} />
//       <ProductsDisplay products={products} /> */}
//       {/* <A/> */}
//       <Hero/>
//       <About/>
//       <Features/>
//     </div>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OurProductsPage from './pages/OurProductsPage'
import NewArrivalsPage from './pages/NewArrivalsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<OurProductsPage/>} />
          <Route path="/new-arrivals" element={<NewArrivalsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App