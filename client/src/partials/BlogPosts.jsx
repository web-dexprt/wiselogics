import React from 'react'
import { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { Link } from "react-router-dom";
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import jsonData from './BlogPosts.json';

function BlogPosts({title}) {
    
    const[blogPost, setBlogPost]=useState([]);

    useEffect(()=>{
        setBlogPost(jsonData);
    },[]);

    const[visible, setVisible]=useState(3);
    
    const readmore=()=>{
        setVisible((PrevValue)=>PrevValue+3);
    }

  return (
    <section className="relative bg-slate-200">
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
            {blogPost.slice(0,visible).map((e)=>(
                <div key={e.id} className="w-auto hover:cursor-pointer pb-8">
                    <Link to={e.link}>
                        <h2 className='mb-4 font-semibold hover:text-orange-700'>{e.heading}</h2>
                        <img className="w-full h-48 mb-6 object-cover object-center" src={e.image} alt="" />
                    </Link>
                    <p className='text-justify line-clamp-3'>{e.paragraph}</p>
                </div>
            ))}
          </div>

          <div className='grid justify-items-center pt-6'>
            <a onClick={readmore} className="btn text-white bg-orange-700 hover:bg-orange-600 shadow" href="#0">Read More</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlogPosts