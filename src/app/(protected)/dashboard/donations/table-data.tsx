"use client";
import React from "react";
import { columns } from "./columns";
import { TableDonations } from "./table-donations";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { fetchDonations } from "@/actions/fetch-donations";
import { usePopup } from "../map-context";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

const TableData = () => {
  const { marker, setMarker } = usePopup();

  const { data, isPending } = useQuery({
    queryKey: ["fetchDonations"],
    queryFn: () => fetchDonations(),
  });

  useEffect(() => {
  }, [marker]);
    
  return (
      <div>
          {data && marker?.id && (
              <TableDonations
                  columns={columns}
                  data={data.filter((donation) => donation.orgId === marker.id).map((donation) => ({
                    ...donation,
                    receivingOrgName: "", // Replace "" with the actual value for receivingOrgName
                  }))}
              />
          )}
      </div>
  );
};

export default TableData;
