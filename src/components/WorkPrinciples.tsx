"use client";

import {
  principleDescriptionModel,
  principleModel,
} from "@/models/principleModel";
import Image from "next/image";
import React from "react";
import { Collapse } from "antd"; // Import Collapse từ Ant Design
import ProjectShowcase from "@/components/ProjectShowcase";

export default function WorkPrinciples({ work, project }: any) {
  //   console.log(work);

  const collapseItems = work.items.map((itemDescription: any, idx: number) => ({
    key: idx,
    label: (
      <div className="flex justify-between items-center w-full">
        <span className="text-[20px] font-bold">{itemDescription.title}</span>
        <Image
          src={"/svg/Icons+.svg"}
          alt="tesst"
          width={28}
          height={28}
          className="ml-2"
        />
      </div>
    ),
    children: (
      <div className="mt-4 text-base">
        <p>{itemDescription.description}</p>
      </div>
    ),
  }));
  return (
    <div className="relative h-[1517px] max-w-[1145px] mx-auto mt-20">
      <div className="gap-10 mb-[469px]">
        <Image
          src="/images/starrysky.png"
          alt="Header Banner"
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="w-[800px]">
          <span className="relative text-preamble w-[300px] text-2xl">
            NGUYÊN TẮC LÀM VIỆC
          </span>
          <p className="text-[56px] font-bricolage">{work.title}</p>
          <p>{work.description}</p>
          <hr className="border-t-2 mb-4 mt-10" />
          <Collapse
            defaultActiveKey={[""]}
            expandIcon={() => null}
            bordered={false}
            items={collapseItems}
          />
          <hr className="border-t-2 mb-4 mt-5" />
        </div>
      </div>
      <div className="absolute bottom-40 left-0 right-0">
        <ProjectShowcase project={project} />
      </div>
    </div>
  );
}
