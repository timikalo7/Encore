import { Facebook, Twitter, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Rowdies } from "next/font/google";
import { cn } from "@/lib/utils";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });

const SOCIAL_LINKS = [
  {
    name: "Blog",
    link: "",
    icon: <BookOpen className="w-6 h-6 text-white hover:text-gray-400" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: <Twitter className="w-6 h-6 text-white hover:text-gray-400" />,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/",
    icon: <Facebook className="w-6 h-6 text-white hover:text-gray-400" />,
  },
] as const;

const FooterSmall: React.FC = (props) => {
  return (
    <footer className="bg-primary dark:bg-darkprimary text-white">
      <section className="flex justify-around py-10">
        <div>
          <h1
            className={cn(
              "text-white text-[32px] font-light dark:text-white ",
              rowdies.className
            )}
          >
            <Link href="/">
              
              <span className="text-secondary dark:text-darksecondary"></span>
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <h2
            className={cn(
              "font-light text-[16px] text-white tracking-[3px] leading-[32px]",
              rowdies.className
            )}
          >
            OVERVIEW
          </h2>
          <Link
            href="/who-we-are?section=our-mission"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/who-we-are?section=our-partners"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Partners
          </Link>
          <Link
            href="/get-involved"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/who-we-help?section=our-stories"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Stories
          </Link>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <h2
            className={cn(
              "font-light text-[16px] text-white tracking-[3px] leading-[32px]",
              rowdies.className
            )}
          >
            SERVICE
          </h2>
          <Link
            href="/get-involved?section=donate-it-equipment"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Donate IT equipment
          </Link>
          <Link
            href="/get-involved?section=volunteer"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Volunteer
          </Link>
          <Link
            href="/get-involved?section=donate-cash"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Donate cash
          </Link>
          <Link
            href="/get-involved?section=request-a-speaker"
            className="text-[16px] text-white hover:opacity-75 cursor-pointer"
          >
            Request a Speaker
          </Link>
        </div>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ icon, name, link }, index) => {
            return (
              <div
                key={index}
                className="bg-secondary dark:bg-darksecondary w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              >
                <Link href={link} target="_blank" aria-label={name}>
                  {icon}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-[90%] h-[1px] bg-white mx-auto " />
      <section className="flex justify-around py-10">
        <div className="flex gap-10">
          <Link href={"/credits"}>
            <h3 className="text-[16px] hover:opacity-75 text-white">Credits</h3>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default FooterSmall;
