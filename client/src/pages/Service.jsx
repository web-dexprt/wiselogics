import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import { useServiceData } from "../ServiceDataContext";

const ServiceContent = () => {
  const { homeData, serviceData } = useServiceData();
  const { id } = useParams();
  const service = serviceData.find((s) => s.id === id);
  return (
    <>
      <div className="text-center pb-12 md:pb-0">
        <h1
          className="text-4xl md:text-4xl text-center sm:text-start text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {service.title}
          </span>
          &nbsp;
        </h1>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-lg lg:text-start text-center text-gray-100 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            {service.description}
          </p>
        </div>
      </div>
    </>
  );
};

// Home

function Service() {
  const { homeData, serviceData } = useServiceData();
  const backgroundImg = {
    backgroundImage: `url('https://digidzn.com/static/media/socialbanner.74ff873a.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "75vh",
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
          <div style={backgroundImg} className="absolute top-0">
            <HeroHome>
              <ServiceContent />
            </HeroHome>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 "></div>
          </div>

          <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
              {/* card 1  */}
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="grid lg:grid-cols-12 gap-x-10 gap-y-5">
                  <div className="md:col-span-6 lg:col-span-5">
                    <img
                      className="h-full w-full object-cover object-center rounded"
                      src="https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg?w=900&t=st=1709894277~exp=1709894877~hmac=818dd7c5a2e2ccd12a9618d3dc835de2c70fda193703c59f79b2018bab94eafa"
                      alt=""
                    />
                  </div>
                  <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between gap-x-10 gap-y-5">
                    <div>
                      <h2 className="font-bold text-2xl">
                        On-Page Optimization
                      </h2>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis voluptate velit consequuntur voluptatem
                        pariatur ipsam nulla et est cumque? Distinctio dolorum
                        repudiandae quibusdam vero est Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Esse, aliquid.!
                      </p>
                    </div>
                    <div>
                      <button className="px-10 py-3 bg-black text-white rounded-lg border border-gray-200">
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2  */}
              <div className="pb-12 md:pb-20">
                <div className="grid lg:grid-cols-12 gap-x-10 gap-y-5">
                  <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between gap-x-10 gap-y-5">
                    <div>
                      <h2 className="font-bold text-2xl">
                        On-Page Optimization
                      </h2>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis voluptate velit consequuntur voluptatem
                        pariatur ipsam nulla et est cumque? Distinctio dolorum
                        repudiandae quibusdam vero est Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Esse, aliquid.!
                      </p>
                    </div>
                    <div>
                      <button className="px-10 py-3 bg-black text-white rounded-lg border border-gray-200">
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-5">
                    <img
                      className="h-full w-full object-cover object-center rounded"
                      src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1709895089~exp=1709898689~hmac=a92933078fe6ae2a1f6811dad6e8b3166a0bb62c317cc7542ea4386f103542fe&w=900"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* card 3  */}
              <div className="pb-12 md:pb-20">
                <div className="grid lg:grid-cols-12 gap-x-10 gap-y-5">
                  <div className="md:col-span-6 lg:col-span-5">
                    <img
                      className="h-full w-full object-cover object-center rounded"
                      src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051191.jpg?t=st=1709895166~exp=1709898766~hmac=568108d273e145a3dd15c423aaaabde8d44365551cc68b3365d60f4257916646&w=900"
                      alt=""
                    />
                  </div>
                  <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between gap-x-10 gap-y-5">
                    <div>
                      <h2 className="font-bold text-2xl">
                        On-Page Optimization
                      </h2>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis voluptate velit consequuntur voluptatem
                        pariatur ipsam nulla et est cumque? Distinctio dolorum
                        repudiandae quibusdam vero est Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Esse, aliquid.!
                      </p>
                    </div>
                    <div>
                      <button className="px-10 py-3 bg-black text-white rounded-lg border border-gray-200">
                        FIND OUT MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FeaturesBlocks />
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

export default Service;
