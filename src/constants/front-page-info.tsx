import {
  School,
  Briefcase,
  Leaf,
  Handshake,
  Users,
  UserPlus,
  Gift,
  ThumbsUp,
  CircleDollarSign,
  Heart,
  BookOpen,
  Mic,
  Monitor,
  Globe,
  Target,
  TrendingUp,
  HandCoins,
  Accessibility,
  HeartPulse,
  Lightbulb,
  MessageCircle,
  Recycle,
  ArrowUpRight,
  House,
  CircleArrowDown,
  Trash2,
  Shield,
  Trash,
  Gavel,
  FileText,
  Search,
  CircleCheck,
  User,
  History,
  ChartColumnBig,
  Award,
  Mail,
  UserCheck,
  Package,
  Hammer,
  Repeat,
  Truck,
  LifeBuoy,
  Info,
  StepForward,
} from "lucide-react";
import React from "react";

export const COMPONENTS: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Who we are",
    href: "/who-we-are",
    description: "Our Mission, Our People, Our Partners",
  },
  {
    title: "What we do",
    href: "/what-we-do",
    description: "Why Computers, Our Process, Apply for Computers",
  },
  {
    title: "Why us",
    href: "/why-us",
    description:
      "Reuse vs Recycle, Social benefits, Environmental benefits, Data destruction, Waste compliance",
  },
  {
    title: "Who we help",
    href: "/who-we-help",
    description: "Our Stories",
  },
  {
    title: "Get Involved",
    href: "/get-involved",
    description:
      "Donate IT equipment, Volunteer, Partner with us, Donate cash, Request a Speaker, Blog",
  },
] as const;

export const GET_INVOLVED = [
  {
    id: "donate-it-equipment",
    title: "Donate IT equipment",
    content: [
      {
        header: "Donating IT Equipment",
        icon: <HandCoins className="w-8 h-8" />,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non, repellat vitae accusantium omnis, nulla minus dolorum eum dolore aspernatur nisi eveniet! Voluptas et quas praesentium ullam quaerat placeat unde.",
      },
      {
        header: "How to Donate",
        icon: <CircleDollarSign className="w-8 h-8" />,
        text: "If you have IT equipment you would like to donate, please get in touch.",
        link: "/contact",
        linkText: "Get in touch",
      },
      {
        header: "What Happens Next",
        icon: <StepForward className="w-8 h-8" />,
        text: "Once we receive your donation, we will assess the equipment to see if it can be refurbished. If it can, we will refurbish it and send it to someone in need. If it can't be refurbished, we will recycle it responsibly.",
      },
    ],
  },
  {
    id: "volunteer",
    title: "Volunteer",
    content: [
      {
        header: "Volunteer Support",
        icon: <Users className="w-8 h-8" />,
        text: "We rely on and receive fantastic support from our small but dedicated team of volunteers, whose technical knowledge helps us.",
      },
      {
        header: "How to Get Involved",
        icon: <UserPlus className="w-8 h-8" />,
        text: "Do you want to help? Do you have a passion for, and an understanding of what we are about. We are sure you'll fit in. Visit us on our contact form",
      },
      {
        header: "Perks of Volunteering",
        icon: <Gift className="w-8 h-8" />,
        text: "Perks of the job? Helping people around the world have access to technology plus free bacon rolls every Saturday! Please get in touch.",
        link: "/contact",
        linkText: "Get in touch",
      },
    ],
  },
  {
    id: "partner-with-us",
    title: "Partner with us",
    content: [
      {
        header: "Partner with Us",
        icon: <Handshake className="w-8 h-8" />,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non, repellat vitae accusantium omnis, nulla minus dolorum eum dolore aspernatur nisi eveniet! Voluptas et quas praesentium ullam quaerat placeat unde.",
      },
    ],
  },
  {
    id: "donate-cash",
    title: "Donate cash",
    content: [
      {
        header: "Thank You for Your Interest",
        icon: <ThumbsUp className="w-8 h-8" />,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non, repellat vitae accusantium omnis, nulla minus dolorum eum dolore aspernatur nisi eveniet! Voluptas et quas praesentium ullam quaerat placeat unde.",
      },
      {
        header: "Our Costs",
        icon: <CircleDollarSign className="w-8 h-8" />,
        text: "To give you an example of some of our costs, £30 gets a computer from the UK to Africa. We typically send 150 at a time.",
      },
      {
        header: "Contribute to Our Mission",
        icon: <Heart className="w-8 h-8" />,
        text: "If you are interested in contributing towards what we are doing, we'd love to hear from you.",
        link: "/contact",
        linkText: "Get in touch",
      },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    content: [
      {
        header: "Our Blog",
        icon: "blog.svg",
        text: "We have a blog where we share our latest news and updates. Check it out to see what we've been up to!",
      },
    ],
  },
];

export const WHAT_WE_DO = [
  {
    id: "why-computers",
    title: "Why computers",
    content: [
      {
        header: "The Ubiquity of Computers",
        icon: <Monitor className="w-8 h-8" />,
        text: "Who doesn't use a computer these days? You are looking at this on a computer right now!",
      },
      {
        header: "Googling and Everyday Language",
        icon: <Search className="w-8 h-8" />,
        text: "Googling something has become a part of everyday language and everyday activity.",
      },
      {
        header: "Email Communication",
        icon: <Mail className="w-8 h-8" />,
        text: "As a simple tool, email has transformed the way we all communicate.",
      },
      {
        header: "Right to Information",
        icon: <Globe className="w-8 h-8" />,
        text: "We believe that access to information like this is a basic human right, not a privilege.",
      },
      {
        header: "No Status or Wealth Required",
        icon: <UserCheck className="w-8 h-8" />,
        text: "No status or wealth should be required.",
      },
      {
        header: "Empowering Through Computers",
        icon: <Briefcase className="w-8 h-8" />,
        text: "Computers are a common tool which enable charitable organisations to run more efficiently, greater educational opportunities to be delivered, and new skills to be learned; and as such they should be available to all.",
      },
      {
        header: "Our Simple Mission",
        icon: <Target className="w-8 h-8" />,
        text: "It's simple. We take something that somebody doesn't want any more. We fix it up. And then we give it to someone who really needs it.",
      },
    ],
  },
  {
    id: "our-process",
    title: "Our process",
    content: [
      {
        header: "Collect and Receive",
        icon: <Package className="w-8 h-8" />,
        text: "End of life IT equipment is donated by members of the public and through partnerships with schools, universities and other organisations.",
      },
      {
        header: "Refurbishment",
        icon: <Hammer className="w-8 h-8" />,
        text: "At our base we sort, inspect and classify all donated material and separate it for repair, recycling and reuse. We eradicate data asset-tracking it for data destruction auditing purposes i.e. we prove to our clients that their data has been destroyed. We repair, re-test and clean.",
      },
      {
        header: "Reusing It",
        icon: <Repeat className="w-8 h-8" />,
        text: "Our end product is high quality computers for reuse.",
      },
      {
        header: "Pick / Pack / Ship / Install / Train",
        icon: <Truck className="w-8 h-8" />,
        text: "The next stages which mean that these refurbished computers end up where they are needed most.",
      },
      {
        header: "New Lease of Life",
        icon: <LifeBuoy className="w-8 h-8" />,
        text: "But that's by no means the end of the story. These computers now have a new lease of life and are ready to deliver social benefit…",
      },
      {
        header: "Find Out More",
        icon: <Info className="w-8 h-8" />,
        text: "To find out more get in touch.",
        link: "contact",
        linkText: "Get in touch",
      },
    ],
  },
  {
    id: "apply-for-computers",
    title: "Apply for computers",
    content: [
      {
        header: "Improving Efficiency",
        icon: <TrendingUp className="w-8 h-8" />,
        text: "If you are a charity in seeking to improve your efficiency through computers, or if you are an individual or group needing computers for educational purposes, then please get in touch. We'll do our best to help.",
        link: "/contact",
        linkText: "Get in touch",
      },
    ],
  },
];

export const WHO_WE_ARE = [
  {
    id: "our-mission",
    title: "Our mission",
    content: [
      {
        header: "Advancing Education and Welfare",
        icon: <School className="w-8 h-8" />,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat non, repellat vitae accusantium omnis, nulla minus dolorum eum dolore aspernatur nisi eveniet! Voluptas et quas praesentium ullam quaerat placeat unde.",
      },
      {
        header: "Providing Sustainable Benefits",
        icon: <Briefcase className="w-8 h-8" />,
        text: "To provide sustainable educational, social, and economic benefits to low-income families and impoverished communities through the provision of computers and related equipment and thereby to assist in combating the digital divide.",
      },
      {
        header: "Protecting and Enhancing the Environment",
        icon: <Leaf className="w-8 h-8" />,
        text: "To protect and enhance the environment by ensuring appropriate recycling of computers and related equipment which can no longer be refurbished.",
      },
      {
        header: "Supporting Charities and Voluntary Organizations",
        icon: <Handshake className="w-8 h-8" />,
        text: "To provide computer and IT services of all kinds to charities and voluntary organizations so as to assist them in their effectiveness and efficiency.",
      },
    ],
  },
  {
    id: "our-people",
    title: "Our people",
    content: [
      {
        header: "Our Trustees",
        icon: <Users className="w-8 h-8" />,
        text: "",
      },
      {
        header: "Team member 1",
        icon: <User className="w-8 h-8" />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati ut dolor aliquam vitae modi eligendi expedita debitis illum alias odit, corporis veniam perspiciatis iure assumenda consequatur itaque, aperiam delectus.",
      },
      {
        header: "Team member 1",
        icon: <User className="w-8 h-8" />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati ut dolor aliquam vitae modi eligendi expedita debitis illum alias odit, corporis veniam perspiciatis iure assumenda consequatur itaque, aperiam delectus.",
      },
      {
        header: "Team member 1",
        icon: <User className="w-8 h-8" />,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati ut dolor aliquam vitae modi eligendi expedita debitis illum alias odit, corporis veniam perspiciatis iure assumenda consequatur itaque, aperiam delectus.",
      },
      {
        header: "Our Volunteers",
        icon: <Users className="w-8 h-8" />,
        text: "Typically people with a passion for computers who get a buzz from the overall aims of Reusing IT. Our volunteers have hands-on roles in the refurbishment, logistics and testing elements of our processes, and get directly involved with the end-user projects locally and in Africa.",
      },
      {
        header: "Our Origins",
        icon: <History className="w-8 h-8" />,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio corporis dolorum reiciendis. Quisquam, necessitatibus amet! Saepe quaerat maxime odio? Ea culpa reprehenderit quam nulla reiciendis eum assumenda sunt, libero consectetur!",
      },
      {
        header: "Our Impact",
        icon: <ChartColumnBig className="w-8 h-8" />,
        text: "Since then, a small group of core volunteers have reprocessed and supplied over XXXX PCs to more than 10 countries across the world. All of the PCs transported there have been donated by individuals or organisations upgrading their equipment, and thus have been diverted from the waste stream.",
      },
    ],
  },
];

export const WHO_WE_HELP = [
  {
    id: "our-stories",
    title: "Our Stories",
    content: [
      {
        header: "Empowering Deaf Children",
        icon: <Accessibility className="w-8 h-8" />,
        text: "“IT skills are the one area where the deaf children can be on an equal footing when it comes to job searching and the opportunities to provide skills training in their own communities. Already four children have completed basic training on the computers received last time round and they are now all in full-time employment or further education.” - Kuja School, Kenya",
      },
      {
        header: "AIDS Project in Tanzania",
        icon: <HeartPulse className="w-8 h-8" />,
        text: "A community-based AIDS project in Tanzania talked of using their IT equipment to print leaflets on how to avoid HIV, which are then distributed with condoms; “This function alone saved days of handwriting and the projects concerned stated that the people given a printed leaflet as opposed to a handwritten one were giving it much more importance. They were actually starting to read and take seriously the information on it! The power of the presentation!” - The director of WAMATA community AIDS project Bukoba said of the computer they received, quite simply, “The magic box will help save lives.”",
      },
      {
        header: "Impact of GLOW",
        icon: <Lightbulb className="w-8 h-8" />,
        text: "“We are very concerned about the number of children who are unable to access a computer at home as GLOW has become such a huge part of school/home link and children and teachers now communicate quite regularly through GLOW and to do this they require a computer and an internet link. All homework is now posted on GLOW and pupils also access games etc., which reinforce and consolidate learning which goes on in school. Pupils from an early age now complete personal assignments as homework tasks and there is an expectation that these will be done using a computer and that research will be done using the internet.” - Jan Lumsden, HeadTeacher of Carmondean Primary School",
      },
    ],
  },
];

export const WHY_US = [
  {
    id: "reuse-vs-recycling",
    title: "Reuse vs recycling",
    content: [
      {
        header: "Reuse vs Recycling",
        icon: <Recycle className="w-8 h-8" />,
        text: "Being salvaged for spares should only happen when computers are beyond economical repair. Our passion is reuse; keeping computers whole and fit for purpose and taking the simple steps to make sure they can be passed on from one person to another.",
      },
    ],
  },
  {
    id: "social-benefit",
    title: "Social benefit",
    content: [
      {
        header: "Global Impact",
        icon: <Globe className="w-8 h-8" />,
        text: "Computers which we repair go to people who really need them all over the world. Since today, Encore has provided over X,XXX PCs where they are most needed.",
      },
      {
        header: "Educational and Training Support",
        icon: <BookOpen className="w-8 h-8" />,
        text: "Our computers have been used for educating primary and secondary schoolchildren, training medical, nursing, and pharmacy students, and providing vital equipment for school in developing countries.",
      },
      {
        header: "Meeting High Demand",
        icon: <ArrowUpRight className="w-8 h-8" />,
        text: "We might typically receive requests for 100 computers to be distributed, from high schools we the pertake an IT audit with any potential partner to ensure that they will be able to make the best use of what we supply.",
      }
    ],
  },
  {
    id: "environmental-benefit",
    title: "Environmental benefit",
    content: [
      {
        header: "Environmental Responsibility",
        icon: <Leaf className="w-8 h-8" />,
        text: "We believe that everyone should be trying their best to reduce, reuse, repair, and recycle. Taking computers out of the waste stream and restoring them for use or safely disposing of them if they are beyond use means that we offer an environmentally friendly method of dealing with unwanted IT equipment. These are resources, not waste.",
      },
      {
        header: "Reducing Landfill Dependence",
        icon: <CircleArrowDown className="w-8 h-8" />,
        text: "Our actions, and those of anyone who donates a computer to us, reduce dependence on landfill, help to cut CO2 emissions, and help to meet Scotland's climate change targets.",
      },
      {
        header: "Commitment to Zero Waste",
        icon: <Trash2 className="w-8 h-8" />,
        text: "This is all as part of our commitment to Zero Waste.",
      },
    ],
  },
  {
    id: "data-destruction",
    title: "Data destruction",
    content: [
      {
        header: "Data Security",
        icon: <Shield className="w-8 h-8" />,
        text: "We reduce the risks you have when disposing of computer equipment which may still have data stored. All donated equipment is wiped using 'Ontrack Eraser data wiping', guaranteeing the unrecoverable removal of 100% of data. Thus, companies donating PCs are compliant with the Data Protection Act.",
      },
      {
        header: "Physical Destruction",
        icon: <Trash className="w-8 h-8" />,
        text: "Any hard drives which fail this process are physically destroyed.",
      },
    ],
  },
];
