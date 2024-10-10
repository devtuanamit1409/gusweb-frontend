"use client";
import BannerComponent from "@/components/BannerComponent";
import BlogCardComponent from "@/components/BlogCardComponent";
import PaginationComponent from "@/components/PaginationComponent";
import {
  fetchBlogPage,
  fetchFilteredArticles,
  fetchSubCategoryByCategoryId,
} from "@/utils/GlobalApi";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Page = () => {
  const pageSize = 6;
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogData, setBlogData] = useState<any>(null);
  const [subCategory, setSubCategory] = useState<any>([]);
  const [blogOutStanding, setBlogOutStanding] = useState<any>(null);
  const [articles, setArticles] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);

  useEffect(() => {
    const getBlogData = async () => {
      const data = await fetchBlogPage("vi");
      setBlogData(data);

      const getListSubCategory = async () => {
        const data2 = await fetchSubCategoryByCategoryId("vi", data.categoryId);

        const subCategoriesWithAll = [
          { title: "Tất cả", id: 0 },
          ...data2.subCategories,
        ];

        setSubCategory(subCategoriesWithAll);
      };
      getListSubCategory();
    };

    getBlogData();
  }, []);

  useEffect(() => {
    const getFilteredArticles = async () => {
      if (!blogData) return;

      const filteredArticles = await fetchFilteredArticles(
        "vi",
        currentPage,
        pageSize,
        blogData.categoryId,
        subCategory[activeIndex]?.id || 0
      );

      setArticles(filteredArticles?.articles || []);
      setPagination(filteredArticles?.pagination || null);
    };

    getFilteredArticles();
  }, [blogData, activeIndex, currentPage]);

  useEffect(() => {
    const getBlogOutStanding = async () => {
      if (!blogData) return;

      const itemOut = await fetchFilteredArticles(
        "vi",
        1,
        1,
        blogData.categoryId,
        0,
        true
      );

      setBlogOutStanding(itemOut?.articles[0]);
    };

    if (blogData) getBlogOutStanding();
  }, [blogData]);

  const handleSubCategoryClick = (index: number) => {
    setActiveIndex(index);
    scrollToActiveIndex(index);
    // setCurrentPage(1);
  };

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : subCategory.length - 1;
      return newIndex;
    });
    scrollToActiveIndex(
      activeIndex > 0 ? activeIndex - 1 : subCategory.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex < subCategory.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
    scrollToActiveIndex(
      activeIndex < subCategory.length - 1 ? activeIndex + 1 : 0
    );
  };
  const scrollToActiveIndex = (index: number) => {
    const container = document.getElementById("sub-category-container");
    const button = document.getElementById(`button-${index}`);

    if (container && button) {
      // Kiểm tra null
      container.scrollTo({
        left: button.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full">
      {/* <BannerComponent intro={blogData} /> */}
      <div className="mobile:w-[360px] tablet:w-[744px] laptop:w-[1080px] py-[8px] px-[16px] gap-10 custom-container mx-auto bg-red-400">
        <div className="relative mobile:max-w-[328px] mobile:w-full h-[48px] tablet:max-w-[712px] tablet:w-full tablet:h-[48px] lg:w-full flex items-center justify-between tablet:justify-center laptop:justify-center rounded-2xl border px-2 overflow-hidden mx-auto bg-cyan-300">
          <AiOutlineLeft
            className={`cursor-pointer text-[#FFFFFF] bg-[#31BEE6] rounded-full w-[32px] h-[32px]  laptop:hidden mr-2`}
            size={32}
            onClick={handlePrev}
          />

          <div className="flex overflow-hidden items-center justify-center mx-auto gap-2 flex-grow">
            {subCategory.map((category: any, index: number) =>
              activeIndex === index ? (
                <div key={index} className="flex flex-row">
                  {/* Chỉ hiển thị 2 sub-category trên mobile và 6 trên tablet */}
                  {subCategory
                    .slice(0, window.innerWidth < 768 ? 2 : 6) // 2 trên mobile, 6 trên tablet
                    .map((subCat: any, subIndex: number) => (
                      <button
                        key={subIndex}
                        id={`button-${activeIndex + subIndex}`}
                        onClick={() =>
                          handleSubCategoryClick(activeIndex + subIndex)
                        }
                        className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                          activeIndex + subIndex === index
                            ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] leading-[26px] font-medium font-montserrat"
                            : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] leading-[26px] font-medium font-montserrat"
                        } mobile:block tablet:block laptop:hidden`}
                      >
                        {subCat.title}
                      </button>
                    ))}
                </div>
              ) : null
            )}
          </div>

          <AiOutlineRight
            className={`cursor-pointer text-[#FFFFFF] bg-[#31BEE6] rounded-full w-[32px] h-[32px] laptop:hidden ml-2`}
            size={32}
            onClick={handleNext}
          />
        </div>

        {/* <div className="w-full max-w-[328px] h-auto sm:max-w-[500px] lg:max-w-[1116px]  flex flex-col lg:flex-row justify-center mt-[48px] mx-auto  gap-6">
          <div>
            <Image
              width={546}
              height={421}
              src={blogOutStanding?.url || "/images/blogOutstanding.png"}
              alt={blogOutStanding?.alt || "image blog item outstanding"}
              className="rounded-2xl w-[328px] h-[258.76px] sm:w-[500px] sm:h-[403.68px] lg:w-[546px] lg:h-[421.82px]"
            />
          </div>
          <div className="w-[328px] h-[364px] md:w-[500px] md:h-[278px] lg:w-[546px] gap-4 lg:gap-8 ">
            <h1 className="w-[152px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-preamble relative ">
              #{blogOutStanding?.sub_category}
            </h1>
            <h2 className="h-[76px] md:w-[500px] md:h-[38px] lg:h-[38px] font-bricolage font-bold text-[32px] leading-[38.4px] text-[#1C1C1C] ">
              {blogOutStanding?.title}
            </h2>
            <p className="h-[168px] md:h-[120px] lg:h-[96px] font-normal text-[16px] leading-6 font-montserrat">
              {blogOutStanding?.description}
            </p>
            <div className="w-[108px] h-[42px] rounded inline-flex items-center gap-6  mt-[1px]">
              <Link href={blogOutStanding?.slug || "/"}>
                <div className="text-[#1FA9EC] w-[110px] h-[18px] font-medium text-[15px] leading-[18px] font-montserrat flex items-center ">
                  Xem thêm
                  <ArrowRightOutlined
                    style={{
                      marginLeft: "10px",
                      color: "#1FA9EC",
                      width: 16,
                      height: 16,
                    }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-8 mx-auto  ">
            {articles &&
              articles.map((item: any) => (
                <BlogCardComponent key={item.id} item={item} />
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center sm:mt-[25.5rem] mx-auto">
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(pagination?.total / pagination?.pageSize)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
