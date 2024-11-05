import React, { forwardRef, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import Image from "next/image";
import "swiper/css";

const SwiperContainer = forwardRef(({ projects, onSlideChangeIndex, pauseAutoplay }: any, ref) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      if (pauseAutoplay) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [pauseAutoplay]);

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      spaceBetween={100}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => onSlideChangeIndex(swiper.realIndex)}
      slideToClickedSlide={true}
      className="h-full"
    >
      {projects &&
        projects.map((item: any, index: number) => (
          <SwiperSlide key={index} className="!flex flex-col justify-center">
            {({ isActive }) => (
              <div
                className={`h-full ${isActive
                    ? "w-full min-w-[354px] tablet:max-w-full h-full min-h-[212px] max-h-[328px] tablet:w-[372px] laptop:w-[500px] tablet:max-h-[224px] laptop:max-h-[300px]"
                    : "w-full min-w-[354px] tablet:max-w-full h-full min-h-[212px] max-h-[328px] tablet:w-[250px] laptop:w-[300px] tablet:max-h-[150px] laptop:max-h-[180px]"
                  }  transition-all duration-300`}
              >
                <div className="w-full h-full tablet:pl-2 laptop:pl-4">
                  <Image
                    src={item.url}
                    alt={item.alt || "Project image"}
                    width={500}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
});

SwiperContainer.displayName = "SwiperContainer";

export default SwiperContainer;

