"use client";
import { Tproduct, TproductFormSchema } from "@/app/lib/type";
import NotificationCard from "@/components/card/NotificationCard";
import Scroll from "@/components/card/Scroll";
import { Button } from "@/components/ui/button";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductForm from "@/components/form/ProductForm";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Page = () => {
  const [data, setData] = useState<Tproduct[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleDelete = (id: number | undefined) => {
    if (!isAdmin) {
      setToggle(true);
      return;
    }
    axios
      .delete("/api/product", { data: { id } })
      .then((res) =>
        toast({
          description: "Delete success.",
        })
      )
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
        return true;
      })
      .catch((err) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `${err.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
    return false;
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
    console.log("check admin Page::", isAdmin);
  }, [isAdmin, toggle]);

  useEffect(() => {
    fetch(`/api/product`)
      .then((res) => res?.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => err.message);
  }, [data, setLoading]);

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
                  classname="p-8 rounded-xl border-2 border-slate-800 -mt-[20%]"
                  handleSubmit={createProduct}
                />
              </section>
            )}
            <Table className={`hidden xl:block ${toggle ? "opacity-30" : ""}`}>
              <TableCaption>@xuanhaibaka as hasoul</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[15%] font-bold text-2xl">
                    Title
                  </TableHead>
                  <TableHead className="w-[15%] font-bold text-xl">
                    Image
                  </TableHead>
                  <TableHead className="w-[20%] font-bold text-xl">
                    Description
                  </TableHead>
                  <TableHead className="w-[8%] font-bold text-xl">
                    Type
                  </TableHead>
                  <TableHead className="w-[12%] font-bold text-xl">
                    Type Anime
                  </TableHead>
                  <TableHead className="w-[15%] font-bold text-xl">
                    Link
                  </TableHead>
                  <TableHead className="text-right w-[15%] font-bold text-xl">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-[#444444] font-bold text-xl">
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <div
                        className="w-full h-[200px] md:h-[300px] bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${item.urlImage})` }}
                      ></div>
                    </TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.animes[0].type}</TableCell>
                    <TableCell className="break-all">{item.link}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button>
                        <Link href={`/products/${item.id}`}>Update</Link>
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </main>
        </>
      )}
    </>
  );
};

export default Page;
