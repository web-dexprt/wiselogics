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
            {/* <div className="w-auto hover:cursor-pointer">
              <Link to={"/blog/web-development"}>
                <h2 className='mb-4 font-semibold hover:text-blue-800'>We Have Expertise in Building Highly Scalable and Agile ASP.NET Solutions</h2>
                <img
                  className="w-full h-48 mb-8 object-cover object-center"
                  src="src/images/digital-marketing1.jpg"
                  alt=""
                />
              </Link>
              <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> */}
            {blogPost.slice(0,visible).map((e)=>(
                <div key={e.id} className="w-auto hover:cursor-pointer">
                    <Link to={e.link}>
                        <h2 className='mb-4 font-semibold hover:text-blue-800'>{e.heading}</h2>
                        <img className="w-full h-48 mb-6 object-cover object-center" src={e.image} alt="" />
                    </Link>
                    <p className='text-justify line-clamp-3'>{e.paragraph}</p>
                </div>
            ))}
          </div>

          <div className='grid justify-items-center pt-6'>
            <a onClick={readmore} className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Read More</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlogPosts