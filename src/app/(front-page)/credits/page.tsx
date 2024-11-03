import { cn } from "@/lib/utils";
import { Rowdies } from "next/font/google";
import Link from "next/link";
import React from "react";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });

const page = () => {
  return (
    <div className="pb-40">
      <h2
        className={cn(
          "text-[16px] text-center text-primary dark:text-darkprimary font-light leading-[32px] tracking-[3px]",
          rowdies.className
        )}
      >
        CREDITS
      </h2>
      <p
        className={cn(
          " text-center font-light tracking-[0.2px] text-[24px] sm:text-[30px] md:text-[34px] leading-[48px] lg:max-w-[770px] mx-auto",
          rowdies.className
        )}
      >
        This website was built by Timi, James, Jini and Malina
      </p>
    </div>
  );
};

export default page;
