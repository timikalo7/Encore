import React from "react";
import Image from "next/image";
import Link from "next/link";

//components
import { ModeToggle } from "@/components/ui/modetoggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DropdownMenu from "@/components/front-pages/dropdown-menu";
import ContactButton from "./contact-button";
import { currentUser } from "@/lib/auth";
import Dropdownsection from "./dropdown-section";
import Navigationmenudropdown from "./navigation-menu-dropdown";
import MobileSheet from "./mobile-sheet"


interface navbarProps {}

const Navbar = async ({}: navbarProps) => {
  const user = await currentUser();
  return (
    <Card className="mb-0 p-5 flex flex-row items-center justify-between z-[40]">
      <div className="flex justify-start flex-row space-x-3 items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-zinc-700 xs:text-start text-center min-w-24 sm:min-w-36 font-light font-rowdies text-[20px] sm:text-[30px] dark:text-white">
            <Link href="/">
              Enco
              <span className="text-primary dark:text-[#75b547]">re</span>
            </Link>
          </h1>
          <div className="block w-[2px] h-[35px] bg-[#75b547]" />
          <div className="xl:hidden md:block hidden z-[40]">
            <Navigationmenudropdown />
          </div>
          <div className="md:hidden block z-[40] w-full">
            <MobileSheet />
          </div>
        </div>
        <Dropdownsection />
      </div>
      <div className="items-center gap-4 xl:gap-10 flex">
        {user ? (
          <div className="gap-4 xl:gap-10 items-center  hidden md:flex">
            <Link href="/dashboard">
              <Button variant="primary" className="text-sm md:text-base">
                Dashboard
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="primary" className="text-sm md:text-base">
                Settings
              </Button>
            </Link>
          </div>
        ) : (
          <Link className="hidden md:block" href="/auth/login">
            <Button variant="primary" className="text-sm md:text-base">
              Login
            </Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </Card>
  );
};

export default Navbar;
