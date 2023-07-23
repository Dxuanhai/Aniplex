'use client'
import { useState } from "react"
import Image from "next/image"
const Page = () => {
  const [activeTab, setActiveTab] = useState("all")

  const handleTabClick = (tab:string) => {
    setActiveTab(tab)
  }

  return (
    <>
      <div className="bg-[#f5f5f5] py-[50px]">
        <div className="container mx-auto 2xl:w-[1280px] px-[20px] xl:px-[4]">
          <div className="w-full h-[20px] md:h-[25px] xl:h-[40px] flex items-center justify-center xl:justify-start">
            <h2 className="tracking-wide font-bold text-2xl text-[#33333]">
              SHOWS
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl:w-[1280px] px-[20px] xl:px-[4]">
        <div className="py-[80px] flex flex-col gap-y-[50px]">
          <ul className="list-none flex flex-wrap gap-x-[40px]">
            <li
              className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                activeTab === "all" ? "border-b-[3px] font-bold border-[#e83e8c]" : ""
              }`}
              onClick={() => handleTabClick("all")}
            >
              Show All (A-Z)
            </li>
            <li
              className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                activeTab === "tv" ? "border-b-[3px] font-bold border-[#e83e8c]" : ""
              }`}
              onClick={() => handleTabClick("tv")}
            >
              Tv
            </li>
            <li
              className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                activeTab === "movie" ? "border-b-[3px] font-bold border-[#e83e8c]" : ""
              }`}
              onClick={() => handleTabClick("movie")}
            >
              Movie
            </li>
            <li
              className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                activeTab === "game" ? "border-b-[3px] font-bold border-[#e83e8c]" : ""
              }`}
              onClick={() => handleTabClick("game")}
            >
              Game
            </li>
            <li
              className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                activeTab === "other" ? "border-b-[3px] font-bold border-[#e83e8c]" : ""
              }`}
              onClick={() => handleTabClick("other")}
            >
              Other
            </li>
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-[40px] ">
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/thumb.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"  
                /> 
              </a>
              <h3 className="font-bold text-[16px] text-main" >22/7 (nanabun no nijyuuni)</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/kv.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"
                />
              </a>
              <h3 className="font-bold text-[16px] text-main" >Eromanga Sensei</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/thumb.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"  
                /> 
              </a>
              <h3 className="font-bold text-[16px] text-main" >22/7 (nanabun no nijyuuni)</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/kv.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"
                />
              </a>
              <h3 className="font-bold text-[16px] text-main" >Eromanga Sensei</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/thumb.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"  
                /> 
              </a>
              <h3 className="font-bold text-[16px] text-main" >22/7 (nanabun no nijyuuni)</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/kv.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"
                />
              </a>
              <h3 className="font-bold text-[16px] text-main" >Eromanga Sensei</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/thumb.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"  
                /> 
              </a>
              <h3 className="font-bold text-[16px] text-main" >22/7 (nanabun no nijyuuni)</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/kv.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"
                />
              </a>
              <h3 className="font-bold text-[16px] text-main" >Eromanga Sensei</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/thumb.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"  
                /> 
              </a>
              <h3 className="font-bold text-[16px] text-main" >22/7 (nanabun no nijyuuni)</h3>
            </div>
            <div className=" w-full flex flex-col gap-y-[20px]">
              <a href="/">
                <Image src='/images/kv.jpg' alt="227_thumb.jpg" height={100} width={300} 
                className="rounded-lg"
                />
              </a>
              <h3 className="font-bold text-[16px] text-main" >Eromanga Sensei</h3>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
