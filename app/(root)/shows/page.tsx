"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tproduct } from "@/app/lib/type";
import useSWR from "swr";
import Loading from "../loading";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const Page = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [activeTab, setActiveTab] = useState("");

  const { data, error, isLoading } = useSWR(
    `/api/product/detail?type=ANIME${
      activeTab !== "" ? `&typeAnime=${activeTab}` : ""
    }`,
    fetcher
  );
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error &&
            toast({
              title: "Uh oh! Something went wrong.",
              description: `${error.message}`,
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })}
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
                    activeTab === ""
                      ? "border-b-[3px] font-bold border-[#e83e8c]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("")}
                >
                  Show All (A-Z)
                </li>
                <li
                  className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                    activeTab === "TV"
                      ? "border-b-[3px] font-bold border-[#e83e8c]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("TV")}
                >
                  Tv
                </li>
                <li
                  className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                    activeTab === "MOVIE"
                      ? "border-b-[3px] font-bold border-[#e83e8c]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("MOVIE")}
                >
                  Movie
                </li>
                <li
                  className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                    activeTab === "GAME"
                      ? "border-b-[3px] font-bold border-[#e83e8c]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("GAME")}
                >
                  Game
                </li>
                <li
                  className={`hover:opacity-70] py-[10px] hover:text-[#1abc9c] cursor-pointer text-sm ${
                    activeTab === "OTHER"
                      ? "border-b-[3px] font-bold border-[#e83e8c]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("OTHER")}
                >
                  Other
                </li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-[40px] ">
                {data?.length > 0 &&
                  data?.map((item: Tproduct) => {
                    return (
                      <div
                        key={item.id}
                        className=" w-full flex flex-col gap-y-[20px] transition-all"
                      >
                        <a href="/">
                          <Image
                            src={item.urlImage}
                            alt={item.title}
                            height={100}
                            width={300}
                            className="rounded-lg"
                          />
                        </a>
                        <h3 className="font-bold text-[16px] text-main">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
