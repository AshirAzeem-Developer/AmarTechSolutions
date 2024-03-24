import React, { useEffect, useState } from "react";
import BgVideo from "../assets/FrontEnd/Video/Frontend.mp4";
// import BgImage2 from "../assets/Backend/PNGFilesOfElements/Bg2.png";
// import BgImage from "../assets/Backend/PNGFilesOfElements/Bg1.png";
import Sec2Img from "../assets/FrontEnd/Images/pexels-fauxels-3183172.jpg";

import Lang1 from "../assets/FrontEnd/Angular.png";
import Lang2 from "../assets/FrontEnd/Vue.png";
import Lang3 from "../assets/FrontEnd/Tailwind.png";
import Lang4 from "../assets/FrontEnd/React.png";
import Lang5 from "../assets/FrontEnd/Javascript.png";

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
import AMNavbar from "../components/AMNAvbar";
const FrontEnd = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 500) {
      setScroll(true);
      // console.log(scrollValue);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let services = [
    {
      image: Web,
      title: "Web Application Development",
      describe:
        "Our web application development services make it easier to create, update, and maintain software applications that run on the web. By working with Amar Tech, you can speed up the growth of your user base, get access to new digital channels, improve your conversion rate, and reach other business goals faster.",
    },
    {
      image: MAD,
      title: "Mobile Application Development",
      describe:
        "Amar Tech designs highly practical, technologically transformational, featurerich native mobile apps for consumers and enterprises. We'll oversee mobile app development from inception to delivery and maintenance.",
    },
    {
      image: UiUx,
      title: "UI/UX Design",
      describe:
        "With our exceptional UI/UX design services, we help you show off your brand's finest and exceed user expectations. Let’s collaborate to establish long-term customer retention strategies and real, human-centered brand identities that have a direct impact on today's digital landscape.",
    },
  ];
  let softwareDevelopmentServices = [
    {
      serviceImage: andriod,
      title: "Android App Development",
      description:
        "We use Kotlin and Java technologies; our Android app developers build apps that work pretty well on all Android devices. From design to development, every feature of the app is meticulously designed with a user-centric approach.",
    },
    {
      serviceImage: ios,
      title: "iOS App Development",
      description:
        "Whether it’s the latest iPhone, iPad, or Apple watch, our iOS app developers know how to create robust iOS apps from Object C and Swift. With a professional iOS app, you’ll increase your reach in no time.",
    },
    {
      serviceImage: pwa,
      title: "Progressive Web Apps (PWAs)",
      description:
        "Our mobile app developers have the expertise to design and develop Progressive Web Apps (PWAs) that will enhance your offline functionality. No download necessary,these apps will run directly from the server.",
    },
    {
      serviceImage: cross,
      title: "Cross Platform Compatibility",
      description:
        "The core focus of our UI/UX design is the principles that are tested and tried by dozens of clients. By designing and delivering responsive and cross-platform compatible designs, we ensure that they work on any platform.",
    },
  ];
  return (
    <>
      <div className="bg-[#D2D2DB] ">
        {/* ====================== >>> Section 1 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] grid grid-rows-2 w-screen overflow-hidden ">
          <div
            className={`sticky top-0  z-10  ${
              scroll ? " bg-[#0000005a]" : "bg-transparent"
            }`}
          >
            <AMNavbar />
          </div>
          <div className="absolute top-0 left-0">
            <video
              src={`${BgVideo}`}
              autoPlay
              loop
              muted
              className=" object-cover h-[70vh] w-full row-span-10 "
            ></video>
            <div className="w-screen h-auto row-span-2 ">
              <div className=" relative -top-14  lg:-top-[65px] xl:-top-[65px]">
                <h1 className="text-white font-extrabold mx-4 text-5xl lg:text-6xl px-8">
                  FrontEnd
                </h1>
                <div className="headingBg z-10 px-8">
                  <h1 className=" text-black relative top16 font-bold mx-4 text-5xl lg:text-6xl  h-[10vh] ">
                    Development
                  </h1>
                  <p></p>
                  <p className="text-black font-bold max-sm:text-lg pt-12 max-sm:pt-0 text-2xl px-8">
                    Delivering unparalleled user experiences through
                    cutting-edge frontend services, redefining digital
                    interactions with seamless innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====================== >>> Section 1 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 2 Starts Here <<<< ============================== */}

        <div className="bg-[#D2D2DB] relative top-[570px] lg:top-[400px] xl:top-[570px] grid lg:grid-cols-12 gap-8 px-14 items-center justify-center py-8 w-screen overflow-hidden ">
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
                Let our skilled frontend developers at Amartech help you create
                interactive, stunning, and pixel perfect web and mobile
                applications that will captivate your users.
              </h1>
              <br />
              <h1 className="my-1 text-2xl  text-black">
                We aim at providing top-tier visual experiences by merging your
                concepts with our frontend proficiency.
              </h1>
              <br />
              <h1 className="my-1 text-2xl  text-black">
                Amartech uses a wide range of diverse array of technologies to
                create responsive and interactive web applications including
                frameworks, programming languages, and tools to provide
                advanced, top-notch, and easily scalable solutions to customers
                globally.
              </h1>
            </div>

            <div className="bg-white rounded-md w-full h-auto grid grid-cols-3 lg:grid-cols-5  px-4 mt-6">
              <div className="flex flex-col items-center justify-center">
                <img src={Lang1} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-1xl font-bold futura_book">
                  AngularJS
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang2} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-1xl font-bold futura_book">
                  Vue.js
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang3} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-1xl font-bold futura_book">
                  TailwindCSS
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang4} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-1xl font-bold futura_book">
                  React JS
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={Lang5} alt="ImageHere" className="h-1/3 lg:h-2/4" />
                <h1 className="text-black text-1xl font-bold futura_book">
                  JavaScript
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 2 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 3 Starts Here <<<< ============================== */}

        <div className="bg-[#D2D2DB] relative top-[600px] lg:top-[450px] xl:top-[600px]  h-auto py-20 w-screen overflow-hidden flex flex-col items-center justify-center px-8">
          <h1 className=" text-3xl py-2 lg:text-3xl xl:text-4xl px-8 text-black font-semibold futura_heavy">
            Transforming Businesses through Smart Software Solutions and
            Committed Development Teams.
          </h1>
          <h3 className="text-black text-lg lg:text-xl xl:text-2xl px-8 my-4 py-2 futura_book ">
            Our team at Amar Tech has skilled and data driven software
            developers which aim to create long-term value with our excellent
            software development services.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white mx-6  lg:py-6 xl:py-8 rounded-xl drop-shadow-xl"
                >
                  <div className="flex flex-col  items-center justify-center">
                    <img
                      src={service.image}
                      alt="imageHere"
                      className="w-[30%] h-auto drop-shadow-xl"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <h2 className="text-black text-[1.5rem] lg:text-base xl:text-xl font-bold my-3  maven-pro-bold text-center px-6">
                      {service.title}
                    </h2>

                    <p className="text-black  text-justify lg:text-xs xl:text-lg px-8 content-center maven-pro-regular">
                      {service.describe}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================== >>> Section 3 Ends Here <<<< ============================== */}
        {/* ====================== >>> Section 4 Starts Here <<<< ============================== */}
        <div className="w-screen bg-[#D2D2DB] relative top-[600px] lg:top-[450px] xl:top-[600px]  h-auto items-center   justify-center  overflow-hidden py-24">
          <h1 className="text-3xl text-center font-bold text-black  futura_heavy">
            Why Choose Amar Tech for Software Development Services?
          </h1>
          <div className="w-screen grid grid-cols-1 sm:grid-cols-2 grid-rows-2   gap-8   items-center justify-between   pt-12 px-12 lg:px-32">
            {softwareDevelopmentServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F4F4F4] drop-shadow-xl    rounded-3xl h-[100%] items-center justify-center py-6"
                >
                  <div className="flex flex-row p-4 items-center justify-around  ">
                    <img
                      src={service.serviceImage}
                      alt="imageHere"
                      className="w-[18%] h-auto"
                    />
                    <h2 className="text-black  text-xl sm:text-base md:text-lg xl:text-2xl text-center  md:px-8  pt-4 maven-pro-medium">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-black font-medium text-sm  xl:text-base text-justify px-4 pt-3 content-center maven-pro-regular">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* ====================== >>> Section 4 End Here <<<< ============================== */}
        {/* ====================== >>> Section 5 Starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] pt-12 relative top-[600px] lg:top-[450px] xl:top-[600px]  h-auto  py-12 self-center ">
          <h1 className="text-4xl text-center   text-black font-semibold  futura_heavy w-11/12 mx-auto">
            How Amartech Organize A Smooth Workflow For Their Clients?
          </h1>
          <div className="pt-8">
            <LeftAlignedTimeline />
          </div>
        </div>
        {/* ====================== >>> Section 5 Ends Here <<<< ==============================
             {/* ====================== >>> Section 6 starts Here <<<< ============================== */}
        <div className="bg-[#D2D2DB] relative top-[600px] lg:top-[450px] xl:top-[600px]  pt-4 pb-5 grid grid-col-1 justify-center">
          <div className="bg-[#053F74]  xl:w-[550px] rounded-3xl p-4  flex flex-col items-center justify-center ">
            <h1 className="text-4xl max-sm:text-3xl text-center text-[#D2D2DB] font-bold pt-12 max-sm:pt-8 maven-pro-regular ">
              Want To Shape Your Business?
            </h1>
            <div className=" max-sm:h-36 rounded-md pt-8 max-sm:pt-4    ">
              <button className=" bg-[#d2d2db]  rounded-2xl  pl-5  text-2xl max-sm:text-2xl   flex flex-row text-[#FFFFFF] tomorrow-regular">
                Start Conversation Now
                <span>
                  <img src={arrow} alt="imageHere" className="w-14 pl-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ====================== >>> Section 6 Ends Here <<<< ============================== */}
        <div className=" bg-[#053F74] relative top-[600px] lg:top-[450px] xl:top-[600px]  p-4 w-100  h-auto mx-auto   mySubContainerClass">
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
