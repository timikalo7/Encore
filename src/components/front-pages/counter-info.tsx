import { cn } from "@/lib/utils";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });

interface couterinfoProps {
  number: string;
  label: string;
}

const couterinfo = ({ number, label }: couterinfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={cn("text-primary dark:text-darkprimary font-bold text-[40.47px]", rowdies.className)}>{number}</h1>
      <div className="w-[4rem] h-[2px] bg-black dark:bg-white" />
      <p className={cn("text-black font-light dark:text-white text-[16.86px]", rowdies.className)}>{label}</p>
    </div>
  );
};

export default couterinfo;
