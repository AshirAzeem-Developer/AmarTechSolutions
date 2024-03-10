import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import UserAvatar from "../assets/UserAvatar.png";

import "../App.css";

import { Navigation } from "swiper/modules";

const ATCarousel = () => {
  const data = [
    {
      name: `Sean Fisher`,
      designation: `CEO - Switch it`,
      img: UserAvatar,
      review: `Working with Amar-Tech was the best decision I made for my Business. Their dedication & support is remarkable. I rate them as a 5-Star Software Development Company.`,
    },
    {
      name: `Willie Brow`,

      designation: `Head of Product`,

      img: UserAvatar,

      review: `I need Project Teams from time to time and Amar-Tech has always helped me with this. I am satisfied and would highly recommend their services.`,
    },
    {
      name: `Jannet Morirs `,
      designation: `Designer`,

      img: UserAvatar,

      review: `I need Project Teams from time to time and Amar-Tech has always helped me with this. I am satisfied and would highly recommend their services.`,
    },
    {
      name: `Morirs Jannes `,
      designation: `Designer`,

      img: UserAvatar,

      review: `I need Project Teams from time to time and Amar-Tech has always helped me with this. I am satisfied and would highly recommend their services.`,
    },
  ];
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((d) => {
          return (
            <SwiperSlide
              key={d.name}
              className="text-black flex flex-col items-center  justify-start max-sm:px-2   px-12 py-4 "
            >
              <div
                key={d.name}
                className="text-black flex flex-col  px-4  py-4"
              >
                <div className=" bg-[#053F74] max-sm:w-[250px] lg:w-[280px] max-sm:p-2  rounded-3xl h-auto md:h-[255px] py-5">
                  <div className="flex flex-col md:flex-row items-center justify-start ">
                    <img
                      src={d.img}
                      alt=""
                      className="h-8 w-8 lg:h-16 lg:w-16 rounded-full mx-4 bg-white p-2"
                    />
                    <div className="text-center">
                      <h5 className="text-md">{d.name}</h5>
                      <p className="text-sm">{d.designation}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center  p-4">
                    <p className="text-balance text-md ">{d.review}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ATCarousel;
