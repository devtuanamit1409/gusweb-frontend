"use client";

import ResponsibilityComponent from "@/app/[locale]/about-us/components/ResponsibilityComponent";
import { useTranslations } from "next-intl";
import React from "react";

const WorkAboutComponent: React.FC<any> = ({ work }) => {
  const t = useTranslations();


  return (
    <div className="custom-container  laptop:py-20   tablet:py-10 px-4 ">
      <div className="  gap-10 justify-center items-center flex flex-col ">
        <div
          className="laptop:w-[736px] w-full flex flex-col gap-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className=" justify-center items-center flex flex-col gap-2">
            <h5 className="font-normal text-[24px] line-clamp-2 leading-[38.4px] text-[#1C1C1C] relative text-preamble uppercase text-center ">
            {t("homePage.workPrinciple")}
            </h5>
            <h2 className="font-bold text-center font-bricolage  laptop:text-[56px] laptop:leading-[67.2px]  tablet:leading-[50.4px] tablet:text-[42px] mobile:leading-[38.4px] mobile:text-[32px] mobile:line-clamp-3">
              {work.title}
            </h2>
          </div>
          <p className="lable-custom text-center ">
            {work.description}
          </p>
        </div>
        <div className="laptop:max-w-[1116px]">
          <ResponsibilityComponent data={work.items} />
        </div>
      </div>
    </div>
  );
};

export default WorkAboutComponent;
