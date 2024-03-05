import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";

const AboutContent = () => {
  return (
    <div className="text-center pb-12 md:pb-16">
      <h1
        className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
      >
        Who are we???&nbsp;
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          We are Digitalholics!
        </span>
      </h1>
      <div className="max-w-3xl mx-auto">
        <div
          className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          <p
            className="text-xl text-gray-300 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Are you a small, medium or large-sized business owner struggling
            with business growth?
          </p>
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <HeroHome>
          <AboutContent />
        </HeroHome>
        <FeaturesBlocks />
        <FeaturesHome />
        <Testimonials />
        <Newsletter />
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default About;
