import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";

// react icons 
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";



function Header() {

  //  Navigation button 
  const ServicesList = [
    {
      name: "Web Development",
      description: "We build fast and secure websites",
      href: "/services/web-development",
      icon: ChartPieIcon,
    },
    {
      name: "Web Design",
      description: "Web design and development services",
      href: "/services/web-design",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Digital Marketing",
      description: "Digital marketing services",
      href: "/services/digital-marketing",
      icon: FingerPrintIcon,
    },
    {
      name: "Digital Ads",
      description: "Digital ads services",
      href: "/services/digital-ads",
      icon: SquaresPlusIcon,
    },
    {
      name: "SEO",
      description: "SEO services",
      href: "/services/seo",
      icon: ArrowPathIcon,
    },
  ];

  const WorkList = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers' data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];





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
                  <Dropdown title={"Our Expertise"} solutions={ServicesList} />
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
                  <Dropdown title={"Our Work"} solutions={WorkList} />
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
