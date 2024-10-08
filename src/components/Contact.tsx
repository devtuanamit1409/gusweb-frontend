import React from "react";

import Image from "next/image";
import { midPageModel } from "@/models/MidPageModel";
import { Button } from "antd";
import Link from "next/link";
import { fetchContactUsComp } from "@/utils/GlobalApi";

export default async function Contact() {
  const data = await fetchContactUsComp("vi");
  return (
    <div className="relative ">
      <Image
        src={data.src}
        alt={data.alt}
        width={1440}
        height={428}
        className="object-cover object-bottom mx-auto w-full "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1116px] h-[246px] gap-4 justify-center items-center flex flex-col ">
        <h1 className="text-center h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-white">
          {data.name}
        </h1>
        <p className="w-[736px] h-[134px] font-bricolage font-bold text-[56px] leading-[67.2px] text-center  text-white">
          {data.title}
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
  );
}
