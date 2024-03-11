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
import { useServiceData } from "../ServiceDataContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const ServiceContent = () => {
  const { homeData } = useServiceData();

  return (
    <>
      <div className="text-center pb-12 md:pb-0">
        <h1 className="text-5xl md:text-4xl  text-center md:text-start text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Web Wonders and &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Marketing Miracles:
          </span>
          &nbsp; Your Journey to Digital Dominance
        </h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg lg:text-start text-center text-gray-100 mb-8" data-aos="zoom-y-out" data-aos-delay="150" >
          Discover the magic of Web Wonders and Marketing Miracles. Elevate your brand's digital presence with captivating websites and strategic marketing solutions. Join us on the journey to digital dominance.
          </p>
        </div>
      </div>
    </>
  );
};

// Home

function Ourwork() {
  const backgroundImg = {
    backgroundImage: `url('src/images/ourwork-banner.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
  };

  return (
    <>
      <div className=" flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header children={<ServiceContent />} />

        {/*  Page content */}
        <main className="flex-grow relative">
          {/*  Page sections */}
          <div style={backgroundImg} className="">
            <HeroHome>
              <ServiceContent />
            </HeroHome>
          </div>

          {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 "></div>
          </div> */}
          
          {/* <FeaturesHome data={homeData} /> */}

          {/* Tech fields */}
          <div className="bg-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
                <h2 className="text-black text-center text-2xl lg:text-4xl pr-10 font-bold">
                  Our Work
                </h2>
                <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 my-10">
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/6214477/pexels-photo-6214477.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/6279104/pexels-photo-6279104.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                  <div className="rounded-full">
                    <div className="">
                      <img
                      className="h-80 w-full object-cover object-center overflow-hidden"
                      src="https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    </div>
                    <div className="bg-black text-white px-5 py-8">
                      <h3>An IoT-based smart electric heating app UI/UX Design</h3>
                      <p>Thanks to the Internet of Things (IoT) which makes the concept of a smart home possible.</p>
                      <a href="javascript:;" className="py-2 px-5 mt-5 rounded inline-flex items-center border border-slate-300 hover:border-indigo-300">Learn More <MdKeyboardDoubleArrowRight className="ms-4" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20 ">
              <h3 className="text-black text-center text-xl lg:text-4xl pr-10 font-bold my-10">Work by Categories</h3>
                <ul className="grid grid-cols-4 grid-cols-1 p-5 gap-10">
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Digital Marketing</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Brand Identity</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">ERP</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Web Development</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Logos</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">UI/UX Design</a></li>
                </ul>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20 ">
              <h3 className="text-black text-center text-xl lg:text-4xl pr-10 font-bold my-10">Work by Industries</h3>
                <ul className="grid grid-cols-4 grid-cols-1 p-5 gap-10">
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Food / Restaurant</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Home Automation</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Personal Websites</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Education</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Healthcare</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Retail / eCommerce</a></li>
                  <li><a href="javascript:;" className="underline decoration-zinc-800 hover:decoration-sky-500 underline-offset-8">Marketplaces</a></li>
                </ul>
            </div>
          </div>
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

export default Ourwork;
