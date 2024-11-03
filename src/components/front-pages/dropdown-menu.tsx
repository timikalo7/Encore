"use client";

import {
  DropdownMenu as Dropmenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface dropdownmenuProps {
  label: string;
  items?: string[];
  links?: string[];
  url?: string;
}

const DropdownMenu = ({ label, items, links, url }: dropdownmenuProps) => {
  const path = usePathname();
  return (
    <Dropmenu>
      <div className="p-[10px] rounded-md lg:text-[16px] text-sm hover:opacity-75 cursor-pointer hidden xl:block">
        <DropdownMenuTrigger className="outline-none">
          {path === url ? (
            <div>
              <span className="text-primary font-semibold">{label}</span>
              <div className="w-[40px] h-[2px] bg-primary" />
            </div>
          ) : (
            label
          )}
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="z-10">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>

        <DropdownMenuSeparator />
        {items &&
          links &&
          items.map((item, index) => (
            <Link className="hover:cursor-pointer" key={index} href={links[index]}>
              <DropdownMenuItem>{item}</DropdownMenuItem>
            </Link>
          ))}
      </DropdownMenuContent>
    </Dropmenu>
  );
};

export default DropdownMenu;
