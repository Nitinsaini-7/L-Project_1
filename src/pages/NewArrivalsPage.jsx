import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const NewArrivalsPage = () => {
  const data = [
    {
      title: "Tringular Lock Small",
      code: "TLS",
      image: "/user_file.png",
      details: "",
    },
    {
      title: "Tringular Lock Small",
      code: "TLS",
      image: "/user_file.png",
      details: "",
    },
    {
      title: "Tringular Lock Small",
      code: "TLS",
      image: "/user_file.png",
      details: "",
    },
  ];
  return (
    <div className="mt-20">
      <Banner pageName={"New Arrivals"} />

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div className="overflow-hidden rounded-md">
              <img
                alt=""
                src={item.image}
                className=" w-full object-cover hover:scale-105 duration-300 cursor-pointer"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className=""><span className=" font-semibold">Code:</span> {item.code}</p>

              <Link to="" className="relative w-full inline-flex items-center justify-center p-2 overflow-hidden font-medium text-orange-400 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group">
               
                  <span className="absolute inset-0 text-4xl flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
                  
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-orange-400 transition-all duration-300 transform group-hover:translate-x-full ease">
                    View Details
                  </span>
                  <span className="relative invisible">View Details</span>
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;

