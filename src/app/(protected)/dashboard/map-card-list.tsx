"use client";

import MapCard from "@/components/map/map-card";
import { usePopup } from "./map-context";

const MapCardList = () => {
  const { marker, setMarker } = usePopup();

  return (
    <div>
      {marker && (
        <MapCard
          name={marker?.receivingOrgName}
          orgAddress={marker?.receivingOrgAddress}
          contactName={marker?.receivingOrgContactName}
          contactEmail={marker?.receivingOrgContactEmail}
          contactNumber={marker?.receivingOrgPhoneNumber}
        />
      )}
    </div>
  );
};

export default MapCardList;
