"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SwiperContainer123 from "@/components/SwiperContainer123";

export default function ProjectShowcase({ project }: any) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="flex flex-row items-center relative">
      <div className="flex flex-col justify-center gap-4 w-[40%]">
        <p className="font-semibold text-2xl relative text-preamble w-64">
          CÁC DỰ ÁN TIÊU BIỂU
        </p>
        <span className="font-semibold text-[56px] line-clamp-3">
          {project.items[activeSlideIndex].title}
        </span>
        <span className="text-base line-clamp-2">
          {project.items[activeSlideIndex].description}{" "}
        </span>
        <Link href="/chi-tiet" className="text-blue-500 underline mt-2">
          Xem chi tiết
        </Link>
      </div>
      <div className=" w-[70%]">
        <Image
          src={project.url}
          alt={project.alt}
          width={853}
          height={469}
          className="object-cover w-full h-full"
        />
      </div>
      <SwiperContainer123
        projects={project.items}
        onSlideChangeIndex={setActiveSlideIndex}
      />
    </div>
  );
}
