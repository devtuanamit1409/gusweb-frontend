import React from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchFilteredArticles } from "@/utils/GlobalApi";
import BlogCardComponent from "./BlogCardComponent";

export default async function BlogCard() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    // Tính toán thời gian còn lại
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} giây trước`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} phút trước`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} giờ trước`;
    } else {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} ngày trước`;
    }
  };
  const data = await fetchFilteredArticles("vi", 1, 3, 4);
  return (
    <div className="custom-container laptop:py-20 py-10 flex items-center justify-center px-4 ">
      <div className="flex laptop:items-start  mobile:items-start tablet:items-center flex-col gap-6 ">
        <div className="flex  tablet:items-center justify-between w-full tablet:px-[90px] laptop:px-0 laptop:max-w-[1116px]  laptop:flex-row flex-col">
          <span className="tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage tablet:text-center">
            Những dự án khác có thể bạn quan tâm
          </span>
          <Link
            href="/blog"
            className="bg-[#27B3E9] flex items-center justify-center text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
          >
            <p>Xem tất cả</p>
          </Link>
        </div>
        <div className="grid gap-6 laptop:grid-cols-3 tablet:px-[194px] laptop:px-0 max-w-[1116px]">
          {data.articles &&
            data.articles.slice(-3).map((item: any, index: number) => (
              <div key={index}>
                <BlogCardComponent item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
