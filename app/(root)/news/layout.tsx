import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Aniplex | NEWS",
  description: "Aniplex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
