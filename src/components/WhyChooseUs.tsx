import React from "react";
import Image from 'next/image';
import { CardModel } from '@/models/cardModel';

interface Props {
  item: CardModel;
  className?: string;
}
// laptop:w-[261px] laptop:h-[499px] tablet:h-[256px] tablet:w-[712px] mobile:h-[427px] mobile:w-[328px]
const WhyCardComponent = (props: Props) => {
  const { item, className = "" } = props;
  return (
    <div className={`home-service-item__box laptop:h-[499px] laptop:max-w-[261px] tablet:w-[712px] tablet:h-[256px] p-6 rounded-3xl gap-4 bg-white/25 border-white/25 border-2 backdrop-blur-[10px] relative overflow-hidden flex flex-col items-center ${className}`}>
      <div className="laptop:flex-col mobile:flex-col flex tablet:flex-row flex-col items-center gap-4 w-full">
        <Image
          src={item.url || ""}
          alt='Image not available'
          width={261}
          height={195}
          className="mb-4 w-[261px] h-[195px]"
        />
        <div className='flex flex-col flex-grow'>
          <p className='text-base font-bold max-h-[120px] overflow-hidden overflow-ellipsis mb-2 text-center'>
            {item.title}
          </p>
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function WhyChooseUs({ whyUs }: any) {
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-40 p-4">
        <p className="text-2xl relative text-preamble laptop:w-[470px] tablet:w-[715px] mobile:w-[328px]  ml-4  ">
          Tại sao <b>{whyUs.name}</b> là lựa chọn phù hợp nhất?
        </p>
        <p className="text-[56px] font-bricolage ml-4 max-w-[1100px]">
          <b>{whyUs.title}</b>
        </p>
        <div className="flex flex-col gap-6 mt-4 p-4 tablet:grid tablet:grid-cols-1 laptop:flex laptop:flex-row">
          {whyUs.items &&
            whyUs.items.slice(0, 4).map((item: any, index: number) => (
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
