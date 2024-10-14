import Image from "next/image";
import React from "react";

const BannerComponent: React.FC<any> = ({ intro }) => {
  return (
    <div className="relative mobile:min-w-[360px]   mobile:min-h-[582px] py-[80px] tablet:w-full  laptop:min-w-[1440px]  laptop:h-[734px]  bg-red-500">
      <Image
        src={intro?.url || "/images/BannerBlog.png"}
        alt={intro?.alt || "image banner blog"}
        width={1440}
        height={734}
        layout="responsive"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center mx-auto w-[328px] h-[422px] tablet:w-[712px] tablet:h-[574px] laptop:w-[1116px] laptop:h-[574px] gap-4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight font-bricolage">
            {intro?.title}
          </h1>
          <h2 className="mobile:text-[32px] text-[76px] font-bold mb-6 font-bricolage w-[328px] h-[38px] tablet:w-[712px] tablet:h-[91px] laptop:w-[1116px] laptop:h-[91px]">
            {intro?.subTitle}
          </h2>
          <p className="text-base leading-6 mx-auto font-bricolage w-[328px] mobile:h-[120px] tablet:w-[712px] h-[48px] laptop:w-[738px] font-normal text-center">
            {intro?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
