"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface contactbuttonProps {

}

const ContactButton = ({ }: contactbuttonProps) => {
    const path = usePathname();
    return (
      <Link
        className="p-[10px] rounded-md lg:text-[16px] text-sm hover:opacity-75 cursor-pointer"
        href="/contact"
      >
        {path === "/contact" ? (
          <div>
            <span className="text-primary font-semibold">Contact</span>
            <div className="w-[40px] h-[2px] bg-primary" />
          </div>
        ) : (
          <div>Contact</div>
        )}
      </Link>
    );
}

export default ContactButton
