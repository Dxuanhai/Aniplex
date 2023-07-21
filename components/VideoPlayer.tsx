'use client'

import React, { useState } from 'react';
import YouTube from 'react-youtube';


interface videoProps
{
  videoId: string
}

const VideoPlayer: React.FC<videoProps> = ({ videoId}) => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  };

  return (
      <div className='absolute left-0 top-0 w-full h-[260px] sm:h-[330px] md:h-[460px] lg:h-[580px] xl:h-[700px]  flex justify-center items-center z-10'>
        
        <YouTube videoId={videoId} opts={opts}  className='w-full h-full'  />
      </div>
  );
};

export default VideoPlayer;



