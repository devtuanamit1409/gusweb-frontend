"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import { bodyDesktopModel } from "@/models/bodyDesktopModel";
import { useTranslations } from "next-intl";

export default function AboutUs({ whoUs }: any) {
  const t = useTranslations(); // console.log(whoUs);
  return (
    <div className="flex items-center justify-center max-w-[1140px] mx-auto text-left laptop:flex-row flex-col ">
      <React.Fragment>
        <div className="flex-1 p-4">
          <Image src={whoUs.url} alt={whoUs.alt} width={546} height={546} />
        </div>
        <div className="flex-1 p-4">
          <span className="text-2xl relative text-preamble">
            <span className="normal-case">{t("homePage.whoWeb")}</span>
          </span>

          <h3 className=" font-bold text-[56px] font-bricolage">
            {whoUs.title}
          </h3>
          <p>{whoUs.description}</p>
        </div>
      </React.Fragment>
    </div>
  );
}
