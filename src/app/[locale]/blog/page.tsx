"use client";
import BannerComponent from "@/components/BannerComponent";
import { Button, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import PaginationComponent from "@/components/PaginationComponent";
import BlogCardComponent from "@/components/BlogCardComponent";
const page = () => {
  const data = {
    premble: "GUSWEB SHARING",
    title: "",
    description:
      "Chia sẻ các mẹo, kiến thức và chiến lược để giúp doanh nghiệp tận dụng website như một công cụ mạnh mẽ trong marketing và phát triển thương hiệu, hỗ trợ tăng doanh thu.",
  };

  const item = [
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
  ];
  const categories = [
    { name: "Tất cả", href: "", id: 0 },
    { name: "Kiến thức website", href: "", id: 1 },
    { name: "Công nghệ", href: "", id: 2 },
    { name: "UX UI", href: "", id: 3 },
    { name: "Dự án", href: "", id: 4 },
    { name: "eBook", href: "", id: 5 },
    { name: "Hoạt động tại GUSWEB", href: "", id: 6 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <BannerComponent
        premble={data.premble}
        title={data.title}
        description={data.description}
      />
      <div className="px-[162px] py-[80px] gap-10 custom-container mx-auto ">
        <div className="w-[911px] h-[48px] rounded-2xl border py-2 px-4 gap-6  mx-auto flex flex-row justify-center items-center">
          <div className="flex items-center  py-[5px] px-[12px] gap-2 ">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} passHref>
                <div
                  onClick={() => setActiveIndex(index)} // Cập nhật trạng thái khi nhấp vào nút
                  className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] leading-[26px] font-medium font-montserrat" // Màu nền cho nút đang hoạt động
                      : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] leading-[26px] font-medium font-montserrat" // Màu nền cho nút không hoạt động
                  }`}
                >
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[1116px] h-[421.82px] gap-6  flex flex-row justify-center items-center mx-auto pt-[75px]">
          <div className="">
            <Image
              width={546}
              height={421}
              src="/images/GusWeb - Blog1 1.png"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="w-[546px]  gap-4   ">
            <h1 className="w-[126px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-preamble relative">
              #CÔNG NGHỆ UI
            </h1>
            <h2 className="h-[38px] font-bricolage font-bold text-[32px] leading-[38.4px] text-[#1C1C1C]">
              Thiết kế UX và UI là gì?
            </h2>
            <p className="h-[96px] font-normal text-[16px] leading-6 font-montserrat line-clamp-2">
              UI (User Interface) trong thiết kế UI là viết tắt của “giao diện
              người dùng”. Giao diện người dùng là bố cục đồ họa của một ứng
              dụng. UX (User Experience) là “trải nghiệm người dùng”. Trải
              nghiệm của người dùng về ứng dụng được xác định...
            </p>

            <div className="w-[108px] h-[42px] inline-flex items-center  ">
              <Link href="">
                <div className="text-[#1FA9EC] font-medium text-[15px] leading-[18px] font-montserrat flex items-center">
                  Xem thêm
                  <ArrowRightOutlined className="ml-2 h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[1116px] h-[932px] gap-6 bg-green-400 pt-[50px] mx-auto">
          {/* <BlogCardComponent  /> */}
        </div>
        <div className="w-[312px] h-[49px] bg-purple-300">
          {/* <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
