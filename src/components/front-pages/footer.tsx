import { Facebook, Twitter, BookOpen } from "lucide-react";
import { AiOutlineArrowUp } from 'react-icons/ai';
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

const Footer: React.FC = (props) => {
  return (
    <footer className="bg-primary dark:bg-darkprimary text-white">
      <section className="flex lg:flex-row flex-col lg:items-center">
        <div className="bg-[#519E54] flex-[0.3333] flex items-center py-10 xl:px-10 px-5 gap-10 justify-center lg:justify-start">
          <div className="bg-white lg:p-6 rounded-full p-4 w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] flex justify-center items-center">
            <Image src={"/icons/Shape.svg"} alt={""} width={20} height={20} />
          </div>
          <div className="w-40">
            <h4>Phone</h4>
            <p>1234567890</p>
          </div>
        </div>
        <div className="bg-secondary dark:bg-darksecondary flex-[0.3333] flex items-center py-10 xl:px-10 px-5 gap-10 justify-center lg:justify-start">
          <div className="bg-white lg:p-6 rounded-full p-4 w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] flex justify-center items-center">
            <Image src={"/icons/Shape2.svg"} alt={""} width={24} height={24} />
          </div>
          <div className="w-40">
            <h4>Email</h4>
            <p className="sm:text-lg text-[12px]">
              founder@email.com{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#3A692A] flex-[0.3333] flex items-center py-10 xl:px-10 px-5 gap-10 justify-center lg:justify-start">
          <div className="bg-white lg:p-6 rounded-full p-4 w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] flex justify-center items-center">
            <Image src={"/icons/Shape3.svg"} alt={""} width={20} height={20} />
          </div>
          <div className="w-40">
            <h4>Address</h4>
            <p>DURHACK</p>
          </div>
        </div>
      </section>
      <section className="flex justify-around py-10">
        <div>
          <h1
            className={cn(
              "text-white text-[32px] font-light dark:text-white text-center sm:text-start",
              rowdies.className
            )}
          >
            <h1 className="text-zinc-700 xs:text-start text-center min-w-24 sm:min-w-36 font-light font-rowdies text-[20px] sm:text-[30px] dark:text-white">
            <Link href="/">
              Enco
              <span className="text-primary dark:text-[#75b547]">re</span>
            </Link>
          </h1>
          </h1>
        </div>
        <div className=" flex-col gap-4 hidden md:flex">
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
        <div className="flex-col gap-4 hidden md:flex">
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
            <h3 className="text-[16px] hover:opacity-75 text-white">
              Credits
            </h3>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
