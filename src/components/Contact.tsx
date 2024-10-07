import React from "react";

import Image from "next/image";
import { midPageModel } from "@/models/MidPageModel";
import { Button } from "antd";
import Link from "next/link";

const items: midPageModel[] = [
  {
    url: "/images/Promotion.png",
    title: "LIÊN HỆ",
    description: "Tạo dựng thương hiệu, khẳng định vị thế",
  },
];

export default function Contact() {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <Image
            src={item.url || ""}
            alt="Header Banner"
            width={1440}
            height={428}
            className="object-cover w-full relative"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1116px] h-[246px] gap-4 justify-center items-center flex flex-col ">
            <h1 className="w-[86px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-white">
              {item.title}
            </h1>
            <p className="w-[736px] h-[134px] font-bricolage font-bold text-[56px] leading-[67.2px] text-center  text-white">
              {item.description}
            </p>

            <div className="w-[356px] h-[42px] gap-6 flex justify-between">
              <button className="ant-btn w-[166px] bg-[#1FA9EC] text-white">
                <Link href="/">Tải eBook</Link>
              </button>
              <button className="gradient-text  w-[166px]">
                <Link href="/">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
