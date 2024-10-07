"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import arrow icons
import PaginationComponent from "./PaginationComponent";
const CaseStudies = () => {
  const data = [
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
  const item = {
    premble: "DISCOVER OUR WORK",
    title:
      "Every design we crafted focuses on user-centered experience and our client's business goal.",
    description:
      " We provide technology solutions that are personalized to your   company's needs, allowing you to save time and stay ahead of the   competition. Concentrate on building your business while we handle the  technology. Concentrate on building your business while we handle the   technology. Concentrate on building your business while we handle the  technology.",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage); // Calculate total pages

  return (
    <div className="w-full py-[80px] px-[162px] gap-[108px] pb-[100px]">
      <div className="w-[1116px] items-center flex flex-row mx-auto">
        <div className="w-[557px] gap-6 ">
          <h1 className="w-[246px] font-normal text-2xl leading-[38.4px] text-[#1C1C1C] text-preamble relative">
            {item.premble}
          </h1>
          <h2 className="w-[557px] font-bold font-bricolage text-[32px] leading-[38.4px] pt-[27px]">
            {item.title}
          </h2>
        </div>
        <div className="w-[502px] h-[203px] text-[18px] font-normal leading-[28.8px] pl-2">
          {item.description}
        </div>
      </div>

      <div className="w-[1113px] gap-[108px] mx-auto flex flex-col">
        <div className="grid grid-cols-2 gap-4 w-full">
          {currentItems.map((item, index) => (
            <div key={index} className="w-full gap-8 bg-white">
              <Image
                width={500}
                height={500}
                src={item.imgSrc}
                alt={item.title}
                className="object-cover rounded-3xl"
              />
              <h1 className="font-bricolage font-normal text-2xl leading-[38.4px] pt-2">
                {item.title}
              </h1>
              <h2 className="w-full font-bricolage font-bold text-[42px] leading-[50.4px] pt-2">
                {item.heading}
              </h2>
            </div>
          ))}
        </div>
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
export default CaseStudies;
