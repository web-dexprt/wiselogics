import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function Blog() {
  return (
    <section className="relative bg-white">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">DIGIDZN DELIVERS</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-3 md:gap-6 gap-x-10">
            {/* cards contents  */}
            {/* card 1 */}
            <div className="w-auto h-96 ">
              <img
                className="h-full w-full object-cover object-center"
                src="https://digidzn.com/static/media/delievers16.430c3fb3.jpg"
                alt=""
              />
            </div>
            {/* card 2 */}
            <div className="w-auto h-96 ">
              <img
                className="h-full w-full object-cover object-center"
                src="https://digidzn.com/static/media/delievers2.ed09c3ef.jpeg"
                alt=""
              />
            </div>
            {/* card 3 */}
            <div className="w-auto h-96 ">
              <img
                className="h-full w-full object-cover object-center"
                src="https://digidzn.com/static/media/delievers16.430c3fb3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
