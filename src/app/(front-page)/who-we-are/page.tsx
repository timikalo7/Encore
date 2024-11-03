import React from "react";
import Sectionsystem from "@/components/front-pages/section-system";
import { WHO_WE_ARE } from "@/constants/front-page-info";

const page = () => {
  return (
    <div>
      <Sectionsystem
        data={WHO_WE_ARE}
        buttonNames={["Our mission", "Our people", "Our partners"]}
        buttonIds={["our-mission", "our-people", "our-partners"]}
        title="WHO WE ARE"
        classNames="h-[15rem]"
      />
    </div>
  );
};

export default page;

