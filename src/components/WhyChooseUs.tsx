import React from "react";

import CardComponent from "@/components/CardComponent";
import { CardModel } from "@/models/cardModel";
import WhyCardComponent from "@/components/WhyCardComponent";

export default function WhyChooseUs({ whyUs }: any) {
  return (
    <div>
      <div className="flex flex-col items-center custom-container">
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
                <WhyCardComponent
                  key={index}
                  item={item}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
