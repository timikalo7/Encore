import React from "react";
import Sectionsystem from "@/components/front-pages/section-system";
import { WHY_US } from "@/constants/front-page-info";

const page = () => {
  return (
    <div>
      <Sectionsystem
        data={WHY_US}
        buttonNames={[
          "Reuse vs recycling",
          "Social benefit",
          "Environmental benefit",
          "Data destruction",
          "Waste compliance",
        ]}
        buttonIds={[
          "reuse-vs-recycling",
          "social-benefit",
          "environmental-benefit",
          "data-destruction",
          "waste-compliance",
        ]}
        title="WHY US"
        classNames="h-[25rem]"
      />
    </div>
  );
};

export default page;
