import { AppDataContext } from "@/app/providers";
import { AppDataType } from "@/types";
import { useContext } from "react";

export const useAppData = (): AppDataType => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within a AppDataProvider");
  }
  return context;
};
