import { COMPONENTS } from "@/constants/front-page-info";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { currentUser } from "@/lib/auth";

interface navigationmenudropdownProps {}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none z-40 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const navigationmenudropdown = async ({}: navigationmenudropdownProps) => {
  const user = await currentUser();
  console.log(user);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" font-normal lg:text-[16px] text-sm">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-[40] max-w-[170px] xs:max-w-[300px] flex-wrap flex sm:max-w-none">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-[40]">
              {COMPONENTS.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
              <ListItem
                className="block md:hidden"
                title="Contact"
                href="/contact"
              >
                Get in touch with us
              </ListItem>
              {user ? (
                <>
                  <ListItem
                    className="block md:hidden"
                    title="Dashboard"
                    href="/dashboard"
                  >
                    Access your dashboard
                  </ListItem>
                  <ListItem
                    className="block md:hidden"
                    title="Settings"
                    href="/settings"
                  >
                    Manage your settings
                  </ListItem>
                </>
              ) : (
                <ListItem
                  className="block md:hidden"
                  title="Login"
                  href="/auth/login"
                >
                  Login to your account
                </ListItem>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default navigationmenudropdown;
