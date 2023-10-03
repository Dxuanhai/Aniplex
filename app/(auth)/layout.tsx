import Authenticate from "@/components/shared/Authenticate";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Authenticate type={false}>{children}</Authenticate>
      </body>
    </html>
  );
}
