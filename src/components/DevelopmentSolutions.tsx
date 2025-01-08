"use client";
import React, { useEffect } from "react";
import { Card } from "antd";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";

const DevelopmentSolutions: React.FC<any> = ({ whyUs }) => {
  const localActive = useLocale();
  const t = useTranslations();
  const title = t("servicePage.whyAmit").split("-");
  useEffect(() => {
    Aos.init({ once: true });
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div className="custom-container   laptop:py-[80px]  px-4 py-10 gap-6 justify-center items-center flex flex-col">
      <div
        className="laptop:max-w-[1116px] laptop:max-h-[209px]  gap-4  items-center flex flex-col w-full"
        data-aos="zoom-in"
      >
        <h5
          className={` text-[24px] leading-[30px] text-preamble relative font-montserrat uppercase text-[#363636] ${
            localActive === "vi" || localActive === "en"
              ? "font-normal"
              : "font-bold"
          }`}
        >
          {title[0]}{" "}
          <span
            className={
              localActive === "vi" || localActive === "en"
                ? "font-bold"
                : "font-normal"
            }
          >
            {" "}
            {title[1]}
          </span>
        </h5>
        <h2 className="laptop:h-[67px]  font-bold laptop:text-[56px] laptop:leading-[67.2px] text-[40px] leading-[50.4px] text-center font-bricolage line-clamp-2 mobile:line-clamp-3">
          {whyUs.title}
        </h2>
        <p className="laptop:max-w-[736px] laptop:max-h-[72px]  font-normal text-base leading-6 text-center w-full laptop:line-clamp-3 line-clamp-6">
          {whyUs.description}
        </p>
      </div>
      <div
        className="  gap-6 mt-6 bg-white flex flex-wrap laptop:flex-nowrap justify-center w-full mobile:px-[66px] tablet:px-0"
        data-aos="fade-up"
      >
        {whyUs.items &&
          whyUs.items.map((item: any, index: number) => (
            <div
              key={index}
              className=" rounded-3xl p-6 gap-6 bg-[#FEFEFE] shadow-custom-shadow justify-center items-center flex flex-col w-full tablet:w-1/3"
            >
              <Image src={item.url} alt={item.alt} width={80} height={80} />
              <h1 className="laptop:max-w-[213px] min-h-[72px] font-semibold text-xl leading-6 text-[#1C1C1C] w-full text-center ">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DevelopmentSolutions;
