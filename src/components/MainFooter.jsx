import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainFooter = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <>
      {/* ================= >>> Footer <<< ================ */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 items-center gap-6 justify-center py-10 overflow-hidden">
        <div className="w-full grid grid-cols-1 items-center justify-center gap-2 mx-4 px-10 py-2">
          <img
            src={Logo}
            className="lg:w-[60%] md:w-[50%] sm:w-[40%] w-[40%]  "
            alt="Logo Here"
            data-aos="zoom-in-down"
          />
          <p className="text-start text-sm" data-aos="slide-right">
            We are a software development company that brings craftsmanship,
            productivity, strong individual values, and togetherness under one
            roof
            <br />
            Our professional team is well-equipped with all the latest digital
            tools and knowledge, which make it easy for us to innovate.
          </p>
        </div>
        <div className="py-4 h-full md:border-l-4 border-dotted flex flex-col items-start justify-center mx-8 lg:px-20 md:px-15 sm:px-4 w-full">
          <div
            className="flex flex-row items-start justify-center p-2 "
            data-aos="slide-down"
          >
            <MapPin />
            <div className="px-4">
              <h3>Address</h3>
              <p className="text-xs">Lahore,Pakistan</p>
            </div>
          </div>
          <div
            className="flex items-start justify-center p-2 "
            data-aos="slide-down"
          >
            <Mail />
            <div className="px-4">
              <h3>Email</h3>
              <a href="mailto: info@amartechsolutions.com" className="text-xs ">
                {" "}
                info@amartechsolutions.com
              </a>
            </div>
          </div>
          <div
            className="flex items-start justify-center p-2 "
            data-aos="slide-down"
          >
            <Phone />
            <div className="px-4 w-full">
              <h3>Phone</h3>
              <a href="tel:+(123)4567890" className="text-xs w-full">
                (123) 456 7890
              </a>
            </div>
          </div>
        </div>
        <div className="pt-12 text-center h-full md:border-l-4  border-dotted grid grid-cols-3 md:grid-cols-1 items-center justify-center mx-auto px-8 w-[100%]">
          <div className="text-center flex flex-col items-center justify-center">
            <IoLogoLinkedin size={40} />
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <FaInstagram size={40} />
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <FaFacebook size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
