import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { Link } from "react-router-dom";
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function BlogCard({title}) {
  return (
    <section className="relative bg-white">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:py-20 sm:py-10">
        <div className="">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{title ? title : "WISELOGICS DELIVERS"}</h1>
          </div>

          {/* Section content */}
          <div className="grid md:grid-cols-3 md:gap-6 gap-10">
            {/* cards contents  */}
            {/* card 1 */}
            <div className="w-auto h-72 md:h-56 lg:h-96 hover:cursor-pointer">
              <Link to={"/blog/web-development"}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://digidzn.com/static/media/delievers16.430c3fb3.jpg"
                  alt=""
                />
              </Link>
            </div>

            {/* card 2 */}
            <div className="w-auto h-72 md:h-56 lg:h-96 hover:cursor-pointer">
              <Link to={"/blog/web-design"}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://digidzn.com/static/media/delievers2.ed09c3ef.jpeg"
                  alt=""
                />
              </Link>
            </div>
            {/* card 3 */}
            <div className="w-auto h-72 md:h-56 lg:h-96 hover:cursor-pointer">
              <Link to={"/blog/seo"}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://digidzn.com/static/media/delievers16.430c3fb3.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
