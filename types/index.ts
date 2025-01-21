export type AppDataType = {
  locations: LocationType[];
  setRelatedLocations: ({
    selectedCity,
    selectedDistrict,
  }: SelectedDataType) => void;
};

export type CityType = {
  cities: string;
  slug: string;
};

export type DistrictType = {
  cities: string;
  slug: string;
};

export type CitiesType = {
  cities: CityType[];
};

export type LocationType = {
  pharmacyID: number;
  pharmacyName: string;
  address: string;
  city: string;
  district: string;
  town: string;
  directions: string;
  phone: string;
  phone2: string;
  pharmacyDutyStart: string;
  pharmacyDutyEnd: string;
  latitude: number;
  longitude: number;
};

export type GetDataParamsType = {
  city?: string;
};

export type SelectedDataType = {
  selectedCity: string;
  selectedDistrict: string;
};
