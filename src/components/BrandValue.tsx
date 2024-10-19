"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import IconLock from "@/components/Icons/IconLock";
import Link from "next/link";
import IconArrowUp from "@/components/Icons/IconArrowUp";
import { IconCheck } from "@/components/Icons/IconCheck";
import IconArrow6 from "@/components/Icons/IconArrow6";
import IconVector_90 from "@/components/Icons/IconVector_90";
import IconVuongCam from "@/components/Icons/IconVuongCam";
import IconVuongXanh from "@/components/Icons/IconVuongXanh";
import IconVectorArrow from "@/components/Icons/IconVectorArrow";
import HeaderInterfaceSlider from "@/components/HeaderInterfaceSlider";

const BrandValue: React.FC<any> = ({ mainData }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex  items-center justify-center flex-col">
      <div className="relative w-full tablet:h-[1024px] mobile:h-[900px]">
        <Image
          src={mainData.banner.url}
          alt={mainData.banner.alt}
          fill
          className="object-cover object-bottom"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 0px) 100vw"
        />
      </div>
      <div className="absolute top-[110px] h-[885px] flex flex-col gap-[32px] max-w-[1140px] mx-auto " >
        <div className=" flex flex-col items-center text-center ">
          <div className="text-white laptop:text-[80px] laptop:leading-[96px] tablet:text-[64px] mobile:text-[40px] font-semibold font-bricolage mx-10 flex-1">
            {mainData.banner.title}
          </div>
          <p className="text-white laptop:text-2xl flex-1 laptop:leading-[33.6px]">
            {mainData.banner.description}
          </p>
          <div className="flex-1 mt-5">
            <button
              type="button"
              className=" text-[#08BED5]  bg-[#FFFFFF] text-sm w-[152px] h-[42px] mobile: tablet:mt-10  rounded-[5px]"
            >
              Bắt đầu ngay
            </button>
          </div>

        </div>

        <div className="flex flex-row tablet:gap-2 laptop:gap-4 px-4 max-w-[1140px]">

          <div className="w-4/12 mt-7 laptop:block hidden ">
            <div className="max-w-[333px] h-[53px] bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] border-2 border-white/50 rounded-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-[12px] px-[24px] flex flex-row gap-2">
              <IconLock />
              <Link href={mainData.url} className="text-white">
                {mainData.url}
              </Link>
            </div>
            <div className="mt-6 max-w-[355px] h-[200px] bg-[rgba(255,255,255,0.3)] border-2 border-white/50 rounded-[16px] border-dashed py-8 px-6">
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
            <div className="mt-6 max-w-[355px] h-[146px] bg-[rgba(255,255,255,0.3)] border-2 border-white/50 rounded-[16px] px-4 py-[20px]">
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

          <div className="laptop:w-3/12 tablet:w-[40%] tablet:flex tablet:flex-col tablet:items-center mobile:w-full mobile:flex mobile:justify-center mobile:items-center">
            <div className="p-2 gap-2  tablet:block hidden w-[230px] h-[168px] bg-white/30 border border-white/50 rounded-[10px]">
              <Image
                src={mainData.subImg.url}
                alt={mainData.subImg.alt}
                width="210"
                height="148"
                className="gap-2"
              />
            </div>
            <div className="p-8 mt-10 gap-8 w-[259px] h-[327px] bg-white/30 border-2 border-white/50 border-dashed rounded-[16px]">
              <div className="text-white mb-5">
                <p className="text-2xl">{mainData.text.title}</p>
                <p className="text-base">{mainData.text.subTitle}</p>
              </div>
              <div className="TextCon-glass-card-dashed flex items-center justify-center text-center mb-10 relative">
                <p className="text-[#66F2EB] text-[120px] absolute -top-14">
                  {mainData.text.content}
                </p>
                <div className="mt-[-0.3px] ml-[7.78px] relative -right-[74px]">
                  <IconArrow6 />
                </div>
              </div>
              <div className="text-white">
                <p className="text-xs">{mainData.text.description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between laptop:w-5/12 tablet:w-[60%]">
            <div className="w-6/12 -mt-20 gap-101  tablet:block hidden">
              <div className="relative w-[101px] h-[101px] top-[6px] left-[6px] border-2 border-white">
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
              <div className="relative w-[101px] h-[101px] top-[6px] left-[6px] border-2 border-white mt-20">
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
              <button className="relative top-[28px] left-[115px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] px-4 py-1 buttonBody text-white">
                {mainData.actor}
              </button>
            </div>

            <div className="w-6/12  -mt-10 tablet:block hidden">
              <div className="max-w-[207px] max-h-[428px] bg-[rgba(255,255,255,0.3)] border border-white/50 rounded-[10px] p-2">
                <Image
                  src={mainData.card.url}
                  alt={mainData.card.alt}
                  width="199"
                  height="232"
                />
                <div className="bg-white h-[180px] rounded-b-md max-w-[189px] ">
                  <div className="flex flex-row justify-between max-w-[189px] h-[51px] items-center p-2">
                    <h3>{mainData.card.title}</h3>
                    <p className="gradient-text-camvang">{mainData.card.price}$</p>
                  </div>
                  <div className="p-2 border-y-2 flex justify-between text-[#1FA9EC]">
                    <p>{mainData.card.description}</p>
                    <p>+</p>
                  </div>
                  <div className=" p-2 ">
                    <button
                      type="button"

                      className="text-white bg-[#1FA9EC] font-medium rounded-md text-sm w-full h-[34px] "
                    >
                      Báo Giá
                    </button>
                  </div>
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
