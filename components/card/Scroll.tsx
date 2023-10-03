"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons/lib";
interface Props {
  icon: IconType;
  size: number;
  classname?: string;
  Function: () => void;
}

const Scroll = ({ icon, size, classname, Function }: Props) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    console.log(isScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  const handleScrollTop = () => {
    alert("Scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={Function}
      className={twMerge(
        "transition-all",
        "w-[60px]",
        "h-[60px]",
        "xl:w-[40px]",
        "xl:h-[40px]",
        "flex",
        "items-center",
        "justify-center",
        "text-white",
        "bg-[rgba(0,0,0,0.3)]",
        "fixed",
        "right-4",
        "bottom-[40px]",
        "z-50",
        "cursor-pointer",
        "rounded-md",
        "xl:hover:bg-pink-600",
        isScroll ? "opacity-100" : "opacity-0",
        classname
      )}
    >
      {icon({ size })}
    </div>
  );
};

export default Scroll;
