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
import BlogPosts from "../partials/BlogPosts";
const HeroImage = "https://digidzn.com/static/media/flow.9f5f9428.gif";

const HomeContent = () => {
  return (
    <>
      <div className="text-center ">
        <h1
          className="text-5xl md:text-5xl sm:text-center  md:text-start text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          We are a team of experts, growth &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            hackers and creative minds!
          </span>
        </h1>
        <div className="max-full mx-auto">
          <p
            className="text-xl text-gray-300 mb-8 md:text-start"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Let’s unlock the rapid growth of your business with the help of
            proficient and creative people. We are hardworking yet finicky about
            timely delivery and results. Don’t know about the algorithms of
            Facebook, Instagram, Twitter, Linked or YouTube? Worried about
            growth hacking marketing strategies? Leave it on us!.
          </p>
        </div>
      </div>
    </>
  );
};

// Home

function Home() {
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

          <Blog title={"OUR LATEST BLOGS"} />
          <BlogPosts title={"OUR LATEST BLOGS POSTS"}/>
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

export default Home;
