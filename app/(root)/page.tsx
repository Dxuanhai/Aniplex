import Slide from "@/components/Slide";
import Section from "@/components/Section";
import Trailer from "@/components/Trailer";
import Information from "@/components/Information";
import { fetchTypeProducts } from "../lib/actions/product.action";

export default async function Home() {
  const dataANIME = await fetchTypeProducts("ANIME", 0, 10);
  const dataTOY = await fetchTypeProducts("TOY", 0, 10);
  const dataBOX = await fetchTypeProducts("BOX", 0, 10);

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
          data={dataANIME}
          title="WHAT'S NEW?"
          classname="flex-col justify-start text-left"
          breakpoints={breakpoints1}
          height={"h-[600px]"}
        />
        <Section
          data={dataTOY}
          title="ANIPLEX+"
          classname="flex-col-reverse justify-end text-center"
          breakpoints={breakpoints2}
          height={"h-[1000px] mb-[-200px] md:mb-[0px] md:h-[650px]"}
        />
        <Trailer />
        <Section
          data={dataBOX}
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
