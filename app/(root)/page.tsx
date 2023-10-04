import Slide from "@/components/Slide";
import Section from "@/components/Section";

import { SlideData } from "../lib/types/slide_data";
import Trailer from "@/components/Trailer";
import Information from "@/components/Information";

export default function Home() {
  const dataWhatNews: SlideData[] = [
    {
      id: 1,
      url: "/images/wn-1.jpg",
      status: "Streaming Now!",
      title: "MASHLE: MAGIC AND MUSCLES",
      link: "https://mashleanime.com/",
    },
    {
      id: 2,
      url: "/images/wn-2.jpg",
      status: "Streaming Now!",
      title: "Rurouni Kenshin",
      link: "https://mashleanime.com/",
    },
    {
      id: 3,
      url: "/images/wn-3.jpg",
      status: "Streaming Now!",
      title: "My Love Story with Yamada-kun at Lv999",
      link: "https://mashleanime.com/",
    },
    {
      id: 4,
      url: "/images/wn-4.jpg",
      status: "Coming to Theaters February 2023",
      title: "Sword Art Online the Movie -Progressive- Scherzo of Deep Night",
      link: "https://mashleanime.com/",
    },
    {
      id: 5,
      url: "/images/hero2.jpg",
      status: "1",
      title: "1",
      link: "https://mashleanime.com/",
    },
    {
      id: 6,
      url: "/images/hero2.jpg",
      status: "1",
      title: "1",
      link: "https://mashleanime.com/",
    },
  ];
  const dataAniplex: SlideData[] = [
    {
      id: 1,
      url: "/images/an1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      desc: "Mitsuri Kanroji 1/8 Scale Figure",
      link: "https://mashleanime.com/",
    },
    {
      id: 2,
      url: "/images/an2.jpg",
      title: "Kaguya-sama:Love Is War",
      desc: " Ai Hayasaka Maid Swimsuit Ver. 1/7 Scale Figure",
      link: "https://mashleanime.com/",
    },
    {
      id: 3,
      url: "/images/an3.jpg",
      title: "Claynel",
      desc: "Illyasviel von Einzbern loungewear Ver. 1/7 Scale Figure",
      link: "https://mashleanime.com/",
    },
    {
      id: 4,
      url: "/images/an4.jpg",
      title: "Claynel",
      desc: "Rei Ayanami [VOYAGE END] 1/7 Scale Figure",
      link: "https://mashleanime.com/",
    },
    {
      id: 5,
      url: "/images/an4.jpg",
      title: "Claynel",
      desc: "Rei Ayanami [VOYAGE END] 1/7 Scale Figure",
      link: "https://mashleanime.com/",
    },
    {
      id: 5,
      url: "/images/an4.jpg",
      title: "Claynel",
      desc: "Rei Ayanami [VOYAGE END] 1/7 Scale Figure",
      link: "https://mashleanime.com/",
    },
  ];
  const breakpoints1 = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const breakpoints2 = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <div className="container mx-auto 2xl:w-[1280px] px-4">
      <>
        <Slide />
        <Section
          data={dataWhatNews}
          title="WHAT'S NEW?"
          classname="flex-col justify-start text-left"
          breakpoints={breakpoints1}
          height={"h-[600px]"}
        />
        <Section
          data={dataAniplex}
          title="ANIPLEX+"
          classname="flex-col-reverse justify-end text-center"
          breakpoints={breakpoints2}
          height={"h-[1000px] mb-[-200px] md:mb-[0px] md:h-[650px]"}
        />
        <Trailer />
        <Section
          data={dataWhatNews}
          title="PRE-ORDER & NEW RELEASES"
          classname="flex-col-reverse justify-end text-left"
          breakpoints={breakpoints1}
          height={"h-[600px]"}
        />
        <Information />
      </>
    </div>
  );
}
