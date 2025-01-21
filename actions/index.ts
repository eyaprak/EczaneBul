"use server";

import { BASE_URL } from "@/constants";
import { GetDataParamsType, SelectedDataType } from "@/types";
import axios from "axios";

export const getCitiesData = async (params: GetDataParamsType = {}) => {
  try {
    const { data: res } = await axios.get(`${BASE_URL}/cities`, {
      params: {
        apiKey: process.env.NEXT_PUBLIC_NOSYAPI_KEY,
        ...params,
      },
    });

    return res.data;
  } catch (error) {
    console.log("Bir şeyler ters gitti", error);
  }
};

export const getRelatedLocations = async ({
  selectedCity,
  selectedDistrict,
}: SelectedDataType) => {
  try {
    const { data: res } = await axios.get(`${BASE_URL}`, {
      params: {
        apiKey: process.env.NEXT_PUBLIC_NOSYAPI_KEY,
        city: selectedCity,
        district: selectedDistrict,
      },
    });

    return res.data;
  } catch (error) {
    console.log("Bir şeyler ters gitti", error);
  }
};
