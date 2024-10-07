import { bannerModel } from "@/models/bannerModel";
import Image from "next/image";
import React from "react";

interface Props {
  premble?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const BannerComponent = ({
  imageUrl = "/images/banner.png",
  premble = "THIẾT KẾ WEBSITE",
  title = "Đồng hành chuyển đổi số cùng khách hàng",
  description = "GUSWEB mong muốn với những giá trị mà chúng tôi mang lại sẽ giúp   Khách hàng thành công hơn và thêm niềm tin vào khả năng công nghệ   của người Việt",
}: Props) => {
  return (
    <div className="relative w-full h-[734px] px-[162px] py-[80px]">
      <Image
        src={imageUrl}
        alt="Background"
        width={1440}
        height={734}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70  "></div>
      <div className="absolute inset-0  bg-opacity-70 flex items-center justify-center">
        <div className=" text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-[76px] md:text-7xl font-bold mb-4 leading-[91.2px] text-center font-bricolage">
            {premble}
          </h1>
          <h2 className="text-[32px] md:text-3xl font-bold mb-6 font-bricolage">
            {title}
          </h2>
          <p className="w-[736px] h-[48px] text-base md:text-xl max-w-2xl mx-auto font-normal leading-6 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
