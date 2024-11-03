import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/front-pages/navbar";
import CounterInfo from "@/components/front-pages/counter-info";
import InfoCard from "@/components/front-pages/info-card";
import ServiceCard from "@/components/front-pages/service-card";
import { Rowdies } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { User } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/constants/landing-page";
import Footer from "@/components/front-pages/footer";

const rowdies = Rowdies({ weight: ["300", "400", "700"], subsets: ["latin"] });

const page = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/Oval.svg"
        alt="placeholder"
        width={70}
        height={70}
        className="absolute top-[9rem]"
      />
      <Image
        src="/assets/Rectangle.svg"
        alt="placeholder"
        width={300}
        height={300}
        className="absolute right-0 z-0 top-[20rem] dark:hidden"
      />
      <Image
        src="/assets/darkRectangle.svg"
        alt="placeholder"
        width={300}
        height={300}
        className="absolute right-0 z-0 top-[20rem] hidden dark:block"
      />
      <div className="bg-secondary dark:bg-darksecondary p-6">
        <Navbar />
        <header className="flex flex-col lg:gap-0 gap-20 lg:flex-row justify-center md:justify-between p-14 items-center pb-[11rem] mt-20 ">
          <div className="flex flex-col items-center md:items-start gap-10">
            <h1
              className={cn(
                "text-[48px] sm:text-[68px] leading-[80px] sm:tracking-[-3px]  max-w-[363px] text-white z-20 md:text-start text-center",
                rowdies.className
              )}
            >
              Empowering through Technology
            </h1>
            <p className="font-md text-white max-w-[370px] z-20 md:text-start text-center">
              Encore provides high quality, professionally refurbished
              computers for reuse by families on low income, and by overseas
              organisations working in education, health, and agriculture.
            </p>
            <Link className="z-20" href="/contact">
              <Button
                className={cn("tracking-[0.2px] p-6", rowdies.className)}
                variant="donation"
              >
                MAKE A DONATION
              </Button>
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/assets/pic.svg"
              alt="placeholder"
              width={700}
              height={700}
              className="absolute right-4 mx-auto z-0 dark:hidden"
            />
            <Image
              src="/assets/darkpic.svg"
              alt="placeholder"
              width={700}
              height={700}
              className="absolute right-4 mx-auto z-0 hidden dark:block"
            />
            <Image
              src="/images/placeholder.png"
              alt="placeholder"
              width={500}
              height={500}
              className="z-[3] relative"
            />
          </div>
        </header>
      </div>
      <div className="relative">
        <div className="rounded-lg flex lg:flex-row flex-col drop-shadow-lg max-w-[280px] sm:max-w-sm lg:max-w-[844px] left-0 right-0 mx-auto shadow-black absolute top-[-7rem]">
          <div className="flex lg:flex-row flex-col gap-20 p-10 bg-white dark:bg-neutral-900 lg:rounded-tr-none rounded-t-lg lg:rounded-l-lg">
            <CounterInfo label="Computers Donated" number="XX+" />
            <CounterInfo label="Families Helped" number="XX+" />
            <CounterInfo label="Volunteers" number="XXX+" />
          </div>

          <div className="bg-secondary dark:bg-darksecondary lg:text-start text-center lg:items-center items-center lg:rounded-bl-none rounded-b-lg lg:rounded-r-lg p-10 flex flex-col gap-4">
            <div className="w-[4rem] h-[2px] bg-black" />
            <h2
              className={cn(
                "font-light text-xl text-white max-w-[150px]",
                rowdies.className
              )}
            >
              Transforming Lives with Technology
            </h2>
            <div className="flex">
              <p
                className={cn(
                  "text-white text-sm font-light",
                  rowdies.className
                )}
              >
                <Link
                  className="hover:opacity-75"
                  href={"/contact"}
                >
                  Become a volunteer
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="mb-20 mt-36 flex flex-col gap-10 justify-center items-center">
          <h2
            className={cn(
              "text-[16px] text-center text-primary dark:text-darkprimary font-light leading-[32px] tracking-[3px]",
              rowdies.className
            )}
          >
            OUR SERVICES
          </h2>
          <p
            className={cn(
              " text-center font-light tracking-[0.2px] text-[24px] sm:text-[30px] md:text-[40px] leading-[48px] max-w-[300px] lg:max-w-[770px] mx-auto lg:mt-0 mt-[30rem]",
              rowdies.className
            )}
          >
            Join us in making a difference by supporting our mission to provide
            technology to those who need it most.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 items-center justify-center gap-10 max-w-6xl mx-auto relative mb-40">
          <InfoCard
            title="Refurbishing Computers"
            description="We professionally refurbish computers, monitors, and laptops donated by organisations and individuals."
            iconlink="/icons/charity.svg"
            width={60}
            height={60}
          />
          <InfoCard
            title="Supporting Education"
            description="Our refurbished devices support educational initiatives worldwide."
            iconlink="/icons/solidarity.svg"
            width={60}
            height={60}
          />
          <Image
            src="/assets/linedot.svg"
            alt="linedot"
            width={170}
            height={170}
            className="absolute top-28 -left-8 -z-10 dark:hidden xl:block hidden"
          />
          <Image
            src="/assets/darklinedot.svg"
            alt="linedot"
            width={170}
            height={170}
            className="absolute top-28 -left-8 -z-10 hidden dark:hidden dark:xl:block"
          />
          <InfoCard
            title="Community Outreach"
            description="We work with local communities to distribute refurbished devices to those in need."
            iconlink="/icons/love.svg"
            width={60}
            height={60}
          />
          <InfoCard
            title="Environmental Impact"
            description="By reusing and recycling technology, we help reduce e-waste and promote sustainability."
            iconlink="/icons/charity (1).svg"
            width={40}
            height={40}
          />
        </div>
      </section>
      <section className="bg-secondary dark:bg-darksecondary pt-40 2xl:text-start text-center ">
        <div className="2xl:flex-row flex flex-col-reverse gap-32 justify-center 2xl:justify-around items-center relative sm:mb-[20rem] mb-[10rem]">
          <div className="relative 2xl:mx-0 mx-auto w-[320px] sm:w-[350px] md:w-[670px] sm:mb-32 mb-0 sm:mt-40 mt-20 2xl:my-0">
            <Image
              src="/images/placeholder2.png"
              alt=""
              width={2500}
              height={2500}
              className="absolute -top-40  z-10 h-[220px] w-[200px] sm:h-[300px] sm:w-[250px] md:w-[370px] md:h-[420px]  right-0 mx-auto left-0"
            />
            <Image
              src="/assets/pic2.svg"
              alt=""
              width={700}
              height={700}
              className="absolute -top-60 w-[280px] h-[430px] sm:h-[500px] sm:w-[500px] md:w-[570px] md:h-[620px]  left-0 right-0 mx-auto dark:hidden"
            />
            <Image
              src="/assets/darkpic2.svg"
              alt=""
              width={700}
              height={700}
              className="absolute -top-60 w-[280px] h-[430px] sm:h-[500px] sm:w-[500px]  md:w-[570px] md:h-[620px]  left-0 right-0 mx-auto  hidden dark:block"
            />
          </div>

          <div>
            <h2
              className={cn(
                "text-primary dark:text-darkprimary font-light text-[16px] leading-[32px] tracking-[3px]",
                rowdies.className
              )}
            >
              ABOUT US
            </h2>
            <h3
              className={cn(
                "text-white font-light text-[56px] leading-[64px] tracking-[-2px] max-w-[460px] 2xl:max-w-[314px]",
                rowdies.className
              )}
            >
              Making Technology Accessible
            </h3>
            <p
              className={cn(
                "text-white font-light text-[20px] leading-[32px]  max-w-[470px]"
              )}
            >
              At our workshop, we data-wipe, test, and
              professionally refurbish computers for those in need.
            </p>
          </div>
        </div>
        <div className="2xl:flex-row flex gap-32 2xl:gap-0 flex-col justify-around items-center relative pb-[20rem]">
          <div>
            <h2
              className={cn(
                "text-primary dark:text-darkprimary font-light text-[16px] leading-[32px] tracking-[3px]",
                rowdies.className
              )}
            >
              VOLUNTEER
            </h2>
            <h3
              className={cn(
                "text-white font-light text-[56px] leading-[64px] tracking-[-2px] max-w-[414px]",
                rowdies.className
              )}
            > 
              Join Our Efforts
            </h3>
            <p
              className={cn(
                "text-white font-light text-[20px] leading-[32px]  max-w-[470px]"
              )}
            >
              By volunteering with us, you can help bridge the digital divide
              and provide crucial technology to those in need.
            </p>
          </div>
          <div className="relative 2xl:mx-0 mx-auto w-[300px] md:w-[670px] mt-32 sm:mb-40 mb-2 2xl:my-60">
            <Image
              src="/images/placeholder3.png"
              alt=""
              width={2500}
              height={2500}
              className="absolute -top-36  z-10 w-[240px] h-[270px] sm:h-[300px] sm:w-[250px] md:w-[370px] md:h-[420px] 2xl:right-48 2xl:left-40 left-0 right-0 mx-auto"
            />
            <Image
              src="/assets/pic3.svg"
              alt=""
              width={700}
              height={700}
              className="absolute -top-60 w-[400px] h-[420px] sm:h-[500px] sm:w-[500px] md:w-[570px] md:h-[620px] dark:hidden left-0 right-0 mx-auto"
            />
            <Image
              src="/assets/darkpic3.svg"
              alt=""
              width={700}
              height={700}
              className="absolute -top-60 w-[400px] h-[420px] sm:h-[500px] sm:w-[500px] md:w-[570px] md:h-[620px] hidden dark:block left-0 right-0 mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="md:p-40 xs:p-20 p-10">
        <div className="mb-[4rem] xl:text-start text-center">
          <h2
            className={cn(
              "text-primary dark:text-darkprimary font-light text-[16px] leading-[32px] tracking-[3px]",
              rowdies.className
            )}
          >
            OUR SERVICES
          </h2>
          <h3
            className={cn(
              "text-black dark:text-white font-light text-[56px] leading-[64px] tracking-[-2px]",
              rowdies.className
            )}
          >
            Services We Provide
          </h3>
        </div>
        <div className="flex xl:flex-row flex-col items-center gap-10 justify-center">
          <ServiceCard
            title="Refurbishing"
            description="We refurbish computers and laptops to be reused by families and organizations."
            iconlink="/icons/charity3.svg"
            link="/what-we-do?section=our-process"
          />
          <ServiceCard
            title="Education"
            description="Our devices support educational programs worldwide."
            iconlink="/icons/fruit.svg"
            link="/who-we-are?section=our-mission"
          />
          <ServiceCard
            title="Community Support"
            description="We work closely with community groups to ensure the technology reaches those in need."
            iconlink="/icons/water-tap.svg"
            link="/who-we-are?section=our-partners"
          />
        </div>
      </section>
      <section className="bg-secondary dark:bg-darksecondary pt-16 pb-40 2xl:text-start text-center">
        <div className="container mx-auto px-4 py-8">
          <h2
            className={cn(
              "text-primary dark:text-darkprimary font-light text-[16px] leading-[32px] tracking-[3px]",
              rowdies.className
            )}
          >
            Our People
          </h2>
          <h3
            className={cn(
              " text-white font-light text-[56px] leading-[64px] tracking-[-2px] mb-10",
              rowdies.className
            )}
          >
            Meet the team
          </h3>
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:max-w-none lg:gap-4 max-w-md md:max-w-2xl mx-auto gap-10  lg:grid-cols-4 ",
              rowdies.className
            )}
          >
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={index} className="p-0 rounded-3xl border-none">
                <CardHeader className="p-0">
                  {member?.image ? (
                    <Image
                      src={member?.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full mx-auto "
                    />
                  ) : (
                    <div className="h-[250px] bg-gray-400 rounded-t-3xl flex justify-center items-center">
                      <User className="text-white h-32 w-32" />
                    </div>
                  )}

                  <CardTitle className="text-primary dark:text-darkprimary px-4 pt-2 text-2xl font-light tracking-[2px]">
                  {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className=" p-4">
                  <CardDescription className="text-gray-700 dark:text-gray-300 pb-4">
                    {member.description}
                  </CardDescription>
                  <Link href={"who-we-are?section=our-people"}>
                    <Button className="">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary dark:bg-darkprimary flex md:flex-row flex-col md:gap-0 gap-20 justify-around items-center py-32 relative">
        <div>
          <h2
            className={cn(
              "text-[42px] lg:text-[56px] font-light text-white leading-[64px] tracking-[-2px] z-10 relative",
              rowdies.className
            )}
          >
            Join our mission
          </h2>
          <Image
            src="/assets/CombinedShape.svg"
            width={400}
            height={400}
            alt="backgroundlines"
            className="absolute z-0 top-[50px] left-[30rem] hidden 2xl:block"
          />
          <Image
            src="/assets/CombinedShape2.svg"
            width={50}
            height={50}
            alt="backgroundlines"
            className="absolute z-0 top-0 left-0 2xl:hidden block"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-10 items-center">
          <Link href="/get-involved?section=volunteer">
            <Button variant="heart" className="flex py-6 px-8 gap-4">
              <span
                className={cn(
                  "text-primary dark:text-darkprimary text-[14px]",
                  rowdies.className
                )}
              >
                BECOME VOLUNTEER
              </span>
              <Image
                src="/icons/Vector.svg"
                width={20}
                height={20}
                alt="heart"
              />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="heart" className="flex py-6 px-8 gap-4">
              <span
                className={cn(
                  "text-primary dark:text-darkprimary text-[14px]",
                  rowdies.className
                )}
              >
                DONATE NOW{" "}
              </span>
              <Image
                src="/icons/Vector.svg"
                width={20}
                height={20}
                alt="heart"
              />
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-secondary dark:bg-darksecondary xl:text-start text-center">
        <div className="flex xl:flex-row flex-col justify-around gap-10 xl:gap-0 items-center py-[7rem] relative">
          <div className="flex flex-col gap-10">
            <h2
              className={cn(
                "text-primary dark:text-darkprimary font-light text-[16px] leading-[32px] tracking-[3px]",
                rowdies.className
              )}
            >
              CHARITY
            </h2>
            <h3
              className={cn(
                "text-white font-light text-[56px] leading-[64px] tracking-[-2px] max-w-[414px]",
                rowdies.className
              )}
            >
              Encore
            </h3>
            <p
              className={cn(
                "text-white font-light text-[20px] leading-[32px]  max-w-[470px]"
              )}
            >
              We are dedicated to providing technology to those who need it
              most, ensuring everyone has the tools to succeed.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/placeholder5.svg"
              alt=""
              width={600}
              height={600}
              className="z-10 relative dark:hidden"
            />
            <Image
              src="/images/placeholder4.svg"
              alt=""
              width={600}
              height={600}
              className="z-10 relative hidden dark:block"
            />
          </div>

          <Image
            src="/assets/Rectangle3.svg"
            alt=""
            width={500}
            height={500}
            className="absolute xl:bottom-auto bottom-0 right-0 z-0 dark:hidden"
          />
          <Image
            src="/assets/darkRectangle3.svg"
            alt=""
            width={500}
            height={500}
            className="absolute xl:bottom-auto bottom-0  right-0 z-0 hidden dark:block"
          />

          <div className="absolute left-0 top-0">
            <Image
              src="/assets/Rectangle2.svg"
              alt=""
              width={400}
              height={400}
              className="relative dark:hidden"
            />
            <Image
              src="/assets/darkRectangle2.svg"
              alt=""
              width={400}
              height={400}
              className="relative hidden dark:block"
            />
            <Image
              src="/assets/Oval2.svg"
              alt=""
              width={130}
              height={130}
              className="absolute left-36 z-0 top-0 dark:hidden"
            />
            <Image
              src="/assets/darkOval2.svg"
              alt=""
              width={130}
              height={130}
              className="absolute left-36 z-0 top-0 hidden dark:block"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
