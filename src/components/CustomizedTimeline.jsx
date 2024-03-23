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
      <div className="bg-[#D2D2DB]  flex flex-col items-end justify-center container mx-auto px-[6%] ">
        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4 ">
          <div className="col-span-2">
            <img src={Team} alt="imageHere" className="h-auto w-36" />
          </div>
          <div className="col-span-2  h-[100px] mx-8 p-8 px-12 sm:flex items-center justify-center bg-[#A7D7FA] rounded-full hidden w-[100px] ">
            <h1 className="text-4xl">1</h1>
          </div>
          <div className="sm:col-span-8 col-span-3 w-full mx-4">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl my-2 maven-pro-bold text-black maven-pro-bold">
              Team Expertise
            </h1>
            <p className="text-lg maven-pro-regular text-black/80  ">
              Assemble a team of experienced software developers, architects,
              and digital consultants who are skilled in the relevant
              technologies and have a track record of successful projects.
            </p>
          </div>
        </div>

        <div className=" rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4">
          <div className=" col-span-2">
            <img src={quality} alt="imageHere" className="h-auto w-36" />
          </div>
          <div className="col-span-2 w-[100px] h-[100px] mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-4xl">2</h1>
          </div>
          <div className="sm:col-span-8 col-span-3 w-full mx-4">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl my-2 maven-pro-bold text-black maven-pro-bold">
              Quality Assurance
            </h1>
            <p className="text-lg maven-pro-regular text-black/80">
              Implement robust quality assurance and testing processes to ensure
              the reliability and security of the software you deliver.
            </p>
          </div>
        </div>

        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4  ">
          <div className="col-span-2">
            <img src={contiues} alt="imageHere" className="h-auto w-36" />
          </div>
          <div className="col-span-2 w-[100px] h-[100px] mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-4xl">3</h1>
          </div>
          <div className="sm:col-span-8 col-span-3 w-full mx-4">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl my-2 maven-pro-bold text-black maven-pro-bold">
              Continues Learning
            </h1>
            <p className="text-lg maven-pro-regular text-black/80">
              The tech industry is ever-evolving. Encourage your team to
              continually learn and adapt to new technologies and best
              practices.
            </p>
          </div>
        </div>

        <div className="rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-1 ">
          <div className="col-span-2 pr-12 max-sm:w-72 ">
            <img src={scale} alt="imageHere" className="h-auto w-36" />
          </div>
          <div className="col-span-2 w-[100px] h-[100px] mx-8 p-8 px-12 hidden sm:flex items-center justify-center bg-[#A7D7FA] rounded-full">
            <h1 className="text-4xl">4</h1>
          </div>
          <div className="sm:col-span-8 col-span-3 w-full mx-4">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl my-2 maven-pro-bold text-black maven-pro-bold">
              Scalability
            </h1>
            <p className="text-lg maven-pro-regular text-black/80">
              Plan for scalability so that your business can grow as demand for
              your services increases.
            </p>
          </div>
        </div>

        <div className=" bg-[#F6F6F6] rounded-xl mx-10 p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center px-12 my-4  ">
          <div className="col-span-2">
            <img src={feedback} alt="imageHere" className="h-auto w-36" />
          </div>
          <div className="col-span-2  h-[100px] mx-8 p-8 px-12 sm:flex items-center justify-center bg-[#A7D7FA] rounded-full hidden w-[100px]">
            <h1 className="text-4xl">5</h1>
          </div>
          <div className="sm:col-span-8 col-span-3 w-full mx-4">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl my-2 maven-pro-bold text-black maven-pro-bold">
              Feedback & Improvement
            </h1>
            <p className="text-lg maven-pro-regular text-black/80">
              Solicit feedback from clients and team members to continuously
              improve your services and processes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
