import React from "react";
import Image from "next/image";
import { aboutModel } from "@/models/aboutModel";

export default function OurExperts({ about }: any) {
  return (
    <div className="relative w-full h-[1024px] ">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" p-6 w-[912px] h-[324px] bg-white/30 border-2 border-white/30 rounded-[20px] gap-[16px] backdrop-blur-[10px]">
          <p className="text-[56px] text-center p-10">{about.title}</p>
        </div>
      </div>
    </div>
  );
}
