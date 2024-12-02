"use client";

import {
  principleDescriptionModel,
  principleModel,
} from "@/models/principleModel";
import Image from "next/image";
import React from "react";
import { Collapse } from "antd";
import { useTranslations } from "next-intl";

export default function WorkPrinciples({ work }: any) {
  const t = useTranslations();

  const collapseItems = work.items.map((itemDescription: any, idx: number) => ({
    key: idx.toString(),
    label: (
      <div className="flex justify-between items-center w-full">
        <span className="text-[20px] font-bold font-bricolage">
          {itemDescription.title}
        </span>
      </div>
    ),
    children: (
      <div className="mt-4 text-base font-inter">
        <p>{itemDescription.description}</p>
      </div>
    ),
  }));

  return (
    <div className="relative max-w-[1116px] mx-auto mt-20 p-4 tablet:h-[833px]">
      <div className="mt-0 tablet:mt-10">
        <Image
          src="/images/starrysky.png"
          alt="Header Banner"
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="max-w-[800px] ">
          <span className="relative text-preamble w-[300px] text-2xl">
            {t("homePage.workPrinciple")}
          </span>
          <span className="flex flex-col gap-3 mt-2">
            <p className="text-[32px] leading-[38px] tablet:leading-[60px] tablet:text-[56px] font-bold font-bricolage max-w-[650px] ">
              {work.title}
            </p>
            <p>{work.description}</p>
          </span>
          <div className="border-[1px] border-b-[#d9d9d9] border-t-transparent mt-10"></div>

          <Collapse
            defaultActiveKey={[""]}
            bordered={false}
            accordion
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <Image
                  src={"/svg/IconDauTru.svg"}
                  alt="tru"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              ) : (
                <Image
                  src={"/svg/Icons+.svg"}
                  alt="plus"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              )
            }
            className="bg-white font-bricolage"
            items={collapseItems}
          />

          <div className="border-[1px] border-b-[#d9d9d9] border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}
