"use client";

import { Tproduct, TproductFormSchema } from "@/app/lib/type";
import NotificationCard from "@/components/card/NotificationCard";
import ProductForm from "@/components/form/ProductForm";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const productId = parseInt(params.slug, 10);
  const [data, setData] = useState<Tproduct>({
    title: "",
    link: "",
    urlImage: "",
    type: "",
    animes: [{ type: "" }],
  });
  const [isLoading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleClode = () => {
    setToggle(false);
  };

  useEffect(() => {
    const Email = localStorage.getItem("userLogin");
    if (Email) {
      fetch(`/api/user?email=${Email}`)
        .then((res) => res?.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        })
        .catch((err) => err.message);
    }
  }, [isAdmin]);

  useEffect(() => {
    fetch(`/api/product/${productId}`)
      .then((res) => res?.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [data, setLoading, productId]);

  const updateProduct = (data: TproductFormSchema) => {
    if (!isAdmin) {
      setToggle(true);
      return;
    }
    axios
      .put("/api/product/", {
        id: productId,
        urlImage: data.urlImage,
        title: data.title,
        desc: data.desc,
        link: data.link,
        type: data.type,
        animes: [
          {
            type: data.typeAnime,
          },
        ],
      })
      .then((res) => {
        router.push("/products");
        return true;
      })
      .catch((err) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `${err.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return false;
      });
  };
  return (
    <>
      {isLoading ? (
        <main className="w-full h-screen flex items-center justify-center relative">
          <span className="loading loading-ring w-[10px]  text-pink-100  absolute"></span>
          <span className="loading loading-ring w-[50px]  text-pink-200 absolute"></span>
          <span className="loading loading-ring w-[100px]  text-pink-300 absolute"></span>
          <span className="loading loading-ring w-[200px] text-pink-400 absolute "></span>
          <span className="loading loading-ring w-[400px] text-pink-500 absolute "></span>
        </main>
      ) : (
        <>
          <NotificationCard isOpen={toggle} handleToggle={handleClode} />
          <main className="container mx-auto 2xl:w-[1280px] ">
            <div className="flex flex-col md:flex-row gap-x-[80px] py-5 items-center">
              <div className="hidden md:flex flex-col gap-2 items-center">
                <div
                  className="w-[180px] h-[250px] xl:w-[300px] xl:h-[450px]  bg-center bg-no-repeat bg-cover "
                  style={{ backgroundImage: `url(${data.urlImage})` }}
                ></div>
                <h2 className="text-lg font-bold text-[#444444] text-center">{`${data.title}`}</h2>
                <p className="text-[#888888] text-[14px] text-center">{`${data?.desc}`}</p>
              </div>
              <ProductForm
                product={data}
                typeSubmit="Update"
                handleSubmit={updateProduct}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Page;
