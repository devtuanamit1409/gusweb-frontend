import React from "react";
import Image from "next/image";
import Slide from "@/components/SlideComponent";
import { getTranslations } from "next-intl/server";

const PartnerList: React.FC<any> = async ({ customer }) => {
  const t = await getTranslations();
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
      <div className="absolute w-full max-w-[1000px] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-opacity-70 p-4 rounded-lg mt-10">
        <span className="tablet:text-[24px] mobile:text-[18px] relative text-preamble">  {t("homePage.customer")}</span>
        <p className="mobile:text-[32px] tablet:text-[56px] font-bricolage font-bold ">{customer.title}</p>
        <span>{customer.description}</span>
      </div>
      
      <div className="absolute bottom-20 left-0 right-0">
        <Slide brands={customer.images} />
      </div>
    </div>
  );
};
export default PartnerList;
