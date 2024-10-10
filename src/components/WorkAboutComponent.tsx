"use client";

import ResponsibilityComponent from "@/app/[locale]/about-us/components/ResponsibilityComponent";
import React from "react";

const WorkAboutComponent: React.FC<any> = ({ work }) => {
  return (
    <div className="custom-container  w-full laptop:max-h-[916px]  laptop:py-20 laptop:px-[162px] tablet:max-h-[850px] tablet:py-10 tablet:px-4 mobile:max-h-[1121px]  gap-10 justify-center items-center flex flex-col ">
      <div
        className="laptop:w-[736px] laptop:min-h-[244px] tablet:w-[736px] tablet:max-h-[210px] mobile:w-[328px] mobile:max-h-[334px] flex flex-col gap-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="laptop:max-h-[180px] tablet:max-h-[146px] mobile:max-h-[198px] justify-center items-center flex flex-col gap-2">
          <h5 className="font-normal text-[24px] line-clamp-2 leading-[38.4px] text-[#1C1C1C] relative text-preamble uppercase text-center laptop:h-[38px]  tablet:h-[38px] mobile:h-[76px]">
            NGUYÊN TẮC LÀM VIỆC GUSWEB
          </h5>
          <h2 className="font-bold text-center font-bricolage line-clamp-2 laptop:text-[56px] laptop:leading-[67.2px] laptop:max-h-[134px] tablet:leading-[50.4px] tablet:text-[42px] tablet:max-h-[100px] mobile:max-h-[114px] mobile:leading-[38.4px] mobile:text-[32px] mobile:line-clamp-3">
            {work.title}
          </h2>
        </div>
        <p className="lable-custom line-clamp-2 text-center ">
          {work.description}
        </p>
      </div>
      <ResponsibilityComponent data={work.items} />
    </div>
  );
};

export default WorkAboutComponent;
