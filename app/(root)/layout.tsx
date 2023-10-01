import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Scroll from "@/components/Scroll";
import Header from "@/components/shared/Header";
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
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Scroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
