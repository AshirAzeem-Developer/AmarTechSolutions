import React from "react";
import BgVideo from "../assets/Backend/Video/Backend.mp4";
import BgImage from "../assets/Backend/PNGFilesOfElements/Bg1.png";
import BgImage2 from "../assets/Backend/PNGFilesOfElements/Bg2.png";
import Sec2Img from "../assets/Backend/Images/pexels-djordje-petrovic-2102416.jpg";

import Lang1 from "../assets/Backend/Java.png";
import Lang2 from "../assets/Backend/Node.png";
import Lang3 from "../assets/Backend/Python.png";
import Lang4 from "../assets/Backend/Php.png";
import Lang5 from "../assets/Backend/C++.png";

import Web from "../assets/Backend/Icons/Web.png";
import MAD from "../assets/Backend/Icons/MAD.png";
import UiUx from "../assets/Backend/Icons/UiUx.png";

const ServiceDetail = () => {
  return (
    <>
      <div className="bg-[#D2D2DB] w-screen h-screen">
        {/* ====================== >>> Section 1 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] grid grid-rows-2">
          <video
            src={BgVideo}
            autoPlay
            loop
            muted
            className=" object-cover h-[85vh] w-full row-span-10 "
          ></video>
          <div className="w-screen h-auto row-span-2">
            <div className=" relative -top-14  lg:-top-24">
              <h1 className="text-black font-extrabold mx-4 text-5xl lg:text-8xl px-2">
                Backend
              </h1>
              <h1
                className=" text-white font-bold mx-4 text-5xl lg:text-8xl  h-[10vh] px-"
                style={{
                  backgroundImage: `url(${BgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                Development
              </h1>
              <p className="text-black font-bold pt-12 text-2xl px-8">
                Crafting high-quality software solutions that support growth
                strategies which involves redefining the architecture of your
                software with superior backend development services.
              </p>
            </div>
          </div>
        </div>
        {/* ====================== >>> Section 1 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 2 Starts Here <<<< ============================== */}

        <div
          className="bg-[#D2D2DB] grid md:grid-cols-12 gap-8 px-12 items-center justify-center"
          style={{
            backgroundImage: `url(${BgImage2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="col-span-4">
            <img src={Sec2Img} alt="ImageHere" className="h-3/4 object-cover" />
          </div>
          <div className="col-span-8  py-10">
            <div className="flex flex-col items-center justify-evenly">
              <h1 className="my-4 text-2xl  text-black">
                Our goal is to ensure the reliability, scalability, and security
                of the company's software systems.
              </h1>
              <br />
              <h1 className="my-4 text-2xl  text-black">
                We design superior backend development services with industry
                best practices and agile principles in mind to ensure the
                creation of high-quality solutions that are capable of
                supporting and enhancing your business objectives.
              </h1>
              <br />
              <h1 className="my-4 text-2xl  text-black">
                Amartech uses a wide range of diverse array of technologies,
                frameworks, programming languages, and tools to provide
                advanced, top-notch, and easily scalable solutions to customers
                globally.
              </h1>
            </div>

            <div className="bg-white rounded-md w-full h-auto grid grid-cols-3 lg:grid-cols-5 p-4 mt-8">
              <div className="flex flex-col items-center justify-center">
                <img src={Lang1} alt="ImageHere" className="h-2/4" />
                <h1 className="text-black text-xl font-bold">Java</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang2} alt="ImageHere" className="h-2/4" />
                <h1 className="text-black text-xl font-bold">NodJs</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang3} alt="ImageHere" className="h-2/4" />
                <h1 className="text-black text-xl font-bold">Python</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang4} alt="ImageHere" className="h-2/4" />
                <h1 className="text-black text-xl font-bold">PHP</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang5} alt="ImageHere" className="h-2/4" />
                <h1 className="text-black text-xl font-bold">C++</h1>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 2 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 3 Starts Here <<<< ============================== */}

        <div className="bg-[#D2D2DB] h-auto py-10">
          <h1 className="text-4xl px-8 text-black font-semibold">
            Transforming Businesses through Smart Software Solutions and
            Committed Development Teams.
          </h1>
          <h3 className="text-black text-2xl px-8 my-4">
            Our team at Amar Tech has skilled and data driven software
            developers which aim to create long-term value with our excellent
            software development services.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center px-6 md:px-8 lg:px-12">
            <div className="bg-white rounded-lg h-[660px] lg:h-[550px] w-auto flex flex-col items-center justify-center">
              <img src={Web} alt="imageHere" className="h-72" />
              <h2 className="text-black text-2xl font-bold my-3 ">
                Web Application Development
              </h2>
              <p className="text-black  text-justify px-4 content-center">
                Our web application development services make it easier to
                create, update, and maintain software applications that run on
                the web. By working with Amar Tech, you can speed up the growth
                of your user base, get access to new digital channels, improve
                your conversion rate, and reach other business goals faster.
              </p>
            </div>
            <div className="bg-white rounded-lg h-[550px] w-auto flex flex-col items-center justify-center">
              <img src={MAD} alt="imageHere" className="h-72" />
              <h2 className="text-black text-2xl font-bold my-3 ">
                Mobile Application Development
              </h2>
              <p className="text-black  text-justify px-4 content-center">
                Amar Tech designs highly practical, technologically
                transformational, featurerich native mobile apps for consumers
                and enterprises. We'll oversee mobile app development from
                inception to delivery and maintenance.
              </p>
            </div>
            <div className="bg-white rounded-lg h-[550px] w-auto flex flex-col items-center justify-center">
              <img src={UiUx} alt="imageHere" className="h-72" />
              <h2 className="text-black text-2xl font-bold my-3 ">
                UI/UX Design
              </h2>
              <p className="text-black text-justify px-4 content-center">
                With our exceptional UI/UX design services, we help you show off
                your brand's finest and exceed user expectations. Let’s
                collaborate to establish long-term customer retention strategies
                and real, human-centered brand identities that have a direct
                impact on today's digital landscape.
              </p>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 3 Ends Here <<<< ============================== */}
      </div>
    </>
  );
};

export default ServiceDetail;
