import React from "react";
import Image from "next/image";
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
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[700px] bg-white bg-opacity-70 p-4 rounded-lg">
        <span className="tablet:text-[24px] mobile:text-[18px] min-w-[247px]">{customer.text1}</span>
        <p className="mobile:text-[32px] tablet:text-[56px] font-bricolage font-bold min-w-[328px]">{customer.title}</p>
        <span className="min-w-[328px]">{customer.description}</span>
      </div>
      <div className="absolute bottom-14 left-0 right-0">
        <Slide brands={customer.images} />
      </div>
    </div>
  );
};
export default PartnerList;
