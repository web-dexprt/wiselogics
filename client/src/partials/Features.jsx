import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import { IoIosArrowRoundForward } from "react-icons/io";
function Features({ data = [] }) {
  const [homeData, setHomeData] = useState(data);
  useEffect(() => {
    setHomeData(data);
  }, [data]);
  console.log(homeData);

  // *************************************

  if (!data) {
    return null;
  }

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="mb-4 text-orange-600 font-semibold hover:text-orange-500 hover:cursor-pointer">
              What do we do?
            </p>
            <h1 className="h2 mb-4">What do we do?</h1>
            <p className="text-xl text-gray-700 font-medium">
              Our comprehensive digital marketing solutions will help you drive
              the right message to the right target audience.
            </p>
          </div>

          {/* Cards content sectiions  */}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
              {/* item 1  */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-2xl bg-opacity-40 bg-black backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <svg
                  className="absolute top-[-1.5rem] left-5 w-20 h-20 p-1 -mt-1 mb-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- SVG content --> */}
                </svg>
                <div className="mt-5 min-h-36 flex flex-col justify-between h-36">
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                    Organic Search - SEO
                  </h4>

                  <p className="text-4xl text-gray-400 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                    <IoIosArrowRoundForward />
                  </p>

                  <div className="hidden group-hover:block text-gray-600 text-justify transition-opacity duration-300 ease-in-out">
                    3 Alphabets but have a preeminent impact in shaping your
                    business sales and future. Our innovative SEO Gurus team has
                    a unique understanding of curating result-driven SEO
                    strategies, which will help your dream business rank higher
                    on Google.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
