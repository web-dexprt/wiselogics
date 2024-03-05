import React, { useState, useRef, useEffect, Children } from "react";
import { Link } from "react-router-dom";



function HeroHome({children}) {
 
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
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
