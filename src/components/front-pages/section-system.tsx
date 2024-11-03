"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

//components
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";

interface SectionSystemProps {
  data: {
    id: string;
    title: string;
    content: {
      header: string;
      icon: any;
      text: string;
      link?: string;
      linkText?: string;
    }[];
  }[];
  buttonNames: string[];
  buttonIds: string[];
  title: string;
  classNames?: string;
  intialSelection?: string;
}

const SectionSystem = ({
  data,
  buttonNames,
  buttonIds,
  title,
  classNames,
  intialSelection,
}: SectionSystemProps) => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  console.log(section);

  const [selection, setSelection] = useState(
    section || intialSelection || buttonIds[0]
  );

  useEffect(() => {
    if (section) {
      setSelection(section);
    }
  }, [section]);

  const onClick = (id: string) => {
    setSelection(id);
  };
  return (
    <div className="flex flex-col  sm:flex-row">
      <Card
        className={`m-6 flex-[0.2]  ${classNames}`}
      >
        <div />
        {buttonNames &&
          buttonIds &&
          buttonNames.map((name, index) => {
            const isFirst = index === 0;
            const isLast = index === buttonNames.length - 1;

            return (
              <React.Fragment key={buttonIds[index]}>
                <button
                  className={cn(
                    "text-sm dark:hover:bg-stone-800 hover:bg-slate-100 h-[5rem] w-full",
                    isFirst &&
                      "rounded-t-sm",
                    isLast && "rounded-b-sm"
                  )}
                  onClick={() => {
                    onClick(buttonIds[index]);
                  }}
                >
                  <div>{name}</div>
                </button>
                {!isLast && (
                  <Separator className="" key={index} />
                )}
                
              </React.Fragment>
            );
          })}
        <div />
      </Card>
      <Card className="m-6 flex-[0.8]">
        <h1 className="font-light text-[16px] leading-[32px] tracking-[3px] font-rowdies text-primary dark:text-darkprimary text-center p-10">
          {title}
        </h1>
        <Separator />
        {data.map(
          ({ id, title, content }) =>
            id === selection && (
              <div id={id} key={id}>
                <div className="p-10 text-center">
                  <h2 className="mb-5 font-light text-[36px] sm:text-[56px] leading-[64px] tracking-[-2px] font-rowdies text-black dark:text-white">
                    {title}
                  </h2>
                  {content.map(
                    ({ header, icon, text, link, linkText }, index) => (
                      <div
                        className="text-start my-10 flex flex-col gap-4"
                        key={index}
                      >
                        <div className="flex items-center">
                          <div className="text-primary dark:text-darkprimary p-4 pl-0 ">
                            {icon}
                          </div>
                          <h2 className="font-rowdies font-light text-xl">
                            {header}
                          </h2>
                        </div>
                        <p>{text}</p>
                        {link && linkText && (
                          <Link href={link}>
                            <Button>{linkText}</Button>
                          </Link>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )
        )}
      </Card>
    </div>
  );
};

export default SectionSystem;
