import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";



const ServicesList = () => {
  return (
    <ul className="px-2 h-72 overflow-y-auto">
      {/* Web Development */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold ">Web Development</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            CMS Web Development
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            WordPress Development
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            E-commerce Development
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            Website Optimization
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            Mobile App Development
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            Full Stack Development
          </li>
        </ul>
      </li>
      {/* Web Design */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">Web Design</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            Responsive Website/ Mobile Design
          </li>
          <li className="text-gray-700 hover:bg-white p-1">UI/UX Design</li>
          <li className="text-gray-700 hover:bg-white p-1">Graphic Design</li>
          <li className="text-gray-700 hover:bg-white p-1">
            Landing Page Design
          </li>
        </ul>
      </li>
      {/* Digital Marketing Solutions */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">Digital Marketing Solutions</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            Organic Search - SEO (Search Engine Optimisation)
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            Social Media Marketing
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            Content Marketing
          </li>
          <li className="text-gray-700 hover:bg-white p-1">Email Marketing</li>
        </ul>
      </li>
      {/* Digital Ads */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">Digital Ads</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            Affiliate Marketing Services
          </li>
          <li className="text-gray-700 hover:bg-white p-1">Social Media Ads</li>
          <li className="text-gray-700 hover:bg-white p-1">PPC Ads</li>
        </ul>
      </li>
    </ul>
  );
};

const WorkList = () => {
  return (
    <ul className="px-2">
      {/* Web Development */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">Case Studies</li>
          <li className="text-gray-700 hover:bg-white p-1">Testimonials</li>
        </ul>
      </li>
    </ul>
  );
};

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg "
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <div className="">
                <img
                  className="h-16 w-auto object-cover object-center"
                  src="src\images\wiselogicslogo.jpeg"
                  alt="wiselogicslogo"
                />
              </div>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/about-us"
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  <Dropdown title={"Services"} children={<ServicesList />} />
                </Link>
              </li>

              <li>
                <Link
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  <Dropdown title={"Our Work"} children={<WorkList />} />
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  Contact us
                </Link>
              </li>

              <li>
                <Link
                  to="/signin"
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-gray-300 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  <span>Sign In</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
