import React, { useEffect, useState } from "react";
import Backend from "../assets/Backend.png";
import FrontEnd from "../assets/FrontEnd.png";
import Database from "../assets/Database.png";
import Monitor from "../assets/Monitor.png";
import Consultation from "../assets/Consultation.png";
import "../App.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    console.log(hoveredIndex);
  };
  const servicesAssets = [
    {
      iconSrc: Backend,
      serviceTitle: "Backend Development",
      description:
        "This includes expertise in Java, Spring, Spring Boot, and working with messaging technologies like Kafka and RabbitMQ fo building robust and  scalable backend systems",
      altText: "Backend Picture",
      src: "/backend",
    },
    {
      iconSrc: FrontEnd,
      serviceTitle: "Frontend Development",
      description:
        " Skills in building user interfaces using technologies like React for creating responsive and interactive web applications",
      altText: "Frontend Picture",
      src: "/frontend",
    },
    {
      iconSrc: Database,
      serviceTitle: "Database Management",
      description: `Proficiency in managing databases like MariaDB, including data modeling, optimization, and maintenance.`,

      altText: "Database Picture",
    },
    {
      iconSrc: Monitor,
      serviceTitle: "Monitoring & Analytics",
      description:
        " Experience with ELK (Elasticsearch, Logstash, Kibana) stack for log analysis and monitoring, ensuring system health and performance.",
      altText: "Monitoring And Analytics Picture",
    },
    {
      iconSrc: Consultation,
      serviceTitle: "Digital Transformation and Consultation",
      description:
        "  Offer consulting services to help businesses adapt to the digital age, identifying opportunities for improvement, and devising strategies for successful transformation",
      altText: "Digital Transformation and Consultation Picture",
    },
  ];
  return (
    <>
      <div>
        <h1
          className="text-center font-bold  text-4xl sm:text-5xl lg:text-7xl border-b-4 "
          data-aos="slide-right"
        >
          <span className="p-4 headerFont">We Offer</span>
        </h1>
        <div className="bg-[#2787b7] grid grid-cols-1 sm:grid-cols-2 md-grid-cols-5 lg:grid-cols-5 gap-4 items-center justify-center   mt-2  p-8 text-center px-8">
          {servicesAssets.map((x, i) => {
            return (
              <div
                data-aos="zoom-in-right"
                key={i}
                className=" w-fit h-auto  lg:h-[400px] xl:h-[450px]  grid grid-rows-2 items-center justify-between gap-1 bg-[#68b2da24]   hover:bg-[#68b3da] p-5 
                hover:shadow-2xl shadow-[#0c1419] rounded-sm"
                onMouseEnter={() => [
                  setHoveredIndex(i),
                  handleHover(setHover(true)),
                ]}
                onMouseLeave={() => [
                  setHoveredIndex(null),
                  handleHover(setHover(false)),
                ]}
                onClick={() => navigate(x.src)}
              >
                <div
                  className={`relative ${
                    hoveredIndex === i && hover ? "top-0 " : "top-20"
                  } flex flex-col items-center justify-center`}
                >
                  <img
                    src={x.iconSrc}
                    alt={x.altText}
                    className="w-[35%]  py-1 "
                  />

                  <h2 className="text-2xl sm:text-lg md:text-lg xl:text-xl font-bold pt-6 py-2">
                    {x.serviceTitle}
                  </h2>
                </div>
                <p
                  className={` text-sm sm:text-md md:text-sm xl:text-base text-balance  ${
                    hoveredIndex === i
                      ? "opacity-100 scale-in-bottom "
                      : "opacity-0"
                  }`}
                >
                  {x.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
