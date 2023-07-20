'use client'

import React from 'react';
import Carousel from './Carousel';
import { SlideData } from '@/app/types/slide_data';

interface sectionProps
{
  data : SlideData[]
}

const Section:React.FC<sectionProps> = ({data}) => {
  return (
    <div>
      
      <Carousel data = {data}/>
    </div>
  );
};

export default Section;