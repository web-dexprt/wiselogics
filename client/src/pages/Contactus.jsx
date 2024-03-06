import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import Blog from "../partials/BlogCard";
const HeroImage = "https://digidzn.com/static/media/flow.9f5f9428.gif";

// react icons
import { FaWhatsapp, FaPhoneFlip } from "react-icons/fa6";

// form imports
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactContent = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 gap-x-10">
      <div className="flex justify-start items-start md:mt-20">
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-4xl text-white font-bold leading-tighter tracking-tighter mb-4 lg:text-start mg:text-center"
            data-aos="zoom-y-out"
          >
            Get in touch with us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-lg text-gray-100 mb-8 lg:text-start mg:text-center"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              We love connecting with the people and sharing creative ideas and
              thoughts every time you’ll connect with us! Feel free to connect
              with us anytime here or send your query to us. We’ll get back to
              you super soon.
            </p>

            <div
              className="text-lg text-gray-100 mb-8 lg:text-start mg:text-center"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <p className="text-sm text-gray-600 hover:text-white hover:cursor-pointer">
                <span className="font-bold">WiseLogics</span> - Digital
                Marketing Company in Mohali .
              </p>
              <p className="text-sm text-gray-600 hover:text-white hover:cursor-pointer">
                Address - E-193, Phase 8B, Industrial Area, Sector 74, Sahibzada
                Ajit Singh Nagar, Punjab 160055.
              </p>
              <p className="text-sm text-gray-600 hover:text-white hover:cursor-pointer">
                Phone Number - +91 8219066645 / 9289745760
              </p>
            </div>

            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start mt-4"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <Link
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 flex items-center gap-x-2"
                  to=" https://wa.me/918219066645"
                >
                  <span>Lets Chat</span>
                  <span>
                    <FaWhatsapp className="text-xl" />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 flex  items-center gap-x-3"
                  to="tel:918219066645"
                >
                  <span>call</span>
                  <span>
                    <FaPhoneFlip />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us Form  */}
      <div>
        <div className="bg-white">
          <div className="isolate bg-white px-6 py-12 sm:pt-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl md:text-start sm:text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ready to chat with our growth experts?
              </h2>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-8 max-w-xl sm:mt-12"
            >
              <div className="grid grid-cols-1  gap-y-6 sm:grid-cols-1">
                {/* full Name  */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      placeholder="Full Name..."
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset f sm:text-sm sm:leading-6 shadow-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email..."
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 shadow-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm"
                      >
                        <option>IN</option>
                        <option>US</option>
                        <option>UK</option>
                      </select>
                      <ChevronDownIcon
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 shadow-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-indigo-600" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home

function Contactus() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header children={<ContactContent />} />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <HeroHome>
            <ContactContent />
          </HeroHome>

          {/* map section  */}
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3069656980992!2d76.68566937557951!3d30.709769674595375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee57aaaaaa93%3A0x326ffb09498c00a!2sTDS%20TOWER!5e0!3m2!1sen!2sin!4v1709552703708!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Blog />
          <FeaturesBlocks />
          <Testimonials />
          <Newsletter />
        </main>

        <Banner />

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}

export default Contactus;
