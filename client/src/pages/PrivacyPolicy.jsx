import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import ContactSupport from "../partials/ContactSupport";



const PrivacyPolicyContent = () => {
  return (
    <>
      <div className="text-center pb-12 md:pb-0">
        <h1
          className="text-4xl md:text-4xl text-center sm:text-start text-white font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Privacy &nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Policy
          </span>
          &nbsp;
        </h1>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-lg lg:text-start text-center text-gray-100 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Welcome to our Privacy Policy page. Your privacy is critically
            important to us. We are dedicated to protecting the personal
            information you share with us and explaining how we collect,
            process, and share that information online.
          </p>
        </div>
      </div>
    </>
  );
};

// Home

function PrivacyPolicy() {
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
        <Header children={<PrivacyPolicyContent />} />
        {/*  Page content */}
        <main className="flex-grow relative">
          {/*  Page sections */}
          <div style={backgroundImg} className="absolute top-0">
            <HeroHome>
              <PrivacyPolicyContent />
            </HeroHome>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 "></div>
          </div>
          {/* Tech fields */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
              {/* card 1  */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Information Collection and Use
                </h2>
                <div className=" my-5">
                  <p className="text-white">
                    We collect information from you when you visit our website,
                    register on our site, place an order, subscribe to our
                    newsletter, respond to a survey, or fill out a form. The
                    information collected may include your name, email address,
                    phone number, or credit card information. We use this
                    information to personalize your experience, improve our
                    website, process transactions, and send periodic emails
                    related to your order or other products and services
                  </p>
                </div>
              </div>
              {/* card 2  */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Information Sharing and Disclosure
                </h2>
                <div className=" my-10">
                  <p className="text-white">
                    We do not sell, trade, or otherwise transfer your personally
                    identifiable information to outside parties except to
                    trusted third parties who assist us in operating our
                    website, conducting our business, or servicing you, so long
                    as those parties agree to keep this information
                    confidential. We may also release your information when we
                    believe release is appropriate to comply with the law,
                    enforce our site policies, or protect ours or others'
                    rights, property, or safety.
                  </p>
                </div>
              </div>
              {/* card 3  */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Data Security and Protection
                </h2>
                <div className=" my-10">
                  <p className="text-white">
                    We implement a variety of security measures to maintain the
                    safety of your personal information. Your personal
                    information is contained behind secured networks and is only
                    accessible by a limited number of persons who have special
                    access rights to such systems and are required to keep the
                    information confidential.
                  </p>
                </div>
              </div>
              {/* card 4 */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Your Privacy Rights
                </h2>
                <div className=" my-10">
                  <p className="text-white">
                    You have the right to access, correct, or delete your
                    personal information and privacy preferences at any time. To
                    review, change, or delete your personal information, please
                    contact us using the information provided in the contact
                    section of this policy.
                  </p>
                </div>
              </div>
              {/* card 5 */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Cookies and Tracking Technologies
                </h2>
                <div className=" my-10">
                  <p className="text-white">
                    We may use cookies and other tracking technologies to
                    enhance your experience and gather information about
                    visitors and visits to our websites. You can choose to have
                    your computer warn you each time a cookie is being sent, or
                    you can choose to turn off all cookies through your browser
                    settings
                  </p>
                </div>
              </div>
              {/* card 6 */}
              <div className="my-10 border border-gray-1 px-10 py-5 rounded hover:cursor-pointer">
                <h2 className="text-white text-center md:text-start text-2xl lg:text-3xl pr-10 font-bold">
                  Third-Party Services and Content
                </h2>
                <div className=" my-10">
                  <p className="text-white">
                    Our site may include or offer third-party products or
                    services. These third-party sites have separate and
                    independent privacy policies. We, therefore, have no
                    responsibility or liability for the content and activities
                    of these linked sites.
                  </p>
                </div>
              </div>
              {/* card 7  */}
              <div>
                <h2 className="text-white text-center  text-2xl lg:text-3xl pr-10 font-bold">
                  Contact Information
                </h2>
                <div className=" my-10">
                  <p className="text-white text-center flex gap-x-2 justify-center items-center">
                    <span>
                      If you have any questions about this Privacy Policy,
                      please contact us at [Your Contact Information]
                    </span>
                    <span>
                      <Link
                        to="/contact-us"
                        className="bg-blue-700 text-white px-5 py-2 rounded-md"
                      >
                        Contact Us
                      </Link>
                    </span>
                  </p>
                </div>
              </div>

              <hr className="border border-2 border-white" />
            </div>
          </div>

          <ContactSupport />
          <Newsletter />
        </main>

        <Banner />

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicy;
