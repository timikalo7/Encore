import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/query-provider";
import { auth } from "@/auth";
import CustomHead from "@/components/custom-head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reusing IT",
  description: "Charity for reusing IT equipment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col">
              <div className={cn("flex-grow")}>
                <main className="">
                  <CustomHead />
                  {children}
                </main>
              </div>
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
