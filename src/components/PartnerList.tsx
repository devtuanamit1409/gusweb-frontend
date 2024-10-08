import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import SwiperContainer123 from "@/components/SwiperContainer123";
import Slide from "@/components/SlideComponent";

const PartnerList: React.FC<any> = ({ customer }) => {
  return (
    <div className="relative w-full h-[559px]">
      <Image
        src="/images/Section.png"
        alt="Hình nền khách hàng của Gusweb"
        fill
        className="object-cover object-center"
        loading="lazy"
        decoding="async"
        sizes="(min-width: 0px) 100vw"
      />
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[700px] bg-white bg-opacity-70 p-4 rounded-lg">
        <span className="text-[24px]">KHÁCH HÀNG CỦA GUSWEB</span>
        <p className="text-[56px] font-bricolage font-bold">{customer.title}</p>
        <span>{customer.description}</span>
      </div>
      <div className="absolute bottom-14 left-0 right-0">
        <Slide brands={customer.images} />
      </div>
    </div>
  );
};
export default PartnerList;
