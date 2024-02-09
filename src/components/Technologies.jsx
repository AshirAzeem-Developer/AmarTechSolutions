import React, { useEffect } from "react";
import reactlogo from "../assets/reactlogo.png";
import kibanalog from "../assets/kibana.png";
// import rabitmq from "../assets/rabit.png";
import spring from "../assets/springboot.png";
import elastic from "../assets/elasticsearch.png";
import mariadb from "../assets/maria.png";
import kafka from "../assets/kafkalogo.png";
import Logstash from "../assets/logs.png";
import java from "../assets/javalogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  // const [scroll, setScroll] = useState(false);

  // const handleScroll = () => {
  //   let scrollValue = document.documentElement.scrollTop;
  //   if (scrollValue > 600) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);
  const techassets = [
    {
      iconSrc: kibanalog,
    },
    {
      iconSrc: spring,
    },
    {
      iconSrc: reactlogo,
    },
    {
      iconSrc: elastic,
    },
    {
      iconSrc: mariadb,
    },
    {
      iconSrc: kafka,
    },
    {
      iconSrc: Logstash,
    },
    {
      iconSrc: java,
    },
  ];

  return (
    <div className="py-8">
      <h1 className="font-bold text-center  text-4xl sm:text-5xl lg:text-7xl py-8  bg-white ">
        <span className="  p-4 headerFont text-[#035D8F]">Technologies</span>
      </h1>
      <div
        className={` grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center mx-auto p-14  bg-[#035D8F]`}
      >
        {techassets.map((x, i) => {
          return (
            <div
              data-aos="zoom-in-right"
              key={i}
              className={`flex items-center justify-center hover:shadow-2xl rounded-md px-4 py-2 bg-[#68b2da24] shadow-md  h-full hover:bg-[#68b3da]`}
              //  ${
              //   scroll ? "scale-in-bottom" : null
              // }
            >
              <img
                id={i}
                src={x.iconSrc}
                className="w-100 md:w-[90%]"
                alt="TechImage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
