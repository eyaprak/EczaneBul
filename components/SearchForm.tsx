"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CitiesType, DistrictType } from "@/types";
import { useAppData } from "@/hooks";
import { getCitiesData } from "@/actions";

export default function SearchForm({ cities }: CitiesType) {
  const { setRelatedLocations } = useAppData();
  const [districts, setDistritcs] = useState<DistrictType[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    const getDistricts = async () => {
      const data = await getCitiesData({ city: selectedCity });
      setDistritcs(data);
    };
    if (!!selectedCity) getDistricts();
  }, [selectedCity]);

  const onClickHandler = () => {
    const scrollHeight = document.body.scrollHeight;
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: scrollHeight,
    });
    setRelatedLocations({ selectedCity, selectedDistrict });
  };

  return (
    <div className="mt-10 border border-primary rounded-md p-4 md:mx-0 mx-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <select
          id="cities"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>İl Seçiniz...</option>
          {cities.map((city) => (
            <option value={city.slug} key={city.slug}>
              {city.cities}
            </option>
          ))}
        </select>
        <select
          id="districts"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option>İlçe Seçiniz...</option>
          {districts.map((district) => (
            <option value={district.slug} key={district.slug}>
              {district.cities}
            </option>
          ))}
        </select>
        <button
          className="bg-primary rounded-md px-4 py-2 text-white flex items-center gap-1 justify-center font-primary font-semibold"
          onClick={onClickHandler}
        >
          <span>Ara</span> <FaArrowRight color="#fff" size={16} />
        </button>
      </div>
    </div>
  );
}
