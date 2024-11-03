import React from "react";
import Sectionsystem from "@/components/front-pages/section-system";
import { WHO_WE_HELP } from "@/constants/front-page-info";

const page = () => {
  return (
    <div>
      <Sectionsystem
        data={WHO_WE_HELP}
        buttonNames={["Our stories"]}
        buttonIds={["our-stories"]}
        title="WHO WE HELP"
        classNames="h-[5rem]"
      />
    </div>
  );
};

export default page;
