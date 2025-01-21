import Image from "next/image";
import React from "react";
import SearchPharmacy from "@/public/images/search-pharmacy.png";
import PharmacyDirections from "@/public/images/pharmacy-directions.png";
import SelectPharmacy from "@/public/images/select-pharmacy.png";

const cardList = [
  {
    id: 1,
    title: "Eczane Aranması",
    description:
      "Form üzerinde listenen il ve ilçe seçimlerinden sonra ara butonuna basıldığında, seçilen filtreler için nöbetçi eczaneler harita üzerinde gösterilecektir.",
    imageSrc: SearchPharmacy,
    imageAlt: "Nöbetçi Eczanenin Aranması",
  },
  {
    id: 2,
    title: "Eczanenin Bulunması",
    description:
      "İl ve ilçe filtrelenmesi sonrası harita üzerinde nöbetçi eczanelerin konumu belirecektir. Listenilen konumlara tıklayarak detay bilgiye erişebileceksiniz.",
    imageSrc: SelectPharmacy,
    imageAlt: "Nöbetçi Eczanenin Bulunması",
  },
  {
    id: 3,
    title: "Eczane Yol Tarifiı",
    description:
      "Filtreleme sonrası harita üzerinde seçilen eczane için 'Yol Tarifi Al' linkine tıklanarak yol tarifi alma ve adrese gitme işlemini başlatabilirsiniz.",
    imageSrc: PharmacyDirections,
    imageAlt: "Eczane Yol Tarifi",
  },
];

export default function HowAppWorks() {
  return (
    <div className="container py-10" id="how-app-works">
      <h1 className="title">Nasıl Çalışır?</h1>
      <p className="subtitle">
        Uygulamamızın çalışması 3 aşamadan oluşmaktadır
      </p>
      <div className="grid grid-cols-1 gap-10 px-0 mt-4 md:grid-cols-3 mx-4">
        {cardList.map((data) => (
          <div className="card" key={data.id}>
            <Image
              src={data.imageSrc}
              quality={100}
              width={150}
              alt={data.imageAlt}
              className="mb-2"
            />
            <h4 className="font-primary text-primary text-base font-bold">
              {data.title}
            </h4>
            <p className="text-slate-500 text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
