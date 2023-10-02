"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Scroll from "@/components/card/Scroll";
import Header from "@/components/shared/Header";
import { BiLogOut, BiSolidUpArrowAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Aniplex",
  description: "Aniplex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      router.push("/login");
      return;
    }
    setUserLogin(true);
  }, []);
  const Logout = () => {
    console.log("fuckk");
    localStorage.removeItem("userLogin");
    router.push("/login");
  };
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {userLogin ? (
          <>
            <Scroll
              icon={BiSolidUpArrowAlt}
              size={24}
              classname="bottom-[100px] "
            />

            <Scroll icon={BiLogOut} size={24} logout={Logout} />

            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <>
            <main className="w-full h-screen flex items-center justify-center">
              <span className="loading loading-dots loading-lg"></span>
            </main>
          </>
        )}
      </body>
    </html>
  );
}
