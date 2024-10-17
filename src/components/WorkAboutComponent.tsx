"use client";

import ResponsibilityComponent from "@/app/[locale]/about-us/components/ResponsibilityComponent";
import React from "react";

const WorkAboutComponent: React.FC<any> = ({ work }) => {
  return (
    <div className="custom-container  w-full   laptop:py-20 laptop:px-[162px]  tablet:py-10 tablet:px-4   gap-10 justify-center items-center flex flex-col ">
      <div
        className="laptop:w-[736px] w-full flex flex-col gap-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className=" justify-center items-center flex flex-col gap-2">
          <h5 className="font-normal text-[24px] line-clamp-2 leading-[38.4px] text-[#1C1C1C] relative text-preamble uppercase text-center ">
            NGUYÊN TẮC LÀM VIỆC GUSWEB
          </h5>
          <h2 className="font-bold text-center font-bricolage line-clamp-2 laptop:text-[56px] laptop:leading-[67.2px]  tablet:leading-[50.4px] tablet:text-[42px] mobile:leading-[38.4px] mobile:text-[32px] mobile:line-clamp-3">
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
