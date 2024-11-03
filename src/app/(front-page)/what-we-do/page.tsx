import React from "react";
import Sectionsystem from "@/components/front-pages/section-system";
import { WHAT_WE_DO } from "@/constants/front-page-info";

const page = () => {
  return (
    <div>
      <Sectionsystem
        data={WHAT_WE_DO}
        buttonNames={["Why computers", "Our process", "Apply for computers"]}
        buttonIds={["why-computers", "our-process", "apply-for-computers"]}
        title="WHAT WE DO"
        classNames="h-[15rem]"
      />
    </div>
  );
};

export default page;
