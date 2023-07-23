'use client'
import { useState, useEffect } from "react";
import{BiSolidUpArrowAlt} from 'react-icons/bi'
const Scroll = () => {
  
  const [isScroll, setIsScroll] = useState(false)
  useEffect(()=>{
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    console.log(isScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[isScroll])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
    onClick={handleScrollTop}
    className={` ${isScroll ? 'opacity-100': 'opacity-0 ' } 
    transition-all 
    w-[60px]
    h-[60px]
    xl:w-[40px] 
    xl:h-[40px] 
    flex 
    items-center 
    justify-center 
    text-white 
    bg-[rgba(0,0,0,0.3)]
    fixed right-4 
    bottom-[40px] 
    z-50 cursor-pointer
    rounded-md
    xl:hover:bg-pink-600
    `}>
      <BiSolidUpArrowAlt size={24}/>
    </div>
  );
};

export default Scroll;