import React from "react";
import "./About.css";
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
        className="text-3xl xl:text-5xl md:text-4xl text-center text-white font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
      >
        Who are we???&nbsp;
        <span className="text-orange-700">
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
            className="text-lg text-gray-300 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Are you a small, medium or large-sized business owner struggling
            with business growth?
          </p>
        </div>
        <p className="text-lg text-center text-gray-300 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
          Let’s unlock the rapid growth of your business with the help of
          proficient and creative people. We are hardworking yet finicky about
          timely delivery and results. Don’t know about the algorithms of
          Facebook, Instagram, Twitter, Linked or YouTube? Worried about growth
          hacking marketing strategies? Leave it on us!
        </p>
      </div>
    </div>
  );
};

function About() {
  const backgroundImg = {
    backgroundImage: `url('src/images/meeting-img.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "100%",
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <div style={backgroundImg}>
          <HeroHome>
            <AboutContent />
          </HeroHome>
        </div>
      
        {/* Meet Our Team  */}
        <div className="bg-slate-200 text-black py-20 md:py-30">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-black tracking-wide">
              MEET YOUR EXTENDED GROWTH TEAM
            </h2>
          </div>
          <main className="page-content">
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Akshit Sharma</h2>
              <p className="data-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          <div className="d_card ">
            <div className="content">
              <h2 className="heading">Anuj Gupta</h2>
              <p className="data-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Teena Varma</h2>
              <p className="data-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Vivek Dube</h2>
              <p className="data-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          </main>
        </div>
        
        {/* card section  */}
        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4 text-white tracking-wide">
                  CHECK OUT OUR LATEST WORK
                </h2>
              </div>

              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g strokeWidth="2">
                        <path
                          className="stroke-current text-blue-300"
                          d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 37.714h5.715L36.57 26.286h8"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          strokeLinecap="square"
                          d="M41.143 34.286l3.428 3.428-3.428 3.429"
                        />
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M41.143 29.714l3.428-3.428-3.428-3.429"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Initial Contact
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g strokeWidth="2" transform="translate(19.429 20.571)">
                        <circle
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          cx="12.571"
                          cy="12.571"
                          r="1.143"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Discovery Session
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g strokeLinecap="square" strokeWidth="2">
                        <path
                          className="stroke-current text-blue-300"
                          d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Contracting
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* 4th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g transform="translate(22.857 19.429)" strokeWidth="2">
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M12.571 4.571V0H0v25.143h12.571V20.57"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M16 12.571h8"
                        />
                        <path
                          className="stroke-current text-white"
                          strokeLinecap="square"
                          d="M19.429 8L24 12.571l-4.571 4.572"
                        />
                        <circle
                          className="stroke-current text-blue-300"
                          strokeLinecap="square"
                          cx="12.571"
                          cy="12.571"
                          r="3.429"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Fast Prototyping
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* 5th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g strokeLinecap="square" strokeWidth="2">
                        <path
                          className="stroke-current text-white"
                          d="M20.571 20.571h13.714v17.143H20.571z"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Design Phase
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* 6th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <svg
                    className="w-16 h-16 p-1 -mt-1 mb-2"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect
                        className="fill-current text-orange-700"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <g strokeWidth="2">
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                        />
                        <path
                          className="stroke-current text-white"
                          d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                        />
                        <path
                          className="stroke-current text-blue-300"
                          d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Develop & Launch
                  </h4>
                  <p className="text-gray-600 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <FeaturesHome /> */}
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
