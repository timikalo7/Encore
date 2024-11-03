"use client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { MapPin, User, Mail, Phone } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMarker } from "@/actions/delete-marker";
import { usePopup } from "@/app/(protected)/dashboard/map-context";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Session } from "next-auth";

interface MapCardProps {
  name: string;
  orgAddress: string;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
}

const MapCard = ({
  name,
  orgAddress,
  contactName,
  contactEmail,
  contactNumber,
}: MapCardProps) => {
  const { marker, setMarker } = usePopup();
  const queryClient = useQueryClient();
  const session = useCurrentUser();

  const {
    data: deleteData,
    mutate: server_deleteMarker,
    isPending: isDeletePending,
  } = useMutation({
    mutationKey: ["deleteMarker"],
    mutationFn: deleteMarker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchMarkers"] });
    },
    onError: () => {},
  });


  const onClick = (contactEmail: string) => {
    server_deleteMarker({ email: contactEmail });
    setMarker({
      id: "",
      primaryPartner: "",
      secondaryPartner: null,
      receivingOrgName: "",
      receivingOrgIdNumber: "",
      typeOfOrganization: "",
      receivingOrgAddress: "",
      receivingOrgContactName: "",
      receivingOrgContactEmail: "",
      receivingOrgPhoneNumber: "",
      lng: 0,
      lat: 0,
      userId: "",
      createdAt: new Date(),
    });
  };

  return (
    <Card className="shadow-lg rounded-lg lg:w-64 xs:w-[25rem] w-60 lg:m-3 lg:mt-0 mx-auto sm:max-w-lg xs:max-w-sm max-w-[230px] md:max-w-xl xl:w-80">
      <h1 className="mb-4 text-2xl font-semibold sm:px-10 pb-6 sm:pt-10 px-4 pt-4 break-words text-center">
        {name}
      </h1>
      <Separator className="w-full" />
      <ol className="flex flex-col text-start space-y-4 p-5 sm:p-10">
        <li className="flex items-center">
          <MapPin className="mr-2 min-w-6 w-6 text-primary dark:text-darkprimary" />
          <span className="">{orgAddress}</span>
        </li>
        <li className="flex items-center">
          <User className="mr-2 min-w-6 w-6 text-primary dark:text-darkprimary" />
          <span className="">{contactName}</span>
        </li>
        <li className="flex items-center">
          <Mail className="mr-2 min-w-6 w-6 text-primary dark:text-darkprimary" />
          <span className="">{contactEmail}</span>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2 min-w-6 w-6 text-primary dark:text-darkprimary" />
          <span className="">{contactNumber}</span>
        </li>

        {!session.isLoading && session?.user?.role === "ADMIN" ? (
          <Button
            className="hover:opacity-75 mb-10"
            variant="primary"
            onClick={() => {
              onClick(contactEmail);
            }}
          >
            Delete
          </Button>
        ) : null}
      </ol>
    </Card>
  );
};

export default MapCard;
