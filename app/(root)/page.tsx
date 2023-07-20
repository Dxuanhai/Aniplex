

import Slide from "@/components/Slide";
import Section from "@/components/Section";
import { SlideData } from "../types/slide_data";



export default function Home() {
  const data: SlideData[] = [
    {
      url: "/images/wn-1.jpg",
      title: "Streaming Now!",
      desc: "MASHLE: MAGIC AND MUSCLES",
      link: 'https://mashleanime.com/'
    },
    {
      url: "/images/wn-2.jpg",
      title: "Streaming Now!",
      desc: "Rurouni Kenshin",
      link: 'https://mashleanime.com/'
    },
    {
      url: "/images/wn-3.jpg",
      title: "Streaming Now!",
      desc: "My Love Story with Yamada-kun at Lv999",
      link: 'https://mashleanime.com/'
    },
    {
      url: "/images/wn-4.jpg",
      title: "Coming to Theaters February 2023",
      desc: "Sword Art Online the Movie -Progressive- Scherzo of Deep Night",
      link: 'https://mashleanime.com/'
    },
    {
      url: "/images/hero2.jpg",
      title: "1",
      desc: "1",
      link: 'https://mashleanime.com/'
    },
    {
      url: "/images/hero2.jpg",
      title: "1",
      desc: "1",
      link: 'https://mashleanime.com/'
    },
    // {
    //   url: "/images/hero2.jpg",
    //   title: "1",
    //   desc: "1",
    // },
    // {
    //   url: "/images/hero2.jpg",
    //   title: "1",
    //   desc: "1",
    // },
    // {
    //   url: "/images/hero2.jpg",
    //   title: "1",
    //   desc: "1",
    // },
  ];
  return (
    <div className="
    container
    mx-auto
    2xl:w-[1280px]
    px-4
    ">
      <Slide/>
      <Section data={data}/>
    </div>
  )
}
