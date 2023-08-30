import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='flex w-full h-[500px] items-center justify-center mx-7'>
      <Image src='/images/hello.png' alt="227_thumb.jpg" height={100} width={200}></Image>
    </div>
  );
};

export default page;