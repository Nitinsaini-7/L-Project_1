import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-10">
        <div className=" relative">
          <img src="/about-pic01.jpg" alt="" className="" />
          <div className="absolute inset-0 flex items-center md:-top-20  md:left-36 md:w-60 lg:top-64 lg:left-64 lg:w-60 xl:w-full">
            <img src="/about-pic02.jpg" alt="" className="hidden md:flex" />
          </div>
        </div>
        <div className=" space-y-5">
          <h1 className="text-4xl font-semibold">About</h1>
          <p className=" leading-loose">
            Saurabh Steels (India) was established in 1991 and is the pioneer of
            Stainless Steel Utensils and Aluminium cookware’s in India. Over
            past 25 years the company has expanded its portfolio of Products to
            include a wide range of end home solutions.
            <br />
            We are one of the leading In-house Manufacturer and Wholesale
            Supplier offering Best Quality Stainless Steel Kitchen Utensils,
            Aluminium Cookware and Dine ware Household Products in India.
            Saurabh Steels (India) moulds excellence as per the industry norms
            and safety standards of Stainless Steel and Aluminium products. We
            are committed to total quality excellence which is reflected in our
            efforts and successes right from product designs at every stage of
            product till shipment.
          </p>

          <Link
            to="/"
            className="relative  inline-flex items-center justify-center p-2 px-5 overflow-hidden font-medium text-orange-400 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 text-4xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
              
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-orange-400 transition-all duration-300 transform group-hover:translate-x-full ease">
              Read More
            </span>
            <span className="relative invisible">Read More </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
