import React, { useEffect } from "react";
import "./home.css";
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
import ContactSupport from "../partials/ContactSupport";
const HeroImage = "https://digidzn.com/static/media/flow.9f5f9428.gif";
import { useServiceData } from "../ServiceDataContext";

const HomeContent = () => {
  return (
    <>
      <div className="text-center pb-12 md:pb-16">
        <h1
          className="text-4xl md:text-4xl text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Transform your businesses into &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Brands
          </span>
          <br />
          &nbsp;With Modern Media Intersection
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
                Let’s Connect
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

function Home() {
  const { homeData } = useServiceData();

  const backgroundImg = {
    backgroundImage: `url('https://digidzn.com/static/media/socialbanner.74ff873a.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <div className="home flex flex-col min-h-screen overflow-hidden ">
        {/*  Site header */}
        <Header children={<HomeContent />} />
        {/*  Page content */}
        <main className="flex-grow">
          {/* first section */}
          <section className="relative">
            <div style={backgroundImg} className="absolute top-0">
              <HeroHome>
                <HomeContent />
              </HeroHome>
            </div>
          </section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-36">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 "></div>
          </div>
          {/* second section  */}
          <section className="mt-40">
            <div className="max-w-6xl px-4 sm:px-6 mt-36 mx-auto">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
                <p className="text-red-600 hover:text-red-500 text-center mb-8">
                  What do we do ?
                </p>
                <h2 className="text-white text-center text-2xl lg:text-4xl pr-10 font-bold">
                  Wise Logics Digital Solutions help you Fly Digital and Smart!
                </h2>
                <h6 className="text-gray-600 max-w-3xl text-center m-auto">
                  Our comprehensive digital marketing solutions will help you
                  drive the right message to the right target audience.
                </h6>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 lg:gap-y-10 max-w-6xl mx-auto px-4 sm:px-6 my-10 ">
                  {/* card 1  */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">Organic Search - SEO</h2>
                      <p className="data-content">
                        3 Alphabets but have a preeminent impact in shaping your
                        business sales and future. Our innovative SEO Gurus team
                        has a unique understanding of curating result-driven SEO
                        strategies, which will help your dream business rank
                        higher on Google.
                      </p>
                    </div>
                  </div>
                  {/* card 2  */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">Website development</h2>
                      <p className="data-content">
                        Our web development experts will develop fully
                        responsive websites for your business in your suggested
                        timeframe. The usage of clean and compact coding with
                        advanced technology will boost your online presence.
                      </p>
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">Website Designing</h2>
                      <p className="data-content">
                        The design of a website plays a crucial role in the
                        growth of any online business. Our web design company in
                        Chandigarh is dedicated to providing high-quality
                        designs that not only attract but also retain users.
                      </p>
                    </div>
                  </div>
                  {/* card 4 */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">Mobile App Development</h2>
                      <p className="data-content">
                        Wise Logics Digital Solutions specializes in offering
                        mobile app development services across a range of
                        industries, catering to all types of app versions
                        including Android, iOS, and Flutter. Our services
                        encompass both hybrid and native app development.
                      </p>
                    </div>
                  </div>
                  {/* card 5 */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">Social Media Marketing</h2>
                      <p className="data-content">
                        Our creative social media mafias will change the outlook
                        of social media presence with effective social media
                        marketing strategies. Your business will rule on
                        Instagram, YouTube, Facebook, and other social platforms
                        with great influence on reach and engagement.
                      </p>
                    </div>
                  </div>
                  {/* card 6 */}
                  <div className="d_card border border-gray-600">
                    <div className="content">
                      <h2 className="heading">PPC Ads</h2>
                      <p className="data-content">
                        Ignite your online presence via Pay Per Click ads that
                        will boost your business sales and conversion rates.
                        With the right audience targeting, analytics review, and
                        smart campaign adjustments our PPC experts ensure brand
                        approach, high traffic, and lead generation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* third section  */}
          <section>
            <FeaturesBlocks />
          </section>

          {/* fourth section  */}
          {/* Our bands  */}
          <section>
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
          </section>

          {/* fifth section  */}
          <section>
            <BlogCard />
          </section>

          {/* sixth section  */}
          <section>
            <Testimonials />
          </section>

          {/* seventh section */}
          <section>
            <Newsletter />
          </section>
          {/* eight section */}
          <section>
            <ContactSupport />
          </section>
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
