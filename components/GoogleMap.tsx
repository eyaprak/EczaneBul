"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdLocalHospital } from "react-icons/md";
import { LocationType } from "@/types";
import { useAppData } from "@/hooks";

const DEFAULT_LOCATION = {
  lat: 39.853888482515124,
  lng: 35.55869610363011,
};

export default function GoogleMapComp() {
  const { locations } = useAppData();
  const mapRef = useRef<google.maps.Map>(null);
  const [selectedMarker, setSelectedMarker] = useState<LocationType | null>(
    null
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  });

  useEffect(() => {
    if (isLoaded && locations.length > 0) {
      const mapInstance = mapRef.current;
      const bounds = new google.maps.LatLngBounds();
      locations.forEach((location) => {
        bounds.extend(
          new window.google.maps.LatLng(location.latitude, location.longitude)
        );
      });

      if (mapInstance) {
        mapInstance.fitBounds(bounds);
        google.maps.event.addListenerOnce(mapInstance, "bounds_changed", () => {
          const desiredZoom = 14;
          if (mapInstance.getZoom()! > desiredZoom) {
            mapInstance.setZoom(desiredZoom);
          }
        });
      }
    }
  }, [locations, isLoaded]);

  return (
    <div className="container py-10 text-center">
      <h1 className="title">Nöbetçi Eczaneler</h1>
      <p className="subtitle">
        Bu harita üzerinde arama yaptığınız il/ilçe seçimine göre nöbetçi
        eczaneleri görebilirsiniz
      </p>
      <div className="w-full">
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName="border border-primary"
            mapContainerStyle={{
              width: "100%",
              height: 500,
              marginTop: 20,
            }}
            onLoad={(map) => {
              mapRef.current = map;
            }}
            onClick={() => setSelectedMarker(null)}
            options={{
              streetViewControl: false,
            }}
            zoom={6}
            center={DEFAULT_LOCATION}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.latitude, lng: location.longitude }}
                onClick={() => setSelectedMarker(location)}
              />
            ))}
            {selectedMarker && (
              <InfoWindow
                options={{
                  minWidth: 300,
                  headerDisabled: true,
                }}
                position={{
                  lat: selectedMarker.latitude,
                  lng: selectedMarker.longitude,
                }}
                onCloseClick={() => setSelectedMarker(null)}
                onUnmount={() => setSelectedMarker(null)}
              >
                <div className="flex flex-col gap-1 font-primary">
                  <IoIosCloseCircleOutline
                    size={20}
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setSelectedMarker(null)}
                  />
                  <span className="font-bold flex items-center justify-center text-base">
                    <MdLocalHospital size={20} color="red" />
                    {selectedMarker.pharmacyName}
                  </span>
                  <span className="max-w-xs text-xs">
                    {selectedMarker.address}
                  </span>
                  <a
                    href={`https://www.google.com/maps/dir//${selectedMarker.latitude},${selectedMarker.longitude}/@${selectedMarker.latitude},${selectedMarker.longitude},17z`}
                    className="text-blue-500 text-xs font-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yol Tarifi Al
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
