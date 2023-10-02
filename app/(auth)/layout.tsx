"use client";
import { useEffect, useState } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      router.push("/");
      return;
    }
    setUserLogin(true);
  }, []);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {userLogin ? (
          <>{children}</>
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
