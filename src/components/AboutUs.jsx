import React from "react";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="bg-[#2787b7] py-24 px-4  mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Welcome to Our Techy World
        </h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ab
          cum voluptatem voluptatum quas dolorum accusamus deleniti aspernatur
          debitis ut!
        </p>
        <p className="mt-4 text-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, error
          at! Eligendi natus facilis dicta.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black hover:bg-white  py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
