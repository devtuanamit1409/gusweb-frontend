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
import { useEffect, useState } from "react";

const Page = () => {
  const pageSize = 6;
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogData, setBlogData] = useState<any>(null);
  const [subCategory, setSubCategory] = useState<any>([]);
  const [blogOutStanding, setBlogOutStanding] = useState<any>(null);
  const [articles, setArticles] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);

  // Fetch initial blog data
  useEffect(() => {
    const getBlogData = async () => {
      const data = await fetchBlogPage("vi");
      setBlogData(data);

      // Fetch subcategories
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

  // Fetch outstanding article
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
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      <BannerComponent intro={blogData} />
      <div className="px-[162px] py-[80px] gap-10 custom-container mx-auto">
        <div className="w-[911px] h-[48px] rounded-2xl border py-2 px-4 gap-6 mx-auto flex flex-row justify-center items-center">
          <div className="flex items-center py-[5px] px-[12px] gap-2">
            {subCategory &&
              subCategory.map((category: any, index: number) => (
                <div key={index}>
                  <div
                    onClick={() => handleSubCategoryClick(index)}
                    className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] leading-[26px] font-medium font-montserrat"
                        : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] leading-[26px] font-medium font-montserrat"
                    }`}
                  >
                    {category.title}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {blogOutStanding && (
          <div className="w-[1116px] h-[421.82px] gap-6 flex flex-row justify-center items-center mx-auto pt-[75px]">
            <div>
              <Image
                width={546}
                height={421}
                src={blogOutStanding?.url || "/images/blogOutstanding.png"}
                alt={blogOutStanding?.alt || "image blog item outstanding"}
                className="rounded-2xl"
              />
            </div>
            <div className="w-[546px] gap-4">
              <h1 className="w-[126px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-preamble relative">
                #{blogOutStanding?.sub_category}
              </h1>
              <h2 className="h-[38px] font-bricolage font-bold text-[32px] leading-[38.4px] text-[#1C1C1C]">
                {blogOutStanding?.title}
              </h2>
              <p className="h-[96px] font-normal text-[16px] leading-6 font-montserrat line-clamp-2">
                {blogOutStanding?.description}
              </p>
              <div className="w-[108px] h-[42px] inline-flex items-center">
                <Link href={blogOutStanding?.slug || "/"}>
                  <div className="text-[#1FA9EC] font-medium text-[15px] leading-[18px] font-montserrat flex items-center">
                    Xem thêm
                    <ArrowRightOutlined
                      style={{ marginLeft: "10px", color: "#1FA9EC" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="w-[1116px] gap-6 pt-[50px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles &&
            articles.map((item: any) => (
              <BlogCardComponent key={item.id} item={item} />
            ))}
        </div>
        <div className="w-[312px] h-[49px] mx-auto">
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(pagination?.total / pagination?.pageSize)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
