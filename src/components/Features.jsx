import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Features = () => {

      useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const products = [
        {
          title: "Stainless Steel Dinner Set",
          text: "Experience the elegance with high quality SS Dinner set at home. Available in 36 pcs, 57 pcs, and 61 pcs. We offer the best design dinner sets as per your need.",
        },
        {
          title: "Best Quality Stainless Steel Tiffin Boxes",
          text: "Durable and beautiful, we offer a wide range of tiffin boxes with and without covering bags. Explore the variety of two-box tiffins to picnic tiffin boxes to complete your need for hygienic and warm food.",
        },{
            title: "Best Quality Stainless Steel Tiffin Boxes",
            text: "Durable and beautiful, we offer a wide range of tiffin boxes with and without covering bags. Explore the variety of two-box tiffins to picnic tiffin boxes to complete your need for hygienic and warm food.",
          },{
            title: "Best Quality Stainless Steel Tiffin Boxes",
            text: "Durable and beautiful, we offer a wide range of tiffin boxes with and without covering bags. Explore the variety of two-box tiffins to picnic tiffin boxes to complete your need for hygienic and warm food.",
          },
      ];
  return (
    <div>
        <section id="products" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Products
        </h2>
        {products.map((product, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } bg-white shadow-lg rounded-lg overflow-hidden`}
          >
            <img
              src="https://via.placeholder.com/500"
              alt={product.title}
              className="w-full md:w-1/2 h-56 md:h-auto object-cover"
            />
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
  <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">Magic !</span>
  <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
    </div>
  )
}

export default Features