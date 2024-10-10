"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { fetchFilteredArticles } from "@/utils/GlobalApi";

const CaseStudies: React.FC<any> = ({ data }) => {
 
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
    <div className="custom-container laptop:gap-[108px] laptop:py-[108px] laptop:px-20 tablet:py-20 mobile:py-10 tablet:gap-20 pb-[100px] mobile:gap-10 flex flex-col justify-center items-center">
      <div className="laptop:max-w-[1116px] laptop:h-[203px] tablet:max-w-[500px] mobile:max-w-[328px] tablet:h-[403px] mobile:h-[492px] items-center flex laptop:flex-row flex-col justify-center  gap-6 w-full">
        <div className="laptop:max-w-[557px]  flex flex-col w-full">
          <h1 className="max-w-[246px] font-normal text-[24px] leading-[38.4px] text-[#1C1C1C] text-preamble relative w-full">
            DISCOVER OUR WORK
          </h1>
          <h2 className="max-w-[557px] font-bold font-bricolage laptop:-[32px] laptop:leading-[38.4px] tablet:text-[32px] tablet:leading-[38.4px] mobile:text-[24px] mobile:leading-[28.8px] pt-[27px] w-full">
            {data.title}
          </h2>
        </div>
        <div className="laptop:max-w-[502px] tablet:max-w-[500px] w-full font-normal leading-[28.8px] laptop:pl-2">
          {data.description}
        </div>
      </div>

      <div className="laptop:max-w-[1113px] tablet:max-w-[500px] mobie:max-w-[328px] tablet:gap-10 flex flex-col w-full">
        <div className="grid laptop:grid-cols-2 tablet:grid-cols-1 laptop:gap-24 tablet:gap-10 mobile:gap-10 items-start justify-center gap-4 w-full">
          {currentItems.map((item: any, index: number) => (
            <Link
              href={item.slug}
              key={index}
              className="laptop:max-w-[500px] laptop:max-h-[636px] tablet:max-h-[636px] tablet:max-w-[500px] mobile:max-h-[490px] mobile:max-w-[328px] gap-8  bg-white flex flex-col items-center justify-center laptop:justify-center laptop:items-start w-full h-full"
            >
              <div className="relative laptop:min-w-[500px] laptop:min-h-[500px] tablet:min-w-[500px] tablet:min-h-[500px] mobile:min-w-[328px] mobile:min-h-[328px] w-full h-full">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  src={item.url || "/images/Rectangle5067.png"}
                  alt={item.alt || "day la hinh anh case studies"}
                  className="rounded-[24px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bricolage font-normal text-[24px] leading-[38.4px] laptop:line-clamp-1 tablet:line-clamp-1 mobile:line-clamp-2">
                  {item.sub_category}
                </h1>
                <h2 className="font-bricolage font-bold text-[42px] leading-[50.4px] line-clamp-1">
                  {item.title}
                </h2>
              </div>
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
      </div>
    </div>
  );
};
export default CaseStudies;
