"use client";

import Link from "next/link";

import { fetchFilteredArticles } from "@/utils/GlobalApi";
import BlogCardComponent from "./BlogCardComponent";
import { Empty } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { IconArrowTronButtonPhai } from "@/components/Icons/IconArrowTronButtonPhai";
import { IconArrowTronButtonTrai } from "@/components/Icons/IconArrowTronButtonTrai";
import { useLocale, useTranslations } from "next-intl";
interface BlogCardProps {
  title?: string;
}

export default function BlogCard({ title }: BlogCardProps) {
  const swiperRef = useRef<any>(null);
  // console.log("brands123",brands)
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const t = useTranslations();
  const localeActive = useLocale();

  const [data, setData] = useState<any>({ articles: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFilteredArticles(localeActive, 1, 3, 4);

        setData(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [localeActive]);

  return (
    <div className="custom-container laptop:py-20 py-10 flex items-center justify-center px-4 w-full">
      <div className="flex laptop:items-start  mobile:items-start tablet:items-center flex-col gap-6 max-w-[1140px] w-full mx-auto laptop:px-0">
        <div className="flex items-center justify-between w-full tablet:px-[90px] laptop:px-4 laptop:max-w-[1140px] gap-4 laptop:flex-row flex-col">
          <span className="tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[32px] font-bold mobile:leading-[38.4px] font-bricolage tablet:text-center">
            {title ? title : t("cardComponet.otherProjects")}
          </span>
          <Link
            href="/blog"
            className="bg-[#27B3E9] flex items-center justify-center text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
          >
            <p>{t("cardComponet.viewAll")}</p>
          </Link>
        </div>

        <div className="w-full">
          <div className="laptop:max-w-full pt-[20px] mb-[20px] relative flex items-center justify-between ">
            <div
              className="rounded-full cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block absolute top-1/2 left-0 transform -translate-y-1/2"
              onClick={handlePrevClick}
            >
              <IconArrowTronButtonTrai />
            </div>
            <Swiper
              slidesPerView="auto"
              ref={swiperRef}
              spaceBetween={30}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                744: {
                  slidesPerView: 1,
                },
                360: {
                  slidesPerView: 1,
                },
              }}
              loop={true}
              className="w-full laptop:!p-6 !pb-6"
            >
              {data.articles.slice(-3).map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <BlogCardComponent item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="rounded-full  cursor-pointer shadow-md z-10 laptop:hidden tablet:block mobile:block absolute top-1/2 right-0 transform -translate-y-1/2"
              onClick={handleNextClick}
            >
              <IconArrowTronButtonPhai />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
