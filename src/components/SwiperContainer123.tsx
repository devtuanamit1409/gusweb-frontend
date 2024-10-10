import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import QuotationButton from "@/components/QuotationButton";

export default function SwiperContainer123({
  projects,
  onSlideChangeIndex,
}: any) {
  return (
    <div className="absolute bottom-[30px] right-0 left-[40%]">
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        loop={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
        onSlideChange={(swiper) => onSlideChangeIndex(swiper.realIndex)}
        slideToClickedSlide={true}
      >
        {projects &&
          projects.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center ml-20 ">
                  <div className="w-[400px] h-[258px] relative">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="absolute bottom-[-100px] left-[125px]">
        <QuotationButton />
      </div>
    </div>
  );
}
