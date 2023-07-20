"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/globals.css";
import { Navigation } from "swiper/modules";
import { SlideData } from "@/app/types/slide_data";

interface carouselProps {
  data : SlideData[]
}

const Carousel:React.FC<carouselProps> = ({data}) => {
  
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  };
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        className="mySwiper
      "
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="h-[480px] flex flex-col gap-y-3 ">
            <a href={item.link} className="h-4/5 w-full">
              <div
                className="h-full w-full bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
            </a>
            <div className="h-1/5 flex flex-col gap-y-2 text-left">
              <h3 className="text-[#888888] text-sm">{item.title}</h3 >
              <span className="font-bold text-[#444444]">{item.desc}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel