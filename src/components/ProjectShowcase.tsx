"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import SwiperContainer123 from "@/components/SwiperContainer";
import IconArrowDesc from "./Icons/IconArrowDesc";
import SwiperContainer from "@/components/SwiperContainer";
import QuotationButton from "./QuotationButton";

export default function ProjectShowcase({ project }: any) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="flex flex-col tablet:flex-row items-center relative tablet:h-[436px] laptop:h-[545px] mt-20">
      <div className="max-w-[1116px] w-full mx-auto flex flex-row px-4 desktop:px-0">
        <div className="flex flex-col gap-2 w-full tablet:w-[40%] mt-[80px]">
          <p className="font-semibold text-2xl relative text-preamble w-max text-[#1C1C1C]">
            CÁC DỰ ÁN TIÊU BIỂU
          </p>
          <p className="font-bold leading-[38.4px] laptop:leading-[78px] text-[32px] laptop:text-[56px] line-clamp-3 text-[#1C1C1C]">
            {project.items[activeSlideIndex].title}
          </p>
          <span className="text-base line-clamp-2 leading-6 text-[#363636]">
            {project.items[activeSlideIndex].description}{" "}
          </span>
          <Link
            href="/chi-tiet"
            className="text-[#1FA9EC] font-medium text-[15px] underline mt-2 flex flex-row items-center gap-2 leading-6 w-max h-8"
          >
            <p>Xem chi tiết</p>
            <IconArrowDesc />
          </Link>
        </div>
        <div className="hidden tablet:w-[60%]"></div>
      </div>

      <div className="w-full tablet:absolute tablet:top-0 tablet:left-0 tablet:right-0 tablet:bottom-0 tablet:mt-0 mt-6 flex flex-row">
        <div className="hidden tablet:block w-[45%] h-full"></div>
        <div className="tablet:w-[55%] w-full relative h-full overflow-hidden">
          <div className="hidden tablet:block w-full tablet:w-full laptop:w-full laptop:h-[90%] tablet:h-[354px]">
            <Image
              src="/images/Maskgroup2.png"
              alt="image banner project laptop"
              width={800}
              height={450}
              className="object-cover object-left w-full tablet:w-auto h-full min-h-[328px] tablet:h-full"
            />
          </div>
          <div className="tablet:hidden w-full min-w-[328px] min-h-[328px]">
            <Image
              src="/images/MaskgroupMobile.png"
              alt="image banner project mobile"
              width={744}
              height={744}
              className="object-cover w-full min-h-[328px] h-full"
            />
          </div>
          <div className="absolute top-0 left-0 h-full tablet:h-[354px] laptop:h-full w-full tablet:w-[1100px]">
            <SwiperContainer
              projects={project.items}
              onSlideChangeIndex={setActiveSlideIndex}
            />
          </div>
          <div className="hidden tablet:block absolute bottom-0 left-0 mobile:left-[50%] tablet:left-[37%] laptop:left-[26%] desktop:left-[20%] ">
            <QuotationButton />
          </div>
        </div>
      </div>
      <div className="tablet:hidden mt-8">
        <QuotationButton />
      </div>
    </div>
  );
}
