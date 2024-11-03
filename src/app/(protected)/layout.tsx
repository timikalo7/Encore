import Navbar from "@/components/front-pages/navbar";
import React from "react";
import { cn } from "@/lib/utils";
import FooterSmall from "@/components/front-pages/footer-small";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use the correct object
  const user = currentUser();
  const session = await auth();
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      <div>
        <div className="min-h-screen flex flex-col">
          <div className="m-6">
            <Navbar />
          </div>
          <div className="flex-grow">
            <main className="">{children}</main>
          </div>
          <FooterSmall />
        </div>
      </div>
    </SessionProvider>
  );
}
