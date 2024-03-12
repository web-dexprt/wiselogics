import React, { useState, useRef, useEffect, Children } from "react";
import { Link } from "react-router-dom";
import '../css/style.css'



function HeroHome({children}) {
 
  return (
    <section className="w-full relative top-banner">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div> */}

      <div className="px-2 top-banner-text">
        {/* Hero content */}
        <div className="pt-20 px-4 md:px-8">
          {/* Section header */}
          {
            children
          }

        </div>
      </div>
    </section>
  );
}

export default HeroHome;
