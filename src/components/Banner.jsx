import React from "react";
import { aboutBanner } from "../assets/data";
import { Link } from "react-router-dom";

const Banner = ({ pageName }) => {
  return (
    <div className="relative">
      <img src={aboutBanner} alt="" className="" />
      <div className="absolute inset-0 flex items-center">
        <div className="text-white p-10">
          <h1 className="text-2xl md:text-4xl font-bold">{pageName}</h1>
          <div className="flex md:pt-5">
            <Link to={"/"}>Home</Link>
            <span className="px-2"> / </span>
            <p>{pageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
