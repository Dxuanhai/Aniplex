"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/globals.css";
import { Navigation } from "swiper/modules";
import { SlideData } from "@/app/types/slide_data";

interface carouselProps {
  data: SlideData[]
  classname: string
  breakpoints: any
  height: any
}

const Carousel: React.FC<carouselProps> = ({ data, classname,breakpoints,height }) => {

  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={20}
        navigation ={true}
        modules={[Navigation]}
        slidesPerView={4}
        className="mySwiper
      "
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className={` ${height} flex flex-col gap-y-3 `}>
            <a href={item.link} className="h-[70%] w-full">
              <div
                className="h-full w-full bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
            </a>
            <div
              className={`h-[30%] flex  w-full gap-y-2 ${classname}`}
            >
              <h3 className="text-[#888888] text-[14px]">{item.title}</h3>
              <span className="text-lg font-bold text-[#444444]">{item.desc}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
