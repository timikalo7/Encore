import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LogoutButton from "@/components/auth/logout-button";
import ChangePassword from "@/components/auth/change-password";

const page = () => {

    

  return (
    <Card className="mx-6 my-2 h-[70vh] p-5 sm:p-10">
      <h1 className="text-2xl tracking-[2px] text-black dark:text-white mb-5">
        Settings
      </h1>
          <Separator />
          <ChangePassword />
          <LogoutButton>Sign Out</LogoutButton>
    </Card>
  );
};

export default page;
