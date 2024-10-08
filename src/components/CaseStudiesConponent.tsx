"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { fetchFilteredArticles } from "@/utils/GlobalApi";

const CaseStudies: React.FC<any> = ({ data }) => {
  // const data = [
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  //   {
  //     imgSrc: "/images/Rectangle 5067.png",
  //     title: "Web Design UI/UX & Development",
  //     heading: "McLaren Group",
  //   },
  // ];

  const [currentPage, setCurrentPage] = useState(1);
  const [articleDatas, setArticleDatas] = useState<any>([]);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articleDatas?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articleDatas?.length / itemsPerPage);

  useEffect(() => {
    const getArticleData = async () => {
      const datas = await fetchFilteredArticles("vi", 1, 6, data.categoryId);
      setArticleDatas(datas.articles);
    };

    getArticleData();
  }, []);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full py-[80px] px-[162px] gap-[108px] pb-[100px]">
      <div className="w-[1116px] items-center flex flex-row mx-auto">
        <div className="w-[557px] gap-6 ">
          <h1 className="w-[246px] font-normal text-2xl leading-[38.4px] text-[#1C1C1C] text-preamble relative">
            DISCOVER OUR WORK
          </h1>
          <h2 className="w-[557px] font-bold font-bricolage text-[32px] leading-[38.4px] pt-[27px]">
            {data.title}
          </h2>
        </div>
        <div className="w-[502px] font-normal leading-[28.8px] pl-2">
          {data.description}
        </div>
      </div>

      <div className="w-[1113px] gap-[108px] mx-auto flex flex-col">
        <div className="grid grid-cols-2 gap-4 w-full">
          {currentItems.map((item: any, index: number) => (
            <Link
              href={item.slug}
              key={index}
              className="w-full gap-8 bg-white"
            >
              <Image
                priority
                width={500}
                height={500}
                src={item.url || "/images/Rectangle5067.png"}
                alt={item.alt || "day la hinh anh case studies"}
                className="object-contain rounded-3xl h-[500px] w-[500px]"
              />
              <h1 className="font-bricolage font-normal text-2xl leading-[38.4px] pt-2">
                {item.sub_category}
              </h1>
              <h2 className="w-full font-bricolage font-bold text-[42px] leading-[50.4px] pt-2">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
        <div className="pagination mt-6 flex justify-center items-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`flex items-center text-gray-500 px-4 py-2 rounded-md ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:text-blue-500"
            }`}
            disabled={currentPage === 1}
          >
            <LeftOutlined />
            <span className="ml-2">Previous</span>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`flex items-center text-gray-500 px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:text-blue-500"
            }`}
            disabled={currentPage === totalPages}
          >
            <span className="mr-2">Next</span>
            <RightOutlined />
          </button>
        </div>

        {/* <div className="pagination mt-6">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={data.length}
            onChange={handlePageChange}
            itemRender={(page, type, originalElement) => {
              if (type === "prev") {
                return (
                  <button
                    className={`flex items-center text-gray-500 px-4 py-1.5 rounded-md ${
                      currentPage === 1
                        ? "cursor-not-allowed"
                        : "hover:text-blue-500"
                    }`}
                    onClick={() => handlePageChange(page)}
                    disabled={currentPage === 1}
                  >
                    <LeftOutlined />
                    <span className="ml-2">Previous</span>
                  </button>
                );
              }
              if (type === "next") {
                return (
                  <button
                    className={`flex items-center text-gray-500 px-4 py-1.5 rounded-md ${
                      currentPage === Math.ceil(data.length / itemsPerPage)
                        ? "cursor-not-allowed"
                        : "hover:text-blue-500"
                    }`}
                    onClick={() => handlePageChange(page)}
                    disabled={
                      currentPage === Math.ceil(data.length / itemsPerPage)
                    }
                  >
                    <span className="mr-2">Next</span>
                    <RightOutlined />
                  </button>
                );
              }
              return (
                <button
                  className={`mx-2 px-3 py-1.5 rounded-md ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            }}
          />
        </div> */}
      </div>
    </div>
  );
};
export default CaseStudies;
