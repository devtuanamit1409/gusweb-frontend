"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { IconArrowTronButtonPhai } from "@/components/Icons/IconArrowTronButtonPhai";
import { IconArrowTronButtonTrai } from "@/components/Icons/IconArrowTronButtonTrai";
import { Grid, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

const TeamComponent: React.FC<any> = ({ team }) => {
  const t = useTranslations();
  const swiperRef = useRef<any>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="max-w-[1140px] w-full mx-auto  mobile:py-10 tablet:py-20  px-4 laptop:py-20 flex justify-center">
        <div className=" flex flex-col items-center laptop:items-start gap-10 relative w-full ">
          <div className="flex flex-col gap-4 max-w-[1021px]">
            <div className="flex flex-col gap-2 laptop:items-start   items-center">
              <p className=" text-[24px] leading-[38.4px] text-preamble font-normal  line-clamp-1  text-[#1C1C1C] relative text-preamble uppercase text-center ">
                {t("servicePage.culture")}{" "}
                <span className="text-[#1FA9EC]">{team.name}</span>
              </p>
              <p className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] font-bold font-bricolage text-center mobile:text-[32px] mobile:leading-[38.4px] line-clamp-2">
                {team.title}
              </p>
            </div>
            <p className="label-custom laptop:text-start tablet:text-center ">
              {team.description}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[540px] max-w-[1140px] w-full mx-auto px-4 mb-[80px] relative">
        <div
          className="rounded-full cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block absolute top-1/2 left-4 transform -translate-y-1/2"
          onClick={handlePrevClick}
        >
          <IconArrowTronButtonTrai />
        </div>
        {team.items && (
          <Swiper
            ref={swiperRef}
            modules={[Grid]}
            spaceBetween={16}
            grid={{
              rows: 2,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              744: {
                slidesPerView: 2,
              },
              360: {
                slidesPerView: 1,
              },
            }}
            className="h-full w-[328px] tablet:w-[540px] laptop:w-full"
          >
            {team.items.map((src: any, index: any) => (
              <SwiperSlide key={index}>
                {src.url && (
                  <Image
                    src={src.url}
                    alt={src.alt || "Team image"}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full tablet:w-auto object-center bg-slate-300"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div
          className="rounded-full  cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={handleNextClick}
        >
          <IconArrowTronButtonPhai />
        </div>
      </div>
    </>
  );
};

export default TeamComponent;
