import React from "react";
import Image from "next/image";
import { aboutModel } from "@/models/aboutModel";

export default function OurExperts({ about }: any) {
  return (
    <div className="relative w-full laptop:h-[1024px] tablet:h-[610px] mobile:h-[387px] h-[260px]">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        <div className="flex flex-col items-center justify-center p-6 w-[228px] h-[220px] tablet:w-[712px] tablet:h-[324px] laptop:w-[912px] laptop:h-[324px] bg-white/30 border-2 border-white/30 rounded-[20px] gap-[16px] backdrop-blur-[10px]">
          <p className="text-center mobile:text-[24px] tablet:text-[56px]">{about.title}</p>
        </div>
      </div>
    </div>
  );
}
