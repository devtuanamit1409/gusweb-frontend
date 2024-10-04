"use client";

import Image from "next/image";
import React from "react";
import Slide from "./SlideComponent";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[734px] px-[162px] py-[80px]">
        <Image
          src="/images/banner.png"
          alt="Background"
          width={1440}
          height={734}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70  "></div>
        <div className="absolute inset-0  bg-opacity-70 flex items-center justify-center">
          <div className=" text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight font-bricolage">
              THIẾT KẾ WEBSITE
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-bricolage">
              Đồng hành chuyển đổi số cùng khách hàng
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-bricolage">
              GUSWEB mong muốn với những giá trị mà chúng tôi mang lại sẽ giúp
              Khách hàng thành công hơn và thêm niềm tin vào khả năng công nghệ
              của người Việt
            </p>
          </div>
        </div>
      </div>
      <Slide />
    </>
  );
};

export default Banner;
