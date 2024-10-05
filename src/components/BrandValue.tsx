"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import Img_Internet_Earth from "@/components/Img_Internet_Earth";
import IconLock from "@/components/Icons/IconLock";
import Link from "next/link";
import IconArrowUp from "@/components/Icons/IconArrowUp";
import { IconCheck } from "@/components/Icons/IconCheck";
import IconArrow6 from "@/components/Icons/IconArrow6";
import IconVector_90 from "@/components/Icons/IconVector_90";
import IconVuongCam from "@/components/Icons/IconVuongCam";
import Icon_OurServiecs from "@/components/Icons/Icon_OurServiecs";
import IconVector_viet from "@/components/Icons/IconVector_viet";
import IconVuongXanh from "@/components/Icons/IconVuongXanh";
import IconVectorArrow from "@/components/Icons/IconVectorArrow";
import HeaderInterfaceSlider from "@/components/HeaderInterfaceSlider";
import { useTranslations } from "next-intl";

const BrandValue: React.FC<any> = ({ mainData }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center md:flex-row flex-col">
      <div className="relative w-full h-[1024px]">
        <Image
          src={mainData.banner.url}
          alt={mainData.banner.alt}
          fill
          className="object-cover object-center"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 0px) 100vw"
        />
      </div>
      <div className="absolute top-32 left-0 right-0 bottom-0 px-4">
        <div className="max-w-[1145px] mx-auto ">
          <div className="p-4" data-aos="zoom-in">
            <div className=" text-center">
              <h1 className="text-white md:text-[80px] font-bricolage ">
                {mainData.banner.title}
              </h1>
              <p className="text-white mt-4 text-2xl">
                {mainData.banner.description}
              </p>
              <button
                type="button"
                className=" text-[#08BED5]  bg-[#FFFFFF] text-sm w-[152px] h-[42px] mt-4 rounded-[5px]"
              >
                Bắt đầu ngay
              </button>
            </div>
          </div>
          <div className="flex mt-4 gap-5">
            <div className="flex-1 mt-4">
              <div className="glass-card flex flex-row">
                <IconLock />
                <Link href={mainData.url} className="text-white">
                  {mainData.url}
                </Link>
              </div>
              <div className="mt-6 color-glass-card py-8 px-6">
                <p className="text-[25px] text-white">{mainData.color.title}</p>
                <p className="text-white">{mainData.color.description}</p>
                <div className="py-8 flex flex-row relative">
                  <div className="bg-[#FFFFFF] w-[61px] h-[23px]"></div>
                  <div className="bg-[#27B3E9] w-[61px] h-[23px]"></div>
                  <div className="bg-[#45D7DF] w-[61px] h-[23px]"></div>
                  <div className="bg-[#1FA9EC] w-[61px] h-[23px]"></div>
                  <div className="bg-[#3ACBE2] w-[61px] h-[23px]"></div>
                  <div className="absolute top-[20px] right-[-10px]">
                    <IconCheck />
                  </div>
                </div>
              </div>
              <div className="mt-6 Orders-glass-card px-4 py-[20px]">
                <div className="text-white flex flex-row gap-[14px]">
                  <div className="relative">
                    <Image
                      src={mainData.order.url}
                      alt={mainData.order.alt}
                      width={50}
                      height={50}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <IconVector_90 />
                    </div>
                  </div>
                  <div>
                    <p className="text-base">{mainData.order.title}</p>
                    <p className="text-sm">{mainData.order.description}</p>
                  </div>
                </div>
                <div className="flex flex-row text-white mt-5 items-baseline gap-[5px]">
                  <h4 className="text-2xl">{mainData.order.price}</h4>
                  <h2 className="text-xs">{mainData.order.percent}%</h2>
                  <IconArrowUp />
                </div>
                <div className="">
                  <HeaderInterfaceSlider />
                </div>
              </div>
            </div>
            <div className="flex-1 items-center justify-center">
              <div className="p-[10px] gap-[10] Sopha-glass-card ml-[14.5px]">
                <Image
                  src={mainData.subImg.url}
                  alt={mainData.subImg.alt}
                  width="210"
                  height="148"
                  className="gap-2"
                />
              </div>
              <div className="Text-glass-card-dashed p-8 mt-4 gap-8">
                <div className="text-white mb-10">
                  <p className="text-2xl">{mainData.text.title}</p>
                  <p className="text-base">{mainData.text.subTitle}</p>
                </div>
                <div className="TextCon-glass-card-dashed flex items-center justify-center text-center mb-10">
                  <p className="text-[#66F2EB] text-9xl ">
                    {mainData.text.content}
                  </p>
                  <div className="mt-[-0.3px] ml-[7.78px] relative"></div>
                  <IconArrow6 />
                </div>
                <div className="text-white">
                  <p className="text-xs">{mainData.text.description}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-20 gap-101">
              <div className="Vuong-glass-card relative">
                <Image
                  src={mainData.icons[0].url}
                  alt={mainData.icons[0].url}
                  className="w-auto h-full object-contain"
                  width={70}
                  height={70}
                />
                <div className="absolute top-[-7px] left-[-7px]">
                  <IconVuongCam />
                </div>
                <div className="absolute top-[90.5px] left-[-7px]">
                  <IconVuongCam />
                </div>
                <div className="absolute top-[-7px] right-[-7px]">
                  <IconVuongCam />
                </div>
                <div className="absolute top-[90.5px] right-[-7px]">
                  <IconVuongCam />
                </div>
              </div>
              <div className="Vuong-glass-card mt-20 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={mainData.icons[1].url}
                    alt={mainData.icons[1].url}
                    className="w-auto h-full object-contain"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="absolute top-[-7px] left-[-7px]">
                  <IconVuongXanh />
                </div>
                <div className="absolute top-[90.5px] left-[-7px]">
                  <IconVuongXanh />
                </div>
                <div className="absolute top-[-7px] right-[-7px]">
                  <IconVuongXanh />
                </div>
                <div className="absolute top-[90.5px] right-[-7px]">
                  <IconVuongXanh />
                  <div className="absolute top-[5.5px] right-[-14px]">
                    <IconVectorArrow />
                  </div>
                </div>
              </div>
              <button className="relative top-[28px] left-[115px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] px-4 py-1 buttonBody">
                {mainData.actor}
              </button>
            </div>
            <div className="flex-1 mt-10 mr-16">
              <div className="phone-glass-card p-2">
                <Image
                  src={mainData.card.url}
                  alt={mainData.card.alt}
                  width="191"
                  height="232"
                />
                <div>
                  <h3>{mainData.card.title}</h3>
                  <p>{mainData.card.price}$</p>
                  <p>{mainData.card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandValue;
