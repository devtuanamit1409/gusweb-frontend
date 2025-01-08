"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { IconArrowTronButtonPhai } from "@/components/Icons/IconArrowTronButtonPhai";
import { IconArrowTronButtonTrai } from "@/components/Icons/IconArrowTronButtonTrai";

const Slide: React.FC<any> = ({ brands }) => {
  const swiperRef = useRef<any>(null);
  // console.log("brands123",brands)
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
    <div className=" w-full laptop:h-[68px] tablet:max-h-[49px] h-[60px] pt-[20px] mb-[20px] relative flex items-center justify-between ">
      <div
        className=" rounded-full cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block"
        onClick={handlePrevClick}
      >
        <IconArrowTronButtonTrai />
      </div>
      <Swiper
        slidesPerView="auto"
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          744: {
            slidesPerView: 4,
          },
          360: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        className="w-full h-[68px]"
      >
        {brands.map((img: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="laptop:w-[208px] laptop:h-[68px] tablet:w-[170px] !tablet:h-[49px] mobile:w-[124px] mobile:h-[40px] mx-auto px-[10px]">
              <Image
                src={img.url}
                width={100}
                height={64}
                alt={img.alt}
                className="object-contain top-[2px] left-[52px] !w-[199px] !h-[65px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="rounded-full  cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block"
        onClick={handleNextClick}
      >
        <IconArrowTronButtonPhai />
      </div>
    </div>
  );
};

export default Slide;
