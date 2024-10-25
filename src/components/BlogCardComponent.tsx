"use client";

import React, { use } from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const BlogCardComponent = ({ item }: any) => {
  const t = useTranslations();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    // Tính toán thời gian còn lại
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} ${t("cardComponet.secondAgo")}`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} ${t("cardComponet.minuteAgo")}`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} ${t("cardComponet.hourAgo")}`;
    } else {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} ${t("cardComponet.dayAgo")}`;
    }
  };
  return (
    <div className="home-service-item__box ">
      <div className="relative">
        <Image
          src={item.url}
          alt={item.alt}
          width={400}
          height={300}
          className="w-full laptop:h-[267px] rounded-lg tablet:max-h-[500px] max-h-[400px] sm:rounded-3xl object-cover object-top"
        />
        <div className=" background-LinearGradient text-[13px] font-montserrat text-[#363636] font-medium leading-[26px] absolute bottom-4 right-4 rounded px-2 w-max max-w-[70%] h-[26px] line-clamp-1">
          {item.sub_category}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 ">
        <p className="text-[12px] leading-[16.8px] text-[#363636]">
          {formatDate(item.createdAt)}
        </p>
        <p className="font-bricolage text-base tablet:text-[20px] text-[#1C1C1C] font-semibold leading-[24px] h-[48px] line-clamp-2 tablet:line-clamp-3">
          {item.title}
        </p>
        <Link href={item.slug}>
          <div className="text-[#1FA9EC] w-[102px] gap-2 font-medium text-[15px] leading-[18px] font-montserrat flex items-center ">
            {t("cardComponet.viewMore")}
            <ArrowRightOutlined
              style={{ marginLeft: "10px", color: "#1FA9EC" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardComponent;
