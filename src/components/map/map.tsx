"use client";

import React, { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./customLeaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { usePopup } from "@/app/(protected)/dashboard/map-context";
import { useQuery } from "@tanstack/react-query";
import { fetchMarkers } from "@/actions/fetch-markers";
import { Skeleton } from "@/components/ui/skeleton";

const SetMaxBounds = () => {
  const map = useMap();
  useEffect(() => {
    map.setMaxBounds([
      [85, -180],
      [-85, 180],
    ]);
  }, [map]);
  return null;
};

const Map = () => {
  const { marker, setMarker } = usePopup();
  const [isLoading, setIsLoading] = useState(true);

  const { data, isPending } = useQuery({
    queryKey: ["fetchMarkers"],
    queryFn: () => fetchMarkers(),
  });

  useEffect(() => {
    if (!isPending) {
      setIsLoading(false);
    }
  }, [isPending]);

  const greenIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const createCustomClusterIcon = (cluster: any) => {
    return divIcon({
      html: `<div class="text-black bg-white text-2xl font-extrabold border rounded-full text-center border-black w-[33px] h-[33px]">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  if (isLoading) {
    return <Skeleton className="h-[25rem] sm:h-[45rem] w-full" />;
  }

  return (
    <div className="w-full h-[25rem] sm:h-[45rem] pb-[2rem]">
      <Suspense
        fallback={<Skeleton className="h-[25rem] sm:h-[45rem] w-full" />}
      >
        <MapContainer
          className="h-full w-full rounded-lg z-0"
          center={[data?.[0]?.lat ?? 0, data?.[0]?.lng ?? 0]}
          zoom={13}
          scrollWheelZoom={true}
          minZoom={3}
          maxZoom={18}
        >
          <SetMaxBounds />
          <TileLayer
            className="block dark:hidden"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <TileLayer
            className="hidden dark:block"
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {data &&
              data.map((marker, index) => (
                <Marker
                  key={index}
                  icon={greenIcon}
                  position={[marker.lat ?? 0, marker.lng ?? 0]}
                  eventHandlers={{
                    click: () => setMarker(marker),
                  }}
                />
              ))}
          </MarkerClusterGroup>
        </MapContainer>
      </Suspense>
    </div>
  );
};

export default Map;