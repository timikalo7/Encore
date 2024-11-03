import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { currentUser } from "@/lib/auth";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileSheetProps {}

const MobileSheet = async ({}: MobileSheetProps) => {
  const user = await currentUser();
  return (
    <Sheet>
      <div className="w-full h-full overflow-y-auto">
        <SheetTrigger asChild>
          <Button className="hover:opacity-75" variant="outline">
            Pages{" "}
          </Button>
        </SheetTrigger>
        <SheetContent className="h-full w-full overflow-y-auto pt-20">
          <SheetHeader>
            <SheetTitle>Pages</SheetTitle>
            <SheetDescription>access all pages</SheetDescription>
          </SheetHeader>
          
            <ul className="space-y-2 gap-3 flex flex-col items-center justify-center py-6 px-10">
              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  className={buttonVariants({
                    className: "hover:opacity-75   ",
                    variant: "sheet",
                  })}
                  href="/who-we-are"
                >
                  Who we are
                </Link>
              </SheetClose>

              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  href="/what-we-do"
                  className={buttonVariants({
                    className: "hover:opacity-75",
                    variant: "sheet",
                  })}
                >
                  What we do
                </Link>
              </SheetClose>

              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  href="/why-us"
                  className={buttonVariants({
                    className: "hover:opacity-75",
                    variant: "sheet",
                  })}
                >
                  Why us
                </Link>
              </SheetClose>

              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  href="/who-we-help"
                  className={buttonVariants({
                    className: "hover:opacity-75",
                    variant: "sheet",
                  })}
                >
                  Who we help
                </Link>
              </SheetClose>

              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  href="/get-involved"
                  className={buttonVariants({
                    className: "hover:opacity-75",
                    variant: "sheet",
                  })}
                >
                  Get Involved
                </Link>
              </SheetClose>

              <SheetClose className="w-full h-[4rem]" asChild>
                <Link
                  href="/contact"
                  className={buttonVariants({
                    className: "hover:opacity-75",
                    variant: "sheet",
                  })}
                >
                  Contact
                </Link>
              </SheetClose>

              {user ? (
                <div className="space-y-2 gap-3 flex flex-col items-center justify-center w-full">
                  <SheetClose className="w-full h-[4rem]" asChild>
                    <Link
                      href="/dashboard"
                      className={buttonVariants({
                        className: "hover:opacity-75",
                        variant: "sheet",
                      })}
                    >
                      Dashboard
                    </Link>
                  </SheetClose>

                  <SheetClose className="w-full h-[4rem]" asChild>
                    <Link
                      href="/settings"
                      className={buttonVariants({
                        className: "hover:opacity-75",
                        variant: "sheet",
                      })}
                    >
                      Settings
                    </Link>
                  </SheetClose>
                </div>
              ) : (
                <SheetClose className="w-full h-[4rem]" asChild>
                  <Link
                    href="/auth/login"
                    className={buttonVariants({
                      className: "hover:opacity-75",
                      variant: "sheet",
                    })}
                  >
                    Login
                  </Link>
                </SheetClose>
              )}
            </ul>
          </SheetContent>
      </div>
    </Sheet>
  );
};

export default MobileSheet;
