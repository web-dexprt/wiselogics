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
import { useServiceData } from "../ServiceDataContext";

const ServiceContent = () => {
  const { homeData } = useServiceData();

  return (
    <>
      <div className="text-center pb-12 md:pb-0">
        <h1
          className="text-5xl md:text-4xl  text-center md:text-start text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Strategy SEO to Power your &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Business
          </span>
          &nbsp; Intersection
        </h1>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-lg lg:text-start text-center text-gray-100 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Search Engine Optimization is an evolving science to improve your
            page rank. SEO is a process of increasing the visibility of the
            website in a web search engine organically.
          </p>
        </div>
      </div>
    </>
  );
};

// Home

function Service() {
  const backgroundImg = {
    backgroundImage: `url('https://digidzn.com/static/media/socialbanner.74ff873a.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "75vh",
    width: "100%",
  };

  return (
    <>
      <div className=" flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header children={<ServiceContent />} />

        {/*  Page content */}
        <main className="flex-grow relative">
          {/*  Page sections */}
          <div style={backgroundImg} className="absolute top-0">
            <HeroHome>
              <ServiceContent />
            </HeroHome>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 "></div>
          </div>

          {/* <FeaturesHome data={homeData} /> */}

          {/* Tech fields */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
              <h2 className="text-white text-center text-2xl lg:text-4xl pr-10 font-bold">
                Full Growth Capabilities
              </h2>
              <div className="grid lg:grid-cols-4 gap-x-10 gap-y-5 md:grid-cols-2 my-10">
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="h-24 w-56">
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

export default Service;
