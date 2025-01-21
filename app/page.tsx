import { getCitiesData } from "@/actions";
import GoogleMap from "@/components/GoogleMap";
import HeroSection from "@/components/HeroSection";
import HowAppWorks from "@/components/HowAppWorks";
import { Suspense } from "react";

export default async function Home() {
  const cities = await getCitiesData();

  return (
    <>
      <Suspense fallback={<></>}>
        <HeroSection cities={cities} />
      </Suspense>
      <HowAppWorks />
      <GoogleMap />
    </>
  );
}
