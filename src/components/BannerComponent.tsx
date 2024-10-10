import Image from "next/image";
import React from "react";

const BannerComponent: React.FC<any> = ({ intro }) => {
  return (
    <div className="relative  h-[734px] px-[162px] py-[80px]">
      <Image
        src={intro?.url || "/images/BannerBlog.png"}
        alt={intro?.alt || "image banner blog"}
        width={1440}
        height={734}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0 "></div>
      <div className="absolute inset-0  bg-opacity-70 flex items-center justify-center">
        <div className=" text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight font-bricolage">
            {intro?.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-bricolage">
            {intro?.subTitle}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-bricolage">
            {intro?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
