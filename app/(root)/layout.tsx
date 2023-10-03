import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Authenticate from "@/components/shared/Authenticate";

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
  const cookieStore = cookies();
  const isUserLogin = cookieStore.get("userLogin");

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Authenticate type={true}>
          <Header />
          {children}
          <Footer />
        </Authenticate>
      </body>
    </html>
  );
}
