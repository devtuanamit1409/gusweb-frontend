import React from "react";

import Image from "next/image";
import { midPageModel } from "@/models/MidPageModel";
import { Button } from "antd";
import Link from "next/link";
import { fetchContactUsComp } from "@/utils/GlobalApi";

export default async function Contact() {
  const data = await fetchContactUsComp("vi");
  return (
    <div className="relative h-[428px]">
      <Image
        src={data.src}
        alt={data.alt}
        fill
        className="object-cover"
      />
      {/* laptop:w-[261px] laptop:h-[499px] tablet:h-[256px] tablet:w-[712px] mobile:h-[427px] mobile:w-[328px]*/}
      <div className="absolute laptop:max-w-[1116px] w-full h-full laptop:max-h-[246px] tablet:max-w-[428px] tablet:max-h-[747px] mobile:max-w-[360px] mobile:max-h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <h1 className="text-center font-bricolage font-normal text-2xl leading-[38.4px] text-white">
          {data.name}
        </h1>
        <p className="laptop:text-[56px] tablet:text-[42px] mobile:text-[32px] text-[20px] max-w-[736px] max-h-[134px] font-bricolage font-bold leading-[67.2px] text-center text-white">
          {data.title}
        </p>
        <div className="w-full max-w-[356px] h-[42px] mobile:w-[328px] gap-6 flex justify-between">
          <button className="ant-btn w-full bg-[#1FA9EC] text-white">
            <Link href="/">Tải eBook</Link>
          </button>
          <button className="gradient-text w-full">
            <Link href="/">Xem thêm</Link>
          </button>
        </div>
      </div>

    </div>
  );
}
