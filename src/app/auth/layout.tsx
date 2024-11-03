import Navbar from "@/components/front-pages/navbar";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FooterSmall from "@/components/front-pages/footer-small";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("")}>
      <div className="m-6">
        <Navbar />
      </div>
      <div className="flex">
        <main className="mb-[10rem] flex-grow">{children}</main>
      </div>
      <FooterSmall />
    </div>
  );
}
