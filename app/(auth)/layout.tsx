import Authenticate from "@/components/shared/Authenticate";
import "../globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Suspense fallback={<Loading />}>
          <Authenticate type={false}>{children}</Authenticate>
        </Suspense>
      </body>
    </html>
  );
}
