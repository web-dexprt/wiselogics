import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";

const ServicesList = () => {
  return (
    <ul className="px-2 h-72 overflow-y-auto bg-themeColor">
      {/* Web Development */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold ">Web Development</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1 ">
            <Link to={"/service/cmd"}>CMS Web Development</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/wordpress-development"}>
              WordPress Development
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/ecommerce"}>E-commerce Development</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/web-optimization"}>Website Optimization</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/mobile-development"}>
              Mobile App Development
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/full-stack-development"}>
              Full Stack Development
            </Link>
          </li>
        </ul>
      </li>
      {/* Web Design */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">Web Design</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/responsive-website"}>
              Responsive Website/ Mobile Design
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/ui-design"}>UI/UX Design</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/graphic-design"}>Graphic Design</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/landing-pages"}>Landing Page Design</Link>
          </li>
        </ul>
      </li>
      {/* Digital Marketing Solutions */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">Digital Marketing Solutions</h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/seo"}>
              Organic Search - SEO (Search Engine Optimisation)
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/social-media-marketing"}>
              Social Media Marketing
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/content-marketing"}>Content Marketing</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/email-marketing"}>Email Marketing</Link>
          </li>
        </ul>
      </li>
      {/* Digital Ads */}
      <li className="text-bold bg-slate-200 text-black p-2 rounded-md mb-2">
        <h3 className="text-start text-bold">
          <Link to={"/service/digital-ads"}>Digital Ads</Link>
        </h3>
        <ul className="text-sm text-start pl-5">
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/affiliate-marketing-services"}>
              Affiliate Marketing Services
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1 ">
            <Link to={"/service/social-media-ads"}>Social Media Ads</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/service/ppc-ads"}>PPC Ads</Link>
          </li>
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
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/our-work/case-studies"}>Case Studies</Link>
          </li>
          <li className="text-gray-700 hover:bg-white p-1">
            <Link to={"/our-work/testimonials"}>Testimonials</Link>
          </li>
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
                      : "font-medium text-white hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                      : "font-medium  text-white hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                      : "font-medium  text-white hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                      : "font-medium  text-white hover:text-gray-100 px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                      : "font-medium text-white hover:text-gray-100 px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
                      : "font-medium text-white hover:text-gray-100 px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
