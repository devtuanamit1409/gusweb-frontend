'use client';
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Slogan: React.FC<any> = ({ slogans }) => {
    useEffect(() => {
      AOS.init({ once: true });
      setTimeout(() => {}, 1000);
    }, []);
  return (
    <div className="custom-container laptop:py-[80px] tablet:py-[80px] tablet:px-4 flex flex-col laptop:gap-20 gap-10 items-center ">
      <div className="justify-center items-center flex max-w-[1116px]  laptop:flex-row flex-col mobile:gap-12">
        <div
          className=" px-4 tablet:px-0 flex justify-center flex-col gap-4  w-full  "
          data-aos="fade-right"
        >
          <h1 className="font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center ">
            {slogans[0].title}
          </h1>
          <p className=" font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[0].description}
          </p>
        </div>
        <div
          className="flex px-4 tablet:px-0  justify-center items-center w-full "
          data-aos="fade-left"
        >
          <Image
            src={slogans[0].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[0].alt}
            className="object-cover"
          />
        </div>
      </div>
      <div className="justify-center items-center flex  laptop:flex-row flex-col mobile:gap-12 max-w-[1116px]">
        <div
          className=" px-4 tablet:px-0 flex justify-center flex-col gap-4  w-full  laptop:order-2 "
          data-aos="fade-left"
        >
          <h1 className="font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center ">
            {slogans[1].title}
          </h1>
          <p className=" font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[1].description}
          </p>
        </div>
        <div
          className="flex px-4 tablet:px-0  justify-center items-center w-full "
          data-aos="fade-right"
        >
          <Image
            src={slogans[1].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[1].alt}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Slogan;
