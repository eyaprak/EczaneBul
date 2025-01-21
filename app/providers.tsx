"use client";
import { getRelatedLocations } from "@/actions";
import { AppDataType, LocationType, SelectedDataType } from "@/types";
import { createContext, ReactNode, useState } from "react";

type AppDataProviderType = {
  children: ReactNode;
};

export const AppDataContext = createContext<AppDataType | undefined>(undefined);

export default function AppDataProvider({ children }: AppDataProviderType) {
  const [locations, setLocations] = useState<LocationType[]>([]);

  const setRelatedLocations = async ({
    selectedCity,
    selectedDistrict,
  }: SelectedDataType) => {
    const data = await getRelatedLocations({ selectedCity, selectedDistrict });
    setLocations(data);
  };

  return (
    <AppDataContext.Provider
      value={{
        locations,
        setRelatedLocations,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}
