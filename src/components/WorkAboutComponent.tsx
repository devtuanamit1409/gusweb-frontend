"use client";

import ResponsibilityComponent from "@/app/about-us/components/ResponsibilityComponent";
import React from "react";

const WorkAboutComponent: React.FC<any> = ({ work }) => {
  return (
    <div className="py-20 px-[162px] gap-10 justify-center items-center flex flex-col">
      <div
        className="w-[736px] h-[236px] flex flex-col gap-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="h-[172px] gap-2 items-center flex flex-col">
          <p className="font-normal text-[24px] line-clamp-1 leading-[29px] text-[#1C1C1C] relative text-preamble uppercase text-center">
            NGUYÊN TẮC LÀM VIỆC GUSWEB
          </p>
          <p className="title-custom font-bricolage line-clamp-2">
            {work.title}
          </p>
        </div>
        <p className="lable-custom">{work.description}</p>
      </div>
      <div className="h-[472px] justify-center items-center flex">
        <div className="w-[1116px] flex flex-col gap-6">
          <ResponsibilityComponent data={work.items} />
        </div>
      </div>
    </div>
  );
};

export default WorkAboutComponent;
