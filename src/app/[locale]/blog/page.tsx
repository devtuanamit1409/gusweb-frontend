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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
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
        // console.log("data2", data2);
        const subCategoriesWithAll = [
          { title: "Tất cả", id: 0 },
          ...data2.subCategories,
        ];
        // console.log("subCategoriesWithAll", subCategoriesWithAll);
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

  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth < 768 ? 2 : 6
  );
  const [screenSize, setScreenSize] = useState("mobile"); // Default to mobile
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 743) {
        setScreenSize("mobile"); // Mobile
      } else if (width >= 744 && width <= 1024) {
        setScreenSize("tablet"); // Tablet
      } else if (width > 1025 && width < 1440) {
        setScreenSize("laptop"); // Laptop
      } else {
        setScreenSize("large"); // Large desktop
      }
    };

    // Initial check
    handleResize();

    // Event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const slidesPerView = () => {
    switch (screenSize) {
      case "mobile":
        return 2; // 2 slides for mobile
      case "tablet":
        return 6; // 3 slides for tablet
      case "laptop":
        return 7; // 4 slides for laptop
      default:
        return 6; // 6 slides for large screens
    }
  };
  const handleSubCategoryClick = (index: number) => {
    setActiveIndex(index);
  };
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + subCategory.length) % subCategory.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % subCategory.length);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); 
  };
  return (
    <div className="">
      <BannerComponent intro={blogData} />
      <div className=" mobile:w-[360px] tablet:w-[744px] laptop:min-w-[1440px] laptop:w-full py-[8px] px-[16px] laptop:px-[162px] gap-10 flex flex-col justify-center laptop:custom-container items-center mx-auto ">
        <div className=" mobile:max-w-[360px] mobile:w-full h-[48px] tablet:max-w-[712px] tablet:w-full tablet:h-[48px]  laptop:max-w-[1080px] laptop:w-full flex items-center laptop:justify-center border px-2 mx-auto ">
          <AiOutlineLeft
            size={32}
            onClick={handlePrev}
            className="cursor-pointer rounded-full bg-[#31BEE6] w-[32px] h-[32px] m-1 z-10" 
          />
          <Swiper
            slidesPerView={slidesPerView()}
            className="flex items-center w-full h-[38px] relative" 
            onSlideChange={handleSlideChange}
          >
            {subCategory.map((subCat: any, index: number) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center rounded-full text-center px-[12px] py-[5px]"
                id={`button-${index}`}
                onClick={() => handleSubCategoryClick(index)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    activeIndex === index ? "#31BEE6" : "transparent",
                  color: activeIndex === index ? "#FFFFFF" : "#000000",
                }}
              >
                {subCat.title}
              </SwiperSlide>
            ))}
          </Swiper>
          <AiOutlineRight
            size={32}
            onClick={handleNext}
            className="cursor-pointer rounded-full bg-[#31BEE6] w-[32px] h-[32px] m-1 z-10" 
          />
        </div>

        <div className="w-full mobile:max-w-[360px] mobile:w-full h-auto tablet:max-w-[500px] tablet:w-full laptop:max-w-[1116px] laptop:w-full  flex flex-col lg:flex-row justify-center mt-[48px] mx-auto  gap-6 ">
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
        <div className="  h-auto mt-[48px] laptop:w-[1116px]  tablet:w-[356px] mobile:w-[312px]">
          <div className="grid grid-cols-1 laptop:grid-cols-3  gap-6 lg:gap-8 mx-auto  ">
            {articles &&
              articles.map((item: any, index: number) => (
                <BlogCardComponent key={index} item={item} />
              ))}
          </div>
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(pagination?.total / pagination?.pageSize)}
          />
        </div>
        <div className="w-full flex justify-center sm:mt-[25.5rem] mx-auto"></div>
      </div>
    </div>
  );
};

export default Page;
