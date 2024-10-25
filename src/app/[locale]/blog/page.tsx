"use client";
import BannerComponent from "@/components/BannerComponent";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import IconFabLeft from "@/components/Icons/IconFabLeft";
import IconFabRight from "@/components/Icons/IconFabRight";
import { IconArrowTronButtonTrai } from "@/components/Icons/IconArrowTronButtonTrai";
import { IconArrowTronButtonPhai } from "@/components/Icons/IconArrowTronButtonPhai";
import { useLocale, useTranslations } from "next-intl";
import { Empty } from "antd";
import BlogCardComponent from "@/components/BlogCardComponent";

const Page = ({ params }: { params: { slug: string } }) => {
  const t = useTranslations();
  const pageSize = 6;
  const localActive = useLocale();
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogData, setBlogData] = useState<any>(null);
  const [subCategorys, setSubCategorys] = useState<any>([]);
  const [blogOutStanding, setBlogOutStanding] = useState<any>(null);
  const [articles, setArticles] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);

  const searchParams = new URLSearchParams(window.location.search);
  const subCategoryQueryParam = searchParams.get("sub-category");

  useEffect(() => {
    const getBlogData = async () => {
      const data = await fetchBlogPage(localActive);
      setBlogData(data);

      const getListSubCategory = async () => {
        const data2 = await fetchSubCategoryByCategoryId(
          localActive,
          data.categoryId
        );
        // console.log("data2", data2);
        const subCategoriesWithAll = [
          { title: "Tất cả", id: 0 },
          ...data2.subCategories,
        ];
        // console.log("subCategoriesWithAll", subCategoriesWithAll);
        setSubCategorys(subCategoriesWithAll);

        if (subCategoryQueryParam) {
          const foundIndex = subCategoriesWithAll.findIndex(
            (subCategory) => subCategory.slug === subCategoryQueryParam
          );
          if (foundIndex !== -1) {
            setActiveIndex(foundIndex);
          }
        }
      };
      getListSubCategory();
    };

    getBlogData();
  }, [localActive, subCategoryQueryParam]);

  useEffect(() => {
    const getFilteredArticles = async () => {
      if (!blogData) return;

      const filteredArticles = await fetchFilteredArticles(
        localActive,
        currentPage,
        pageSize,
        blogData.categoryId,
        subCategorys[activeIndex]?.id || 0
      );

      setArticles(filteredArticles?.articles || []);
      setPagination(filteredArticles?.pagination || null);
    };

    getFilteredArticles();
  }, [blogData, activeIndex, currentPage, localActive, subCategorys]);

  useEffect(() => {
    const getBlogOutStanding = async () => {
      if (!blogData) return;

      const itemOut = await fetchFilteredArticles(
        localActive,
        1,
        1,
        blogData.categoryId,
        subCategorys[activeIndex]?.id || 0,
        true
      );

      setBlogOutStanding(itemOut?.articles[0]);
    };

    if (blogData) getBlogOutStanding();
  }, [blogData, activeIndex, localActive, subCategorys]);

  const handleSubCategoryClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      swiperRef.current.slideTo(activeIndex - 1);
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < subCategorys.length - 1) {
      swiperRef.current.slideTo(activeIndex + 1);
      setActiveIndex(activeIndex + 1);
    }
  };

  // const handleSlideChange = (swiper: any) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="">
      <BannerComponent intro={blogData} />
      <div className="px-4 laptop:px-0">
        <div className="mt-[60px] w-full h-[48px] tablet:w-full tablet:h-[48px] laptop:w-max laptop:max-w-[1116px] flex items-center border px-4 mx-auto rounded-2xl">
          <div
            className={`laptop:hidden rounded-full mr-4 shadow-md z-10 ${
              activeIndex <= 0
                ? "opacity-20 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handlePrev}
          >
            <IconArrowTronButtonTrai />
          </div>
          <Swiper
            slidesPerView={"auto"}
            className="h-[38px]"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {subCategorys.map((subCat: any, index: number) => (
              <SwiperSlide
                key={index}
                className="!w-max rounded-full text-center px-[12px] cursor-pointer"
                onClick={() => {
                  swiperRef.current.slideTo(index);
                  setActiveIndex(index);
                }}
                style={{
                  backgroundImage:
                    activeIndex === index
                      ? "linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)"
                      : "none",
                  color: activeIndex === index ? "#FFFFFF" : "#000000",
                }}
              >
                <p className="leading-[38px]">{subCat.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`laptop:hidden rounded-full ml-4 shadow-md z-10 ${
              activeIndex >= subCategorys.length - 1
                ? "opacity-20 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handleNext}
          >
            <IconArrowTronButtonPhai />
          </div>
        </div>

        {blogOutStanding && (
          <div className="w-full mobile:w-full h-auto tablet:w-full laptop:max-w-[1116px] laptop:w-full  flex flex-col lg:flex-row justify-center items-center mt-[40px] mx-auto tablet:px-[106px] laptop:px-4 gap-6 ">
            <div className="w-full laptop:w-1/2 ">
              <Image
                width={500}
                height={400}
                src={blogOutStanding?.url || "/images/blogOutstanding.png"}
                alt={blogOutStanding?.alt || "image blog item outstanding"}
                className="rounded-2xl w-full h-auto tablet:max-h-[542px] laptop:max-h-[420px] object-cover"
              />
            </div>
            <div className="w-full laptop:w-1/2 flex flex-col gap-4">
              <div className="w-max h-[38px] text-preamble px-1 relative">
                <h1 className=" font-bricolage font-normal text-2xl leading-[38.4px]">
                  #{blogOutStanding?.sub_category}
                </h1>
              </div>

              <h2 className="font-bricolage font-bold text-[32px] leading-[38.4px] text-[#1C1C1C] ">
                {blogOutStanding?.title}
              </h2>
              <p className="font-normal text-[16px] leading-6 font-montserrat">
                {blogOutStanding?.description}
              </p>
              <div className="w-max rounded inline-flex items-center gap-6 ">
                <Link href={blogOutStanding?.slug || "/"}>
                  <div className="text-[#1FA9EC] w-[110px] h-[18px] font-medium text-[15px] leading-[18px] font-montserrat flex items-center ">
                    {t("cardComponet.viewMore")}
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
        )}

        {articles.length > 0 ? (
          <div className="w-full max-w-[1116px] mx-auto px-[39px] tablet:px-[178px] laptop:px-4 mt-[40px]">
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6 mx-auto  ">
              {articles.map((item: any, index: number) => (
                <div key={index}>
                  <BlogCardComponent item={item} />
                </div>
              ))}
            </div>
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={Math.ceil(pagination?.total / pagination?.pageSize)}
            />
          </div>
        ) : (
          <div>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
