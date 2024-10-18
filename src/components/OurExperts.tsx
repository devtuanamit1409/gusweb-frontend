import React from "react";
import Image from "next/image";
import { aboutModel } from "@/models/aboutModel";

export default function OurExperts({ about }: any) {
  return (
    <div className="relative w-full laptop:h-[734px]  ">
      <Image
        src={about.url}
        alt={about.alt}
        fill
        className="object-cover"
        style={{ objectPosition: "center" }}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 0px) 100vw"
      />
      <div className="flex justify-center items-center  laptop:h-[734px] tablet:h-[610px] mobile:h-[387px]">
        <div className="flex flex-col items-center justify-center p-6 bg-white/30 border-2 border-white/30 rounded-[20px] gap-[16px] backdrop-blur-[10px] laptop:max-w-[912px] laptop:h-[324px] tablet:max-w-[712px] tablet:h-[324px] mobile:max-w-[328px] mobile:h-[220px]">
          <p className="text-center mobile:text-[24px] tablet:text-[56px] text-[#051E78] font-bold">{about.title}</p>
        </div>
      </div>
    </div>
  );
}
