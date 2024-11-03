import React from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const Map = dynamic(() => import("@/components/map/map"), {
  ssr: false,
});
import { PopupProvider } from "@/app/(protected)/dashboard/map-context";
import MapCardList from "@/app/(protected)/dashboard/map-card-list";
import { currentUser } from "@/lib/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddMarker from "@/app/(protected)/dashboard/add-marker";
import CreateAccount from "@/app/(protected)/dashboard/create-account";
import TableData from "./donations/table-data";
import AddDonation from "./add-donation";

const page = async () => {
  const user = await currentUser();
  if (user?.role !== "ADMIN") {
    return (
      <PopupProvider>
        <Card className="mx-6 my-2 h-[60%] p-4 sm:p-10">
          <h1 className="text-2xl tracking-[2px] text-black dark:text-white mb-5">
            Dashboard
          </h1>
          <Separator />
          <div className="flex flex-col lg:flex-row mt-10 min-h-[25rem] sm:min-h-[45rem]">
            <Map />
            <div className="lg:w-[30%] flex justify-center">
              <MapCardList />
            </div>
          </div>
          <div className="mt-10">
            <TableData />
          </div>
        </Card>
      </PopupProvider>
    );
  } else if (user?.role === "ADMIN") {
    return (
      <PopupProvider>
        <Card className="mx-6 my-2 p-4 sm:p-10">
          <h1 className="text-2xl tracking-[2px] text-black dark:text-white mb-5">
            Dashboard
          </h1>
          <Separator />
          <Tabs defaultValue="map" className=" z-10 mt-4">
            <TabsList className="xs:w-full w-[230px] mx-auto justify-center items-center xs:flex-row flex flex-col h-full">
              <TabsTrigger
                className="xs:w-[50%] w-[200px] hover:opacity-75 text-lg xs:text-sm  hover:bg-gray-200"
                value="map"
              >
                Map
              </TabsTrigger>
              <TabsTrigger
                className="xs:w-[50%] w-[200px] hover:opacity-75 text-[10px] text-lg xs:text-sm  hover:bg-gray-200"
                value="add marker"
              >
                Add Marker
              </TabsTrigger>
              <TabsTrigger
                className="xs:w-[50%] w-[200px] hover:opacity-75 text-[10px] text-lg xs:text-sm  hover:bg-gray-200"
                value="create account"
              >
                Create Account
              </TabsTrigger>
              <TabsTrigger
                className="xs:w-[50%] w-[200px] hover:opacity-75 text-[10px] text-lg xs:text-sm  hover:bg-gray-200"
                value="add donation"
              >
                Add Donation
              </TabsTrigger>
            </TabsList>
            <TabsContent value="map">
              <div className="flex flex-col lg:flex-row mt-10 min-h-[25rem] sm:min-h-[45rem]">
                <Map />
                <div className="lg:w-[30%] lg:block flex justify-center">
                  <MapCardList />
                </div>
              </div>
              <div className="mt-10">
                <TableData />
              </div>
            </TabsContent>
            <TabsContent value="add marker">
              <AddMarker />
            </TabsContent>
            <TabsContent value="create account">
              <CreateAccount />
            </TabsContent>
            <TabsContent value="add donation">
              <AddDonation />
            </TabsContent>
          </Tabs>
        </Card>
      </PopupProvider>
    );
  }
};

export default page;
