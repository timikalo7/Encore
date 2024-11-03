"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

interface logoutbuttonProps {
  children: React.ReactNode;
}

const logoutbutton = ({ children }: logoutbuttonProps) => {
  const onClick = async () => {
    await logout();
  };

  return (
    <Button variant="outline" onClick={onClick} className="cursor-pointer m-5">
      {children}
    </Button>
  );
};

export default logoutbutton;
