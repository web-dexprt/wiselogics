import React from "react";
import { Link } from "react-router-dom";
import wiselogicslogo from "../assets/logo/logo.png"
// react icons social media
import {FaInstagram, FaFacebook ,FaXTwitter ,FaPinterest   } from "react-icons/fa6"; 

function Footer() {
  return (
    <footer className="min-w-screen">
      <div className="w-auto mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <div className="h-24 w-auto">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={`${wiselogicslogo}`}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="text-sm text-white">
              <Link
                to="/privacy-policy"
                className="text-white hover:text-gray-300 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>{" "}
              ·{" "}
              <Link
                to="/privacy-policy"
                className="text-white hover:text-gray-300 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 text-white">
              Products
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/service/web-development"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/service/web-design"}
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Web Design
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/service/digital-marketing"}
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Digital Marketing Solutions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/service/digital-ads"}
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Digital Ads
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/service/seo"}
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Seo(Search Engine Optimization)
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 text-white">
              Resources
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 text-white">
              Company
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Company values
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Contact-us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-gray-300 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2 text-white">
              Subscribe
            </h6>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form >
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                to="/"
                className="flex justify-center items-center text-gray-600 hover:text-orange-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-2xl p-1"/>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/"
                className="flex justify-center items-center text-gray-600 hover:text-blue-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl p-1"/> 
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="https://www.instagram.com/p/C4IgEIxB3av/?igsh=MWs5dHR2cjl4anhrbw=="
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-orange-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <FaInstagram  className="text-2xl p-1"/> 

              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/"
                className="flex justify-center items-center text-gray-600 hover:text-blue-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Pintrest"
              >
                <FaPinterest className="text-2xl p-1 "/>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 text-white">
            Made by{" "}
            <a className="text-blue-600 hover:underline" href="/">
              Wise Logics Tech
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
