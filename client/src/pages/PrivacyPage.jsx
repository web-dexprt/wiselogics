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
import BlogCard from "../partials/BlogCard";
const HeroImage = "https://digidzn.com/static/media/flow.9f5f9428.gif";

const HomeContent = () => {
  return (
    <>
      <div className="text-center pb-12 md:pb-16">
        <h1
          className="text-4xl md:text-4xl text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Transform your businesses into Brands, With &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Modern Media
          </span>
          &nbsp; Intersection
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-md md:text-xl text-gray-300 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            We believe in maximizing your business online presence with
            result-driven strategies and creative thinking.
          </p>
          <span className="bg-clip-text text-transparent text-lg font-bold bg-gradient-to-r from-blue-500 to-teal-400 ">
            Connect Today, Change Tomorrow.
          </span>
          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div>
              <Link
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="/contact-us"
              >
                Let’s Connect (CTA)
              </Link>
            </div>
            <div>
              <Link
                className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                href="/our-work"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

// Home

function PrivacyPolicy() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header children={<HomeContent />} />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <HeroHome>
            <HomeContent />
          </HeroHome>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-16 md:pt-32 pb-12 md:pt-40 md:pb-20 ">
              <hr className="border border-2 border-white mb-10" />

              <h2 className="text-white text-2xl lg:text-3xl pr-10 font-bold">
                Established corporates to well-known Retail brands to startups -
                we have served them all.
              </h2>
              <div className="grid lg:grid-cols-4 gap-x-10 gap-y-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center my-10 ">
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
              </div>

              <hr className="border border-2 border-white" />
            </div>
          </div>

          <BlogCard />
          <FeaturesHome />

          {/* Tech fields */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
              <h2 className="text-white text-center text-2xl lg:text-4xl pr-10 font-bold">
                Full Growth Capabilities
              </h2>
              <div className="grid lg:grid-cols-4 gap-x-10 gap-y-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center my-10 ">
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-48 w-full sm:h-24 sm:w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
              </div>

              <hr className="border border-2 border-white" />
            </div>
          </div>

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

export default PrivacyPolicy;
