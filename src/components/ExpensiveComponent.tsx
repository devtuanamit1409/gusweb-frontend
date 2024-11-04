import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpensiveComponent: React.FC<any> = async ({ exp }) => {
  const t = await getTranslations();
  return (
    <div className=" relative w-full h-full ">
      <Image
        src={exp.url}
        alt={exp.alt}
        fill
        className="absolute top-0 left-0  object-cover"
      />
      <div className="custom-container  py-20 px-4 mobile:py-10  w-[1116px]">
        <div className="justify-start flex  bg-slate-600">
          <div className="  flex flex-col laptop:gap-10 gap-4 z-10 laptop:max-w-[641px]">
            <p className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[32px] font-bold font-bricolage text-[#FEFEFE] ">
              {exp.title}
            </p>
            <p className="text-[#FEFEFE] font-normal leading-6 text-[16px]">{exp.description}</p>
            <div className=" flex flex-row gap-6">
              <button className="ant-btn w-[166px] mobile:w-[130px] mobile:h-[42px] bg-[#27B3E9] flex items-center">
                <Link href="">{t("contact.buttonLeft")}</Link>
              </button>
              <button className="gradient-text  w-[166px] mobile:w-[130px] mobile:h-[42px]">
                <Link href="">{t("cardComponet.viewMore")}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensiveComponent;
