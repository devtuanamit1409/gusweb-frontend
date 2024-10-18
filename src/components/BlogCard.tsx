import React from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchFilteredArticles } from "@/utils/GlobalApi";

export default async function BlogCard() {
  //prop: locale, page, pagesize, idcategoy, ?idsubcategory => danh sach tra ve da co sap xep moi nhat
  const data = await fetchFilteredArticles("vi", 1, 3, 4);
  return (
    <div className="custom-container laptop:py-20 py-10 flex items-center justify-center px-4 ">
      <div className="flex laptop:items-start  mobile:items-start tablet:items-center flex-col gap-6 ">
        <div className="flex  tablet:items-center justify-between w-full tablet:px-[90px] laptop:px-0 laptop:max-w-[1116px]  laptop:flex-row flex-col">
          <span className="tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage tablet:text-center">
            Những dự án khác có thể bạn quan tâm
          </span>
          <button
            type="button"
            className="bg-[#27B3E9] text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
          >
            Xem tất cả
          </button>
        </div>
        <div className="grid gap-6 laptop:grid-cols-3 tablet:px-[194px] laptop:px-0 max-w-[1116px]">
          {data.articles &&
            data.articles.slice(-3).map((item: any, index: number) => (
              <div
                key={index}
                className={`home-service-item__box col-span-${
                  data.articles.length === 1
                    ? "3"
                    : data.articles.length === 2
                    ? "2"
                    : "1"
                }`}
              >
                <div>
                  <div className="relative flex flex-col ">
                    <div className="w-full h-[267px] overflow-hidden relative">
                      <Image
                        src={item.url}
                        alt={item.alt}
                        width={711}
                        height={267}
                        className="object-fill h-full rounded-[24px]"
                      />
                      <button className="background-LinearGradient absolute bottom-4 right-4 w-[85px] h-[26px]">
                        {item.sub_category}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6 w-full min-h-[168px]">
                    <div className="flex flex-col flex-grow justify-center gap-4 laptop:justify-between">
                      <div className="flex-col gap-4 flex">
                        <p>{item.createdAt}</p>
                        <p className="font-bricolage text-[20px] font-bold ">
                          {item.title}
                        </p>
                      </div>
                      <Link href={item.slug} className="text-blue-500">
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}