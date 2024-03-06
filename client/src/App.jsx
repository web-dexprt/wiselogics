import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// style  csss
import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

// Routes
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import OurWork from "./pages/OurWork";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/ErrorPage";
import { ServiceDataProvider } from "./ServiceDataContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <ServiceDataProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ServiceDataProvider>
    </>
  );
}

export default App;
