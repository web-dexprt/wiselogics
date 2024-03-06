import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";

// wiselogics 
import wiselogicslogo from "../assets/logo/wiselogicslogo.png"
import wiselogicswhitebg from "../assets/logo/wiselogicslogo-bg-white.png"



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
      href: "/service/web-development",
      icon: ChartPieIcon,
    },
    {
      name: "Web Design",
      description: "Web design and development services",
      href: "/service/web-design",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Digital Marketing",
      description: "Digital marketing services",
      href: "/service/digital-marketing",
      icon: FingerPrintIcon,
    },
    {
      name: "Digital Ads",
      description: "Digital ads services",
      href: "/service/digital-ads",
      icon: SquaresPlusIcon,
    },
    {
      name: "SEO",
      description: "SEO services",
      href: "/service/seo",
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
      className={`fixed top-0 left-0 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
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
                  src={
                    !top
                      ? `${wiselogicswhitebg}`
                      : `${wiselogicslogo}`
                  }
                  alt="WiseLogics"
                />
              </div>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="hidden lg:flex flex-grow">
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
                <div
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium  text-white hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  <Dropdown title={"Our Expertise"} solutions={ServicesList} />
                </div>
              </li>

              <li>
                <Link
                  to="/our-work"
                  className={` ${
                    !top
                      ? "font-medium text-black hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      : "font-medium text-white hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  }`}
                >
                  Our Work
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
