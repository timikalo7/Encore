import Navbar from "@/components/front-pages/navbar";
import React from "react";
import { cn } from "@/lib/utils";
import FooterSmall from "@/components/front-pages/footer-small";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("flex-grow")}>
      <div className="m-6">
        <Navbar />
      </div>
      <main className="mb-[10rem]">{children}</main>
      <FooterSmall />
    </div>
  );
}
