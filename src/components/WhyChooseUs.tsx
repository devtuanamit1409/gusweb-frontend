import React from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";
import { getTranslations } from "next-intl/server";

interface Props {
  item: CardModel;
  className?: string;
}
// laptop:w-[261px] laptop:h-[499px] tablet:h-[256px] tablet:w-[712px] mobile:h-[427px] mobile:w-[328px]
const WhyCardComponent = (props: Props) => {
  const { item, className = "" } = props;
  return (
    <div
      className={`home-service-item__box laptop:h-[499px] laptop:!max-w-[261px] desktop:!max-w-[261px] tablet:!max-w-[991px] tablet:h-[256px] min-h-[256px] p-6 rounded-3xl gap-4 bg-white/25 border-white/25 border-2 backdrop-blur-[10px] relative overflow-hidden flex flex-col items-start ${className}`}
    >
      <div className="laptop:flex-col mobile:flex-col flex tablet:flex-row flex-col items-start gap-4 w-full">
        <Image
          src={item.url || ""}
          alt="Image not available"
          width={261}
          height={195}
          className="mb-4 w-[261px] h-[195px]"
        />
        <div className="flex flex-col flex-grow w-full">
          <p className="text-base font-bold min-h-[48px] overflow-hidden overflow-ellipsis mb-2">
            {item.title}
          </p>
          <p className="">{item.description}</p>
        </div>
      </div>
    </div>

  );
};

export default async function WhyChooseUs({ whyUs }: any) {
  const t = await getTranslations();
  return (
    <div className="flex flex-col  max-w-[1116px] mx-auto ">
      <div className="mt-40 p-4">
        <p className="text-2xl relative text-preamble laptop:w-[470px] tablet:max-w-[715px] mobile:max-w-[328px]  ml-4  ">
          {t("homePage.whyWeb")}
        </p>
        <p className="mobile:font-bold mobile:leading-[38.4px] mobile:text-[33px] tablet:text-[56px] font-bricolage tablet:leading-[67.2px] max-w-[1100px]">
          <b>{whyUs.title}</b>
        </p>
        <div className="flex flex-col gap-6 tablet:grid tablet:grid-cols-1 laptop:flex laptop:flex-row mt-4">
          {whyUs.items &&
            whyUs.items
              .slice(0, 4)
              .map((item: any, index: number) => (
                <WhyCardComponent
                  key={index}
                  item={item}
                  className="w-full tablet:w-auto laptop:w-1/4"
                />
              ))}
        </div>
      </div>
    </div>
  );
}
