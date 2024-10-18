"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { infoModel } from "@/models/inforModel";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  data: any;
  styleTitle?: string;
  styleImage?: string;
}

const InfoComponent = (props: Props) => {
  const { data, styleTitle, styleImage } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="custom-container laptop:py-20  px-4   justify-center items-center flex  w-full">
      <div className="laptop:max-w-[1116px] laptop:flex-row laptop:justify-between  laptop:gap-[10px]  w-full  flex  flex-col items-center  ">
        <div
          className={`laptop:justify-between justify-center items-center flex ${styleImage} laptop:order-1 tablet:order-2 mobile:order-2 w-full`}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src={data?.url}
            width={500}
            height={500}
            alt={data?.alt}
            className={styleImage}
          />
        </div>

        <div
          className=" px-6 py-6 tablet:py-[80px] tablet:px-6 gap-6 flex flex-col laptop:order-2 tablet:order-1 mobile:order-1 w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2
            className={
              styleTitle
                ? styleTitle
                : "font-bold leading-[68px] text-[56px] bg-clip-text text-transparent bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] tablet:text-center mobile:text-center"
            }
          >
            {data?.title}
          </h2>
          <p className="font-normal text-[16px] leading-6 text-[#363636] line-clamp-5 tracking-[0.5px]">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
