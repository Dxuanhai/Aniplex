"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "../app/globals.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
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
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={4}
        className="mySwiper
      "
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className={` ${height} flex flex-col gap-y-3 pb-[80px]`}>
            <a href={item.link} className="h-[70%] w-full">
              <div
                className="h-full w-full bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${item.url || '/images/an2.jpg'})` }}
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
