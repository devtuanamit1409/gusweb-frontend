"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import { bodyDesktopModel } from "@/models/bodyDesktopModel";
import { useTranslations } from "next-intl";

export default function AboutUs({ whoUs }: any) {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-center max-w-[1140px] mx-auto text-left laptop:flex-row flex-col mb-6">
      <div className="flex-1 p-4">
        <Image src={whoUs.url} alt={whoUs.alt} width={546} height={546} />
      </div>
      <div className="flex-1 p-4">
        <span className="text-2xl relative text-preamble">
          <span className="normal-case">{t("homePage.whoWeb")}</span>
        </span>

        <h3 className="font-semibold tablet:font-bold tablet:text-[56px] font-bricolage laptop:leading-[67.2px] text-[32px] leading-[38.4px] mt-2">
          {whoUs.title}
        </h3>
        <p className="mt-4">{whoUs.description}</p>
      </div>
    </div>
  );
}
