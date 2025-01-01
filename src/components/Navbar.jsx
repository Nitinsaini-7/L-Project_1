import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  // Replace / paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Our Products", path: "/products" },
    { title: "New Arrivals", path: "/new-arrivals" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-100 fixed top-0 z-40 shadow-md shadow-gray-500 border-b w-full md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 md:block">
          <Link to="/">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center h-screen md:h-auto space-y-6 md:flex md:space-x-4 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className=""
                >
                  <NavLink
                    onClick={() => {
                      setState(false);
                      window.scroll(0, 0);
                    }}
                    to={item.path}
                    className="block"
                  >
                    <p className=" text-center text-lg md:text-sm sm:border-0 md:border-2 border-orange-400 font-semibold rounded-full p-2 px-3 text-orange-400 uppercase hover:bg-orange-400 hover:text-white duration-200"> {item.title}</p>
                    {/* <hr className="w-4/4 border-none h-1 bg-indigo-600 hidden" /> */}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
