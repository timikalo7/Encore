import Image from "next/image";
import { cn } from "@/lib/utils";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });

interface InfoCardProps {
  title: string;
  iconlink: string;
  description: string;
  width: number;
  height: number;
}

const InfoCard = ({
  title,
  iconlink,
  description,
  width,
  height,
}: InfoCardProps) => {
  return (
    <div className="bg-secondary dark:bg-darksecondary w-[85vw] sm:w-[85%] mx-auto p-10 rounded-xl flex flex-col gap-10">
      <div className="flex items-center sm:gap-10 gap-2 h-20">
        <Image width={width} height={height} src={iconlink} alt={title} />

        <h3 className={cn("sm:text-2xl text-xl text-white", rowdies.className)}>
          {title}
        </h3>
      </div>
      <div className="flex items-center">
        <div className="h-[3px] w-[5rem] bg-[#333333] rounded-lg" />
        <div className="h-[1px] w-[22rem] bg-[#DEDDCD] " />
      </div>
      <div>
        <p className="text-white text-[16px] leading-8 max-w-[386px] xs:h-24 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
