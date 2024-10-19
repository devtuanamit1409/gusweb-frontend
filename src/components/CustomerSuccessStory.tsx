"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button, Rate } from "antd";
import IconSlideNext from "./Icons/IconSlideNext";
import { useTranslations } from "next-intl";

export default function CustomerSuccessStory({ chats }: any) {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideClick = (index: number) => {
    const currentRealIndex = swiperRef.current?.realIndex;
    if (index === currentRealIndex) {
      return;
    }
    setActiveIndex(index);

    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative custom-container ">
      <div className="tablet:absolute tablet:top-0 tablet:left-0 tablet:right-0 tablet:bottom-0">
        <div className="px-4 h-full flex flex-row items-start relative max-w-[1116px] mx-auto">
          <div className="flex laptop:flex-col tablet:flex-col mobile:flex-col gap-4 w-full tablet:w-[40%]">
            <Image
              src="/images/Maskgroup.png"
              alt=""
              width="166"
              height="166"
            />
            <span className="font-semibold text-[42px] w-full tablet:w-96">
              {t("homePage.comment")}
            </span>
          </div>
          <div className="hidden tablet:w-[60%] relative"></div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="hidden tablet:block tablet:w-1/2 laptop:w-[45%]"></div>
        <div className="w-full tablet:w-1/2 laptop:w-[55%] overflow-hidden relative">
          <div
            className="block tablet:hidden w-[40px] h-[40px] absolute top-[40%] transform translate-y-[-1/2%] right-[12px] z-10 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-80"
            onClick={() => handleSlideClick(activeIndex + 1)}
          >
            <IconSlideNext />
          </div>
          <div className="h-[490px] rounded-[10px] w-[900px] ">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {chats &&
                chats.map((item: any, index: number) => {
                  const isActive = index === activeIndex;
                  return (
                    <SwiperSlide
                      key={index}
                      onClick={() => handleSlideClick(index)}
                    >
                      <div
                        className={`mx-3 my-6 bg-[#fefefe] ${isActive
                          ? "shadow-lg shadow-[rgba(58,123,213,0.4)]"
                          : "shadow-lg shadow-[rgba(198,217,225,.3)]"
                          } rounded-[10px] mobile:w-[450px] mobile:h-[360px] tablet:h-[372px] tablet:w-[366px] laptop:w-[451px] laptop:h-[420px]`}
                      >
                        <div className="text-black flex flex-col gap-[14px] h-[108px] laptop:h-[124px] p-4 bg-[#E5FCFF] rounded-tl-[10px] rounded-tr-[10px]">
                          <div className="relative flex flex-row px-5 h-full">
                            <div className="flex-grow">
                              <span className="mr-2 text-[20px]">
                                {item.name}
                              </span>
                              <p className="mr-2 text-[14px]">
                                {item.position}
                              </p>
                              <Rate
                                disabled
                                defaultValue={item.rating}
                                className="mt-2"
                              />
                            </div>
                            <Image
                              src={item.url}
                              alt={item.alt}
                              width={50}
                              height={50}
                              className="rounded-full w-auto max-w-[50px] h-[50px] object-cover ml-4 mt-2"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row text-black laptop:mt-5 gap-[5px] h-[264px] px-3 py-4 laptop:p-10 text-[16px]">
                          <span>{item.content}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
