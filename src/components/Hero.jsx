import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#2787b7] flex flex-col">
        <div className="flex flex-col ml-8 sm:ml-32 flex-grow mt-48">
          <h2 className="text-4xl sm:text-7xl font-bold font-mavenpro text-white ">
            TRANSCENDING IDEAS
          </h2>
          <div className="pt-4 sm:pt-6">
            <h2 className="-tracking-2 text-white font-mavenpro text-2xl sm:text-3xl max-w-md ">
              TRANSFORMING FUTURE
            </h2>
            <h2 className=" -tracking-2 text-white font-mavenpro text-2xl sm:text-3xl max-w-md ">
              WITH DIGITAL TECH SOLUTIONS
            </h2>
          </div>
          <div className="pt-8 sm:pt-36 text-center  ">
            <button className="text-white bg-[#3d98c9] rounded text-lg sm:text-2xl px-6 sm:px-8 py-3 sm:py-4 font-mavenpro font-bold">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
