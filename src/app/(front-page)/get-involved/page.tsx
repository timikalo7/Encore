import Sectionsystem from "@/components/front-pages/section-system";
import { GET_INVOLVED } from "@/constants/front-page-info";

const page = () => {
  return (
    <div>
      <Sectionsystem
        data={GET_INVOLVED}
        buttonNames={[
          "Donate it equipment",
          "Volunteer",
          "Partner with us",
          "Donate cash",
          "Request a speaker",
        ]}
        buttonIds={[
          "donate-it-equipment",
          "volunteer",
          "partner-with-us",
          "donate-cash",
          "request-a-speaker",
        ]}
        title="GET INVOLVED"
        classNames="h-[25rem]"
      />
    </div>
  );
};

export default page;
