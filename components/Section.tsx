"use client";

import React, { useRef, useState } from "react";
import Carousel from "./Carousel";
import { SlideData } from "@/app/types/slide_data";
import Title from "./Title";

interface sectionProps {
  data: SlideData[];
  title: string;
  classname: string;
  breakpoints: any;
  height: any;
}

const Section: React.FC<sectionProps> = ({
  data,
  title,
  classname,
  breakpoints,
  height,
}) => {
  return (
    <div>
      <Title title={title} />
      <Carousel
        data={data}
        classname={classname}
        breakpoints={breakpoints}
        height={height}
      />
    </div>
  );
};

export default Section;
