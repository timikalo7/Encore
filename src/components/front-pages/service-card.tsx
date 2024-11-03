import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });


interface ServiceCardProps {
  iconlink: string;
  link: string;
  title: string;
  description: string;
}

const ServiceCard = ({ iconlink, title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-secondary dark:bg-darksecondary sm:w-[25rem] w-[85vw] p-10 rounded-xl flex flex-col gap-10">
      <div className="flex sm:gap-10 gap-2 items-center">
        <Image src={iconlink} alt="icon" width={70} height={70} />
        <h4 className={cn("sm:text-2xl text-xl text-white font-light", rowdies.className)}>
          {title}
        </h4>
      </div>
      <div className="flex items-center">
        <div className="h-[3px] w-[5rem] bg-[#333333] rounded-lg" />
        <div className="h-[1px] w-[15rem] bg-[#DEDDCD] " />
      </div>
      <div className="h-20">
        <p className="text-white text-[16px] leading-8 max-w-[300px]">
          {description}
        </p>
      </div>
      <div>
        <Link href={link}>
        <Button className="p-6 tracking-[2px]" variant="donation">
          LEARN MORE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
