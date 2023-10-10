"use client";
import { Tproduct, TproductFormSchema } from "@/app/lib/type";
import NotificationCard from "@/components/card/NotificationCard";
import Scroll from "@/components/card/Scroll";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "@/components/form/ProductForm";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Pagination from "@/components/card/Pagination";
import { useSearchParams } from "next/navigation";
import Loading from "../loading";
import useSWR, { useSWRConfig } from "swr";
import TableProduct from "@/components/shared/TableProduct";

const Page = () => {
  const { mutate } = useSWRConfig();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [isAdmin, setIsAdmin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [count, setCount] = useState(0);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "5";
  const start = (Number(page) - 1) * Number(perPage);
  const end = Number(perPage);

  const { data, error, isLoading } = useSWR(
    `/api/product?skip=${start}&limit=${end}`,
    fetcher
  );
  if (error) {
    console.log("err::", error);
  }
  const handleDelete = (id?: number) => {
    if (!isAdmin) {
      setToggle(true);
      return;
    }
    axios
      .delete("/api/product", { data: { id } })
      .then((res) => {
        toast({
          description: "Delete success.",
        });
        mutate(`/api/product?skip=${start}&limit=${end}`);
      })
      .catch((err) => err.message);
    return;
  };
  const createProduct = (data: TproductFormSchema) => {
    if (!isAdmin) {
      setToggle(true);
      return;
    }
    axios
      .post("/api/product/", {
        urlImage: data.urlImage,
        title: data.title,
        desc: data?.desc || null,
        link: data.link,
        type: data.type,
        animes: [
          {
            type: data.typeAnime,
          },
        ],
      })
      .then((res) => {
        toast({
          description: "Created Success",
        });
        mutate(`/api/product?skip=${start}&limit=${end}`);
      })
      .catch((err) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `${err.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  };
  const handleClode = () => {
    setToggle(false);
  };
  const handleToggleForm = () => {
    setIsOpenForm(!isOpenForm);
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
  }, []);

  useEffect(() => {
    fetch(`/api/product/count`)
      .then((res) => res?.json())
      .then((data) => {
        if (data !== count) {
          setCount(data);
        }
      })
      .catch((err) => err.message);
  }, [count]);

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
          <main className="xl:hidden">
            This site does not support screens below 1280px
          </main>
          <main>
            <NotificationCard isOpen={toggle} handleToggle={handleClode} />
            <Scroll
              Function={handleToggleForm}
              icon={isOpenForm ? MdCancel : IoAddCircleSharp}
              size={24}
              classname="bottom-[160px] flex"
            />
            {isOpenForm && (
              <section className="w-full h-screen absolute flex justify-center items-center z-10 ">
                <ProductForm
                  typeSubmit="Create"
                  classname="p-8 rounded-xl border-2 border-slate-800 -mt-[10%]"
                  handleSubmit={createProduct}
                />
              </section>
            )}
            <TableProduct data={data} Delete={handleDelete} />
            <div className="w-full flex justify-center items-center my-4">
              <Pagination
                hasNextPage={start + end < count}
                currentPage={page}
                hasPrevPage={start > 0}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Page;
