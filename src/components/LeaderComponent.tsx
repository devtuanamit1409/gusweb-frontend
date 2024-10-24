"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IconFabLeft from "./Icons/IconFabLeft";
import IconFabRight from "./Icons/IconFabRight";

const LeaderComponent: React.FC<any> = ({ meet }) => {
  console.log(meet);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideClick = (index: number) => {
    const currentRealIndex = swiperRef.current?.realIndex;

    if (index === currentRealIndex) {
      return;
    }

    setActiveIndex(index);

    if (index < currentRealIndex) {
      swiperRef.current?.slidePrev();
    }

    if (index > currentRealIndex) {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 w-[418px] h-[498px] hidden laptop:block transform rotate-[8deg]">
        <Image
          src="/images/Frameb.png"
          alt=""
          width={418}
          height={498}
          className="object-cover"
        />
      </div>
      <div className="custom-container px-4 max-w-[1116px]  mt-[80px]">
        <h2 className="font-bold text-center font-bricolage line-clamp-2 laptop:text-[56px] laptop:leading-[67.2px]  tablet:leading-[50.4px] tablet:text-[42px] mobile:leading-[38.4px] mobile:text-[32px] mobile:line-clamp-3">
          {meet.title}
          <p className="text-sky-500">{meet.name}</p>
        </h2>
      </div>
      <div className="overflow-hidden mt-[80px]">
        <div className="mx-auto max-w-[1116px] px-4 laptop:px-0 flex flex-col tablet:flex-row gap-6 pb-[80px] laptop:pb-0">
          <Swiper
            spaceBetween={24}
            className="rounded-md laptop:rounded-none laptop:!overflow-visible !mx-0 tablet:!max-w-[451px] laptop:!max-w-[356px] !pb-0 laptop:!pb-[80px] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),_0_8px_16px_-8px_rgba(0,0,0,0.3)] laptop:shadow-none"
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {meet.members &&
              meet.members.map((item: any, index: number) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => handleSlideClick(index)}
                    className={`!h-[481px] tablet:!h-[621px] !flex items-end justify-center ${
                      activeIndex === index
                        ? "!w-full tablet:!w-[451px]"
                        : "!w-full tablet:!w-[451px] laptop:!w-[356px]"
                    } transition-all duration-300 ease-in-out`}
                  >
                    {({ isActive }) => (
                      <div
                        className={`${
                          isActive
                            ? "w-full h-full shadow-none laptop:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),_0_8px_16px_-8px_rgba(0,0,0,0.3)] gap-6 px-[1.5rem] py-[2rem] tablet:py-[4rem]"
                            : "w-[451px] h-[621px] laptop:w-[356px] laptop:h-[318px] shadow-[15px_50px_50px_rgba(198,217,225,0.3)] gap-4 py-4 px-[1rem]"
                        } transition-all duration-300 ease-in-out flex flex-col items-center rounded-md`}
                      >
                        <div
                          className={`${
                            activeIndex === index
                              ? "w-[260px] h-[260px] "
                              : "w-[166px] h-[166px] "
                          } min-h-[166px]`}
                        >
                          <div
                            className={`${
                              activeIndex === index
                                ? "card-top-image"
                                : "card-top-image-no-active"
                            } w-full h-full relative`}
                          >
                            <Image
                              src={item.url}
                              alt={item.alt}
                              width={260}
                              height={260}
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div
                          className={`${
                            activeIndex === index ? "gap-2" : "gap-0"
                          } flex flex-col items-center`}
                        >
                          <span
                            className={` ${
                              activeIndex === index
                                ? "text-base leading-6 "
                                : "text-[12px] leading-[16.8px] "
                            } text-[#363636]`}
                          >
                            {item.sex}
                          </span>
                          <p
                            className={`${
                              activeIndex === index
                                ? "font-bold text-[32px] leading-[38.4px]"
                                : "font-semibold text-[20px] leading-6"
                            } font-bricolage  text-[#1C1C1C]`}
                          >
                            {item.name}
                          </p>
                          <p
                            className={` ${
                              activeIndex === index
                                ? "text-base leading-6 "
                                : "text-[12px] leading-[16.8px] mt-2"
                            } text-[#363636]`}
                          >
                            {item.position}
                          </p>
                          <p
                            className={` ${
                              activeIndex === index
                                ? "text-base leading-6 "
                                : "text-[12px] leading-[16.8px] "
                            } text-[#363636]`}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="flex flex-col justify-between w-full h-full tablet:h-[500px] laptop:h-[300px] relative ml:0 laptop:ml-[96px] ">
            <p className=" text-[#1C1C1C] leading-6 ">
              {meet.members[activeIndex]?.description}
            </p>
            <div className="flex flex-row items-center gap-4 absolute bottom-[-48px] tablet:bottom-8 left-1/2 tablet:left-0 transform -translate-x-1/2 tablet:translate-x-0 z-10">
              <div
                className={` ${
                  activeIndex === 0
                    ? "opacity-40 hover:opacity-[0.4] cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                } hover:opacity-[0.95]`}
                onClick={() => {
                  if (activeIndex !== 0) {
                    swiperRef.current.slidePrev(500);
                  }
                }}
              >
                <IconFabLeft />
              </div>
              <div
                className={` ${
                  activeIndex === meet.members.length - 1
                    ? "opacity-40 hover:opacity-[0.4] cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                } hover:opacity-[0.95]`}
                onClick={() => {
                  if (activeIndex !== meet.members.length - 1) {
                    swiperRef.current.slideNext(500);
                  }
                }}
              >
                <IconFabRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderComponent;
