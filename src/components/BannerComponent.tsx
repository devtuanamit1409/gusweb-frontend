"use client"; // Thêm dòng này để đánh dấu component là Client Component

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerComponent: React.FC<any> = ({ intro }) => {
  useEffect(() => {
    AOS.init({ once: true });
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div className="relative mobile:min-h-[582px] py-[80px] w-full laptop:h-[734px]">
      <Image
        src={intro?.url || "/images/BannerBlog.png"}
        alt={intro?.alt || "image banner blog"}
        width={1440}
        height={734}
        className="absolute inset-0 object-cover mobile:w-[743px] mobile:h-[582px] tablet:w-[1023px] laptop:w-full laptop:h-[734px] z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-20"></div>
      <div className="absolute inset-0 z-30 bg-opacity-70 flex items-center justify-center mx-auto gap-4 max-w-[1116px]" data-aos="zoom-in">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-[32px] leading-[38.4px] tablet:text-6xl laptop:text-7xl font-bold mb-4 font-bricolage">
            {intro?.title}
          </h1>
          <h2 className="mobile:text-[32px] text-[76px] font-bold mb-6 font-bricolage">
            {intro?.subTitle}
          </h2>
          <p className="text-base leading-6 mx-auto font-bricolage font-normal text-center w-full px-4 laptop:px-0 laptop:max-w-[736px]">
            {intro?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
