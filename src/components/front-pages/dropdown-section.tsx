import DropdownMenu from "./dropdown-menu";
import ContactButton from "./contact-button";

interface dropdownsectionProps {

}

const dropdownsection = ({}: dropdownsectionProps) => {
    return (
      <div className="flex-wrap hidden md:flex justify-center items-center gap-1 xl:gap-1 2xl:gap-9 text-sm md:text-base lg:text-lg">
        <DropdownMenu
          label="Who we are"
          url="/who-we-are"
          items={["Our Mission", "Our People", "Our Partners"]}
          links={[
            "/who-we-are?section=our-mission",
            "/who-we-are?section=our-people",
            "/who-we-are?section=our-partners",
          ]}
        />
        <DropdownMenu
          label="What we do"
          url="/what-we-do"
          items={["Why Computers", "Our Process", "Apply for Computers"]}
          links={[
            "/what-we-do?section=why-computers",
            "/what-we-do?section=our-process",
            "/what-we-do?section=apply-for-computers",
          ]}
        />
        <DropdownMenu
          label="Why us"
          url="/why-us"
          items={[
            "Reuse vs Recycle",
            "Social benefits",
            "Environmental benefits",
            "Data destruction",
            "Waste compliance",
          ]}
          links={[
            "/why-us?section=reuse-vs-recycling",
            "/why-us?section=social-benefit",
            "/why-us?section=environmental-benefit",
            "/why-us?section=data-destruction",
            "/why-us?section=waste-compliance",
          ]}
        />
        <DropdownMenu
          label="Who we help"
          url="/who-we-help"
          items={["Our Stories"]}
          links={["/who-we-help?section=our-stories"]}
        />
        <DropdownMenu
          label="Get Involved"
          url="/get-involved"
          items={[
            "Donate IT equipment",
            "Volunteer",
            "Partner with us",
            "Donate cash",
            "Request a Speaker",
            "Blog",
          ]}
          links={[
            "/get-involved?section=donate-it-equipment",
            "/get-involved?section=volunteer",
            "/get-involved?section=partner-with-us",
            "/get-involved?section=donate-cash",
            "/get-involved?section=request-a-speaker",
            "/get-involved?section=blog",
          ]}
        />
        <ContactButton />
      </div>
    );
}

export default dropdownsection