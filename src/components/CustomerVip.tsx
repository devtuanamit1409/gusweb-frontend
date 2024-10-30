import Image from "next/image";
import React from "react";
import SlideComponent from "@/components/SlideComponent";
import { getTranslations } from "next-intl/server";

const CustomerVip: React.FC<any> = async ({ customerVips }) => {
  const t = await getTranslations();

  return (

    <div
      className="w-full flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/Rectangle 175.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="custom-container laptop:py-20 w-[1116px] px-4 py-10 gap-4 flex flex-col laptop:gap-6">
        <h1 className="font-bricolage font-bold text-[56px] leading-[67.2px] text-[#1C1C1C] px-4 py-2 flex justify-center">
          <p>{t("servicePage.customer")}</p>
        </h1>
        <div className=" ">
          <SlideComponent brands={customerVips} />
        </div>
      </div>
    </div>
  );
};

export default CustomerVip;
