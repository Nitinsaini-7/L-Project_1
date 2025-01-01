import React from "react";
import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, x } from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              Logo
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-4">
              <Link>
                <li className="bg-white h-12 w-12 p-3 rounded-full flex items-center justify-center">
                  <img src={facebook} alt="" className="" />
                </li>
              </Link>

              <Link>
                <li className="bg-white h-12 w-12 p-3 rounded-full flex items-center justify-center">
                  <img src={instagram} alt="" className="" />
                </li>
              </Link>
              <Link>
                <li className="bg-white h-12 w-12 p-3 rounded-full flex items-center justify-center">
                  <img src={x} alt="" className="" />
                </li>
              </Link>
              <Link>
                <li className="bg-white h-12 w-12 p-3 rounded-full flex items-center justify-center">
                  <img src={linkedin} alt="" className="" />
                </li>
              </Link>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    New Arrivals
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Products</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    Product 1
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    Product 1
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    Product 1
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-4 space-y-4 text-sm">
                <Link className="flex items-center md:justify-start justify-center gap-1 group ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white group-hover:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p
                    className="text-white transition group-hover:text-orange-400"
                    to=""
                  >
                    john@doe.com
                  </p>
                </Link>

                <Link className="flex items-center md:justify-start justify-center gap-1 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white group-hover:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p
                    className="text-white transition group-hover:text-orange-400"
                    to=""
                  >
                    0123456789
                  </p>
                </Link>

                <Link to={""} className="flex items-center md:justify-start justify-center gap-1 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-white group-hover:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <p
                    className="text-white transition hover:text-orange-400"
                    to=""
                  >
                    213 Lane, London, United Kingdom
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                to=""
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                to=""
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2022 Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
