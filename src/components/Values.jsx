import React, { useEffect } from "react";
import png from "../assets/PNG.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Values() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <>
      {/* <h1 className="font-bold text-center  text-4xl sm:text-5xl lg:text-7xl py-6  bg-white ">
        <span className="  p-4 headerFont text-[#035D8F]">Our Values</span>
      </h1> */}
      <div className="container  grid grid-cols-1 lg:grid-cols-2  gap-2 py-10  px-16 items-center justify-center mx-auto">
        <div className="text-2xl  leading-relaxed mx-4">
          <ul className="w-full lg:w-[120%]  list-disc text-sm  md:text-base lg:text-md xl:text-2xl ">
            <li
              className="text-white py-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Assemble a team of experienced software developers, architects,
              and digital consultants who are skilled in the relevant
              technologies and have a track record of successful projects
            </li>
            <li
              className="text-white py-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Implement robust quality assurance and testing processes to ensure
              the reliability and security of the software you deliver
            </li>
            <li
              className="text-white py-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              The tech industry is ever-evolving. Encourage your team to
              continually learn and adapt to new technologies and best
              practices.
            </li>
            <li
              className="text-white py-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Plan for scalability so that your business can grow as demand for
              your services increases.
            </li>
            <li
              className="text-white py-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Solicit feedback from clients and team members to continuously
              improve your services and processes.
            </li>
          </ul>
        </div>
        <div className=" relative right-16 lg:w-[120%] xl:w-[140%] md:h-auto md:w-auto ">
          <img
            src={png}
            alt="valuesImage"
            srcset=""
            className="hidden md:block rounded-full mx-4"
            data-aos="fade-up"
            data-aos-duration="10000"
          />
        </div>
      </div>
    </>
  );
}

export default Values;
