import React from "react";
import { Link } from "react-router-dom";

function ContactSupport() {
  return (
    <div className="bg-yellow-300 py-8 my-2">
      <div className="max-w-6xl mx-auto px-8 sm:px-6 grid md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="">
          <div className="text-xl font-bold mb-2">it Feels Good</div>
          <div className="">
            {" "}
            <span className="bg-black text-white p-2">To be Talked about</span>
          </div>
        </div>
        <div className="hidden  md:grid grid-cols-2 md:grid-cols-3">
          <div className="h-24 w-auto">
            <img
              className="w-full h-full object-cover object-center"
              src="https://digidzn.com/static/media/CXO.b217c3ed.png"
              alt=""
            />
          </div>
          <div className="h-24 w-auto">
            <img
              className="w-full h-full object-cover object-center"
              src="https://digidzn.com/static/media/indian%20retailer.09b96a4f.png"
              alt=""
            />
          </div>
          <div className="h-24 w-auto">
            <img
              className="w-full h-full object-cover object-center"
              src="https://digidzn.com/static/media/Ndtv%202.5da2f0f4.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2 font-semibold flex flex-col gap-y-2 sm:flex-row">
          <span>
            A good support team is always there to help you. If you have any
            questions or need help, please feel free to contact us.
          </span>
          <div>
            <span className="bg-blue-700 text-white px-5 py-2 rounded-md">
              <Link to={"/contact-us"}>Contact Us</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSupport;
