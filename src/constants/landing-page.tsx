import { HandCoins, Wrench, Recycle } from "lucide-react";

export const TEAM_MEMBERS = [
  {
    name: "Founder Name",
    description: "Founder, Trustee, IT Manager ",
    image: null,
  },
  {
    name: "Trustee Name",
    description: "Trustee, Software Engineer ",
    image: null,
  },
  {
    name: "Trustee Name",
    description: "Trustee, Accountant",
    image: null,
  },
  {
    name: "Volunteers",
    description: "Passionate People",
    image: null,
  },
] as const;

export const HOW_IT_WORKS_CARDS = [
  {
    title: "You Donate",
    description:
      "End of life IT equipment is donated by members of the public and through partnerships.",
    link: "http://www.reusingit.org/what-we-do/collect-and-receive/",
    linkText: "Find Out More",
    icon: HandCoins,
  },
  {
    title: "We Refurbish",
    description:
      "We sort, inspect and classify all donated material and separate it for repair, recycling, and reuse.",
    link: "http://www.reusingit.org/what-we-do/apply-for-computers/",
    linkText: "Find Out More",
    icon: Wrench,
  },
  {
    title: "They Reuse",
    description: "Our end product is high quality computers for reuse.",
    link: "http://www.reusingit.org/who-we-help/reuse-v-recycling/",
    linkText: "Find Out More",
    icon: Recycle,
  },
] as const;

export const IMAGES = [
  {
    image: "/Logo-University-of-Aberdeen.png",
    link: "https://www.abdn.ac.uk/",
  },
  {
    image: "/Logo-University-of-StAndrews.png",
    link: "https://www.st-andrews.ac.uk/",
  },
  {
    image: "/Logo-ScottishBordersCouncil.png",
    link: "https://www.scotborders.gov.uk/",
  },
] as const;


