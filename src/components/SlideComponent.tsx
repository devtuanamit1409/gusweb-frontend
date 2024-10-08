"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const Slide: React.FC<any> = ({ brands }) => {
  const images = [
    { image: "/images/logoClient.png", alt: "Logo Client 1" },
    { image: "/images/Audi_logo logo.png", alt: "Logo Client 2" },
    { image: "/images/CocaCola logo.png", alt: "Logo Client 3" },
    { image: "/images/Logo Cilents.png", alt: "Logo Client 4" },
    { image: "/images/Logo FPT.png", alt: "Logo Client 5" },
    { image: "/images/logoClient.png", alt: "Logo Client 1" },
    { image: "/images/Audi_logo logo.png", alt: "Logo Client 2" },
    { image: "/images/CocaCola logo.png", alt: "Logo Client 3" },
    { image: "/images/Logo Cilents.png", alt: "Logo Client 4" },
    { image: "/images/Logo FPT.png", alt: "Logo Client 5" },
  ];
  return (
    <div className="max-w-[1140px] mx-auto h-[68px] justify-between pt-[20px] mb-[20px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[68px]"
      >
        {brands.map((img: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-[208px] h-[68px] flex items-center justify-center px-[10px]">
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
    </div>
  );
};

export default Slide;
