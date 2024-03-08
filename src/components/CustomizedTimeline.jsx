import * as React from "react";

import Team from "../assets/Backend/Icons/Team.png";
import quality from "../assets/Backend/Icons/quality.png";
import contiues from "../assets/Backend/Icons/contiues.png";
import scale from "../assets/Backend/Icons/scale.png";
import feedback from "../assets/Backend/Icons/feedback.png";

import "react-vertical-timeline-component/style.min.css";

export default function CustomizedTimeline() {
  return (
    <>
      <div className="bg-[#D2D2DB]  flex flex-col items-end justify-center ">
        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4 ">
          <div className="col-span-2">
            <img src={Team} alt="imageHere" className="h-auto w-44" />
          </div>
          <div className="col-span-2 w-32 h-auto mx-8 p-8 px-12 sm:flex items-center justify-center bg-[#A7D7FA] rounded-full hidden ">
            <h1 className="text-6xl">1</h1>
          </div>
          <div className="sm:col-span-8 col-span-3">
            <h1 className="text-4xl my-2 maven-pro-bold text-black maven-pro-bold">
              Team Expertise
            </h1>
            <p className="text-xl maven-pro-regular text-black/80  ">
              Assemble a team of experienced software developers, architects,
              and digital consultants who are skilled in the relevant
              technologies and have a track record of successful projects.
            </p>
          </div>
        </div>
        {/* ========== >>>> Line 1 Starts <<<<< =========== */}
        {/* <div className="w-[75%] h-64  border-l-8 border-dashed  relative -top-28 -right-6"></div> */}
        {/* ========== >>>> Line 1 Ends <<<<< =========== */}

        <div className="  rounded-xl mx-10 p-6  grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4 ">
          <div className=" col-span-2">
            <img src={quality} alt="imageHere" className="h-auto w-44" />
          </div>
          <div className="col-span-2 w-32 h-auto mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-6xl ">2</h1>
          </div>
          <div className="col-span-8">
            <h1 className="text-4xl my-2 maven-pro-bold text-black ">
              Quality Assurance
            </h1>
            <p className="text-xl maven-pro-regular text-black/80">
              Implement robust quality assurance and testing processes to ensure
              the reliability and security of the software you deliver.
            </p>
          </div>
        </div>
        {/* ========== >>>> Line 2 Starts <<<<< =========== */}
        {/* <div className="w-[75%] h-64  border-l-8  border-dashed  relative -top-72 -right-6"></div> */}
        {/* ========== >>>> Line 2 Ends <<<<< =========== */}

        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4  ">
          <div className="col-span-2">
            <img src={contiues} alt="imageHere" className="h-auto w-44" />
          </div>
          <div className="col-span-2 w-32 h-auto mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-6xl">3</h1>
          </div>
          <div className="col-span-8">
            <h1 className="text-4xl my-2 font-bold text-black">
              Continues Learning
            </h1>
            <p className="text-xl maven-pro-regular text-black/80">
              The tech industry is ever-evolving. Encourage your team to
              continually learn and adapt to new technologies and best
              practices.
            </p>
          </div>
        </div>
        {/* ========== >>>> Line 3 Starts <<<<< =========== */}
        {/* <div className="w-[75%] h-64  border-l-8  border-dashed  relative -top-[480px] -right-6"></div> */}
        {/* ========== >>>> Line 3 Ends <<<<< =========== */}
        <div className="rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-1 ">
          <div className="col-span-2 pr-12 max-sm:w-72 ">
            <img src={scale} alt="imageHere" className="h-auto w-44" />
          </div>
          <div className="col-span-2 w-32 h-auto mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-6xl">4</h1>
          </div>
          <div className="col-span-8 ps-4">
            <h1 className="text-4xl my-2 maven-pro-bold text-black">
              Scalability
            </h1>
            <p className="text-xl maven-pro-regular text-black/80">
              Plan for scalability so that your business can grow as demand for
              your services increases.
            </p>
          </div>
        </div>
        {/* ========== >>>> Line 4 Starts <<<<< =========== */}
        {/* <div className="w-[75%] h-64  border-l-8  border-dashed  relative -top-[700px] -right-6 bottom-0"></div> */}
        {/* ========== >>>> Line 4 Ends <<<<< =========== */}
        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4  ">
          <div className="col-span-2">
            <img src={feedback} alt="imageHere" className="h-auto w-44" />
          </div>
          <div className="col-span-2 w-32 h-auto mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-6xl">5</h1>
          </div>
          <div className="col-span-8">
            <h1 className="text-4xl my-2 maven-pro-bold text-black">
              Feedback & Improvement
            </h1>
            <p className="text-xl maven-pro-regular text-black/80">
              Solicit feedback from clients and team members to continuously
              improve your services and processes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
