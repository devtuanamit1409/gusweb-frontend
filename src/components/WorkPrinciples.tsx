"use client";

import {
  principleDescriptionModel,
  principleModel,
} from "@/models/principleModel";
import Image from "next/image";
import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function WorkPrinciples({ work }: any) {
  const collapseItems = work.items.map((itemDescription: any, idx: number) => ({
    key: idx.toString(),
    label: (
      <div className="flex justify-between items-center w-full">
        <span className="text-[20px] font-bold">{itemDescription.title}</span>
      </div>
    ),
    children: (
      <div className="mt-4 text-base">
        <p>{itemDescription.description}</p>
      </div>
    ),
  }));

  return (
    <div className="relative max-w-[1116px] mx-auto mt-20 p-4 h-[833px]">
      <div className="mt-10">
        <Image
          src="/images/starrysky.png"
          alt="Header Banner"
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="max-w-[800px]">
          <span className="relative text-preamble w-[300px] text-2xl">
            NGUYÊN TẮC LÀM VIỆC
          </span>
          <p className="text-[56px] font-bricolage">{work.title}</p>
          <p>{work.description}</p>
          <hr className="border-t-2 mt-10" />
          <Collapse
            defaultActiveKey={[""]}
            bordered={false}
            accordion
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <Image
                  src={"/svg/IconDauTru.svg"}
                  alt="tru"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              ) : (
                <Image
                  src={"/svg/Icons+.svg"}
                  alt="plus"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              )
            }
            className="bg-white"
          >
            {collapseItems.map((item: any) => (
              <Panel key={item.key} header={item.label}>
                {item.children}
              </Panel>
            ))}
          </Collapse>
          <hr className="border-t-2" />
        </div>
      </div>
    </div>
  );
}
