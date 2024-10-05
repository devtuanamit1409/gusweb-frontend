import React from "react";

import CardComponent from "@/components/CardComponent";
import { CardModel } from "@/models/cardModel";

export default function WhyChooseUs({ whyUs }: any) {
  return (
    <div>
      <div className="relative flex flex-col items-center">
        <div className="mt-40 ">
          <p className="text-2xl relative text-preamble w-[470px]">
            Tại sao <b>{whyUs.name}</b> là lựa chọn phù hợp nhất?.
          </p>
          <p className="text-[56px] max-w-[1100px] font-bricolage">
            <b>{whyUs.title}</b>
          </p>
          <div className="grid grid-cols-4 gap-6 justify-center mt-4">
            {whyUs.items &&
              whyUs.items.map((item: any, index: number) => (
                <CardComponent
                  key={index}
                  item={item}
                  showDescriptionOnHover={false}
                // // showDescription={true}
                // customClassName="home-service-item__box "
                // customClassNameTitle="font-bold text-xl"
                // width={261}
                // height={195}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
