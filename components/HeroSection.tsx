import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/hero-section.png";
import SearchForm from "./SearchForm";
import { CitiesType } from "@/types";

export default function HeroSection({ cities }: CitiesType) {
  return (
    <div className="container py-20 flex flex-col gap-10 justify-between items-center md:flex-row">
      <div className="flex-1">
        <h1 className="text-slate-900 text-3xl tracking-tight leading-[45px] font-primary font-semibold subpixel-antialiased text-center md:text-4xl md:leading-[55px] md:text-left">
          Uygulamamız ile nöbetçi eczane konumlarını{" "}
          <span className="relative whitespace-nowrap ml-2 text-3xl md:text-4xl">
            <span className="absolute bg-primary -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
            <span className="relative text-white">hemen bul.</span>
          </span>
        </h1>

        <SearchForm cities={cities} />
      </div>
      <div className="flex-1 justify-end hidden md:flex">
        <Image src={HeroImage} width={500} alt="Eczane Bul" />
      </div>
    </div>
  );
}
