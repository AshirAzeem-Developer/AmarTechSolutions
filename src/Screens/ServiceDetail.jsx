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
import andriod from "../assets/Backend/Icons/app.png";
import ios from "../assets/Backend/Icons/ios.png";
import pwa from "../assets/Backend/Icons/Pwa.png";
import cross from "../assets/Backend/Icons/cross.png";
// import CustomizedTimeline from "../components/CustomizedTimelinea";
import arrow from "../assets/Backend/Icons/arrow.png";

import MainFooter from "../components/MainFooter";
import LeftAlignedTimeline from "../components/CustomizedTimeline";

const ServiceDetail = () => {
  return (
    <>
      <div className="bg-[#D2D2DB] w-screen h-screen">
        {/* ====================== >>> Section 1 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] grid grid-rows-2 w-screen overflow-hidden">
          <video
            src={`${BgVideo}`}
            autoPlay
            loop
            muted
            className=" object-cover h-[70vh] w-full row-span-10 "
          ></video>
          <div className="w-screen h-auto row-span-2">
            <div className=" relative -top-14  lg:-top-[192px] xl:-top-24">
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
          className="bg-[#D2D2DB] grid lg:grid-cols-12 gap-8 px-14 items-center justify-center py-8 w-screen overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage2})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <div className="col-span-6 xl:col-span-4 ">
            <img
              src={Sec2Img}
              alt="ImageHere"
              className=" h-full lg:h-3/4 xl:h-[38rem] object-cover"
            />
          </div>
          <div className="col-span-6  xl:col-span-8 py-6">
            <div className="flex flex-col items-center justify-center">
              <h1 className="my-1 text-2xl  text-black">
                Our goal is to ensure the reliability, scalability, and security
                of the company's software systems.
              </h1>
              <br />
              <h1 className="my-1 text-2xl  text-black">
                We design superior backend development services with industry
                best practices and agile principles in mind to ensure the
                creation of high-quality solutions that are capable of
                supporting and enhancing your business objectives.
              </h1>
              <br />
              <h1 className="my-1 text-2xl  text-black">
                Amartech uses a wide range of diverse array of technologies,
                frameworks, programming languages, and tools to provide
                advanced, top-notch, and easily scalable solutions to customers
                globally.
              </h1>
            </div>

            <div className="bg-white rounded-md w-full h-auto grid grid-cols-3 lg:grid-cols-5  px-4 mt-6">
              <div className="flex flex-col items-center justify-center">
                <img src={Lang1} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-xl font-bold">Java</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang2} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-xl font-bold">NodJs</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang3} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-xl font-bold">Python</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang4} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-xl font-bold">PHP</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang5} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-xl font-bold">C++</h1>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 2 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 3 Starts Here <<<< ============================== */}

        <div className="bg-[#D2D2DB] h-auto py-10 w-screen overflow-hidden ">
          <h1 className=" text-3xl py-2 lg:text-4xl px-8 text-black font-semibold">
            Transforming Businesses through Smart Software Solutions and
            Committed Development Teams.
          </h1>
          <h3 className="text-black text-lg lg:text-2xl px-8 my-4 py-2">
            Our team at Amar Tech has skilled and data driven software
            developers which aim to create long-term value with our excellent
            software development services.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-center justify-center  mx-16">
            <div className="bg-white rounded-lg h-[480px] sm:h-[450px]   lg:h-[600px] xl:h-[500px] w-[330px] text-center md:w-[400px] lg:w-[350px] xl:w-[550px]  flex flex-col  items-center justify-center ">
              <div>
                <img
                  src={Web}
                  alt="imageHere"
                  className="h-48 drop-shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-black text-xl font-bold my-3 ">
                  Web Application Development
                </h2>
              </div>
              <div>
                <p className="text-black  text-justify text-sm px-10 content-center">
                  Our web application development services make it easier to
                  create, update, and maintain software applications that run on
                  the web. By working with Amar Tech, you can speed up the
                  growth of your user base, get access to new digital channels,
                  improve your conversion rate, and reach other business goals
                  faster.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg h-[480px] sm:h-[450px]  lg:h-[600px] xl:h-[500px] w-[330px] text-center md:w-[400px] lg:w-[350px] xl:w-[550px] flex flex-col items-center justify-center">
              <div>
                <img
                  src={MAD}
                  alt="imageHere"
                  className="h-48 drop-shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-black text-xl font-bold my-3 ">
                  Mobile Application Development
                </h2>
                <p className="text-black  text-justify text-sm px-10 content-center">
                  Amar Tech designs highly practical, technologically
                  transformational, featurerich native mobile apps for consumers
                  and enterprises. We'll oversee mobile app development from
                  inception to delivery and maintenance.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg h-[480px] sm:h-[450px]  lg:h-[600px] xl:h-[500px] w-[330px] text-center md:w-[400px] lg:w-[350px] xl:w-[550px] flex flex-col  items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={UiUx}
                  alt="imageHere"
                  className="h-48 drop-shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-black text-2xl font-bold my-3 ">
                  UI/UX Design
                </h2>
                <p className="text-black text-justify text-sm px-10 content-center">
                  With our exceptional UI/UX design services, we help you show
                  off your brand's finest and exceed user expectations. Let’s
                  collaborate to establish long-term customer retention
                  strategies and real, human-centered brand identities that have
                  a direct impact on today's digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 3 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 4 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] h-auto  py-10 justify-center w-screen overflow-hidden">
          <h1 className="text-3xl text-center font-bold text-black ">
            Why Choose Amar Tech for Software Development Services?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8   items-center justify-center px-6 md:px-8 lg:px-36 pt-12">
            <div className="bg-white h-[300px] md:h-[300px]  w-auto md:w-300px lg:w-[430px]  xl:w-[550px]  rounded-3xl sm:h-[400px] lg:h-[300px] items-center justify-center">
              <div className="flex flex-row p-4 items-center justify-around  ">
                <img src={andriod} alt="imageHere" className="h-24  " />
                <h2 className="text-black  text-xl sm:text-xl md:text-2xl text-center font-bold md:px-8  pt-4">
                  Android App Development
                </h2>
              </div>

              <p className="text-black font-medium text-md text-justify px-4 pt-3 content-center">
                We use Kotlin and Java technologies; our Android app developers
                build apps that work pretty well on all Android devices. From
                design to development, every feature of the app is meticulously
                designed with a user-centric approach.
              </p>
            </div>
            <div className="bg-white h-[300px]  md:h-[300px]  w-auto md:w-300px lg:w-[430px]  xl:w-[550px]  rounded-3xl sm:h-[400px] lg:h-[300px] items-center justify-center">
              <div className="flex flex-row p-4   items-center justify-around ">
                <img src={ios} alt="imageHere" className="h-24" />
                <h2 className="text-black text-xl sm:text-xl md:text-2xl text-center font-medium md:px-8  pt-4">
                  iOS App Development
                </h2>
              </div>
              <p className="text-black font-medium text-md text-justify px-4 pt-3 content-center">
                Whether it’s the latest iPhone, iPad, or Apple watch, our iOS
                app developers know how to create robust iOS apps from Object C
                and Swift. With a professional iOS app, you’ll increase your
                reach in no time.
              </p>
            </div>
            <div className="bg-white h-[300px]  md:h-[300px]  w-auto md:w-300px lg:w-[430px]  xl:w-[550px]  rounded-3xl sm:h-[400px] lg:h-[300px] items-center justify-center">
              <div className="flex flex-row p-4  items-center justify-around  ">
                <img src={pwa} alt="imageHere" className="h-24" />
                <h2 className="text-black text-xl sm:text-xl md:text-2xl text-center font-medium md:px-8  pt-4">
                  Progressive Web Apps (PWAs)
                </h2>
              </div>
              <p className="text-black font-medium text-md text-justify px-4 pt-3 content-center">
                Our mobile app developers have the expertise to design and
                develop Progressive Web Apps (PWAs) that will enhance your
                offline functionality. No download necessary; these apps will
                run directly from the server.
              </p>
            </div>
            <div className="bg-white h-[300px]  md:h-[300px]  w-auto md:w-300px lg:w-[430px]  xl:w-[550px]  rounded-3xl sm:h-[400px] lg:h-[300px] items-center justify-center">
              <div className="flex flex-row p-4 items-center justify-around   ">
                <img src={cross} alt="imageHere" className="h-24" />
                <h2 className="text-black text-xl sm:text-xl md:text-2xl text-center font-medium md:px-8  pt-4">
                  Cross Platform Compatibility
                </h2>
              </div>
              <p className="text-black font-medium text-md text-justify px-4 pt-3 content-center">
                The core focus of our UI/UX design is the principles that are
                tested and tried by dozens of clients. By designing and
                delivering responsive and cross-platform compatible designs, we
                ensure that they work on any platform.
              </p>
            </div>
          </div>
        </div>
        {/* ====================== >>> Section 4 End Here <<<< ============================== */}
        {/* ====================== >>> Section 5 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] pt-12 h-auto ">
          <h1 className="text-4xl text-center   text-black font-semibold">
            How Amartech Organize A Smooth Workflow For Their Clients?
          </h1>
          <div className="pt-8">
            <LeftAlignedTimeline />
          </div>
        </div>
        {/* ====================== >>> Section 5 Ends Here <<<< ==============================
             {/* ====================== >>> Section 6 starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB]  pt-4 pb-5 grid grid-col-1 justify-center">
          <div className="bg-[#053F74] max-sm:w-[350px] w-auto rounded-3xl md:h-[250px] lg:h-[250px] max-sm:h-44 lg:w-[750px]  flex flex-col items-center justify-center">
            <h1 className="text-4xl max-sm:text-3xl text-center text-[#D2D2DB] font-bold pt-12 max-sm:pt-8">
              Want To Shape Your Business?
            </h1>
            <div className=" max-sm:h-36 rounded-lg pt-8 max-sm:pt-4  ">
              <button className=" bg-[#D2D2DB] rounded-2xl  pl-5  text-2xl max-sm:text-2xl   flex flex-row text-[#FFFFFF]">
                Start Conversation Now
                <span>
                  <img src={arrow} alt="imageHere" className="w-14 pl-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 6 Ends Here <<<< ============================== */}
        <div className=" bg-[#053F74] p-4 w-100  h-auto mx-auto   mySubContainerClass">
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
