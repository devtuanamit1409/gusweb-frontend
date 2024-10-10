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

  // const [visibleSubCategoryCount, setVisibleSubCategoryCount] = useState(
  //   window.innerWidth < 768 ? 2 : 6
  // );
  // useEffect(() => {
  //   const handleResize = () => {
  //     setVisibleSubCategoryCount(window.innerWidth < 768 ? 2 : 6);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // const handleSubCategoryClick = (index: number) => {
  //   setActiveIndex(index); // Đặt active index
  //   scrollToActiveIndex(index); // Cuộn đến nút tương ứng
  // };

  // const [startIndex, setStartIndex] = useState(0);

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => {
  //     const newIndex =
  //       (prevIndex - 1 + subCategory.length) % subCategory.length;
  //     scrollToActiveIndex(newIndex); // Cuộn đến nút mới
  //     return newIndex;
  //   });
  // };

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => {
  //     const newIndex = (prevIndex + 1) % subCategory.length;
  //     scrollToActiveIndex(newIndex); // Cuộn đến nút mới
  //     return newIndex;
  //   });
  // };
  // const scrollToActiveIndex = (index: number) => {
  //   const container = document.getElementById("sub-category-container");
  //   const button = document.getElementById(`button-${index}`);

  //   if (container && button) {
  //     // Lấy thông tin vị trí container và vị trí của button
  //     const containerRect = container.getBoundingClientRect();
  //     const buttonRect = button.getBoundingClientRect();

  //     // Kiểm tra nếu nút nằm ngoài tầm nhìn của container
  //     if (
  //       buttonRect.left < containerRect.left ||
  //       buttonRect.right > containerRect.right
  //     ) {
  //       const offset = buttonRect.left - containerRect.left;
  //       const scrollPosition =
  //         container.scrollLeft +
  //         offset -
  //         containerRect.width / 2 +
  //         buttonRect.width / 2;

  //       // Cuộn container để nút active được đưa vào tầm nhìn
  //       container.scrollTo({
  //         left: scrollPosition,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };
  // const [visibleCount, setVisibleCount] = useState(
  //   window.innerWidth < 768 ? 2 : subCategory.length
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setVisibleCount(window.innerWidth < 768 ? 2 : subCategory.length);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [subCategory.length]);

  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth < 768 ? 2 : 6
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 6);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubCategoryClick = (index: number) => {
    setActiveIndex(index); // Đặt active index
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + subCategory.length) % subCategory.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % subCategory.length);
  };

  return (
    <div className=" ">
      <BannerComponent intro={blogData} />
      <div className="mobile:w-[360px] tablet:w-[744px] laptop:w-[1080px] py-[8px] px-[16px] gap-10 flex mx-auto ">
        <div className="relative mobile:max-w-[328px] mobile:w-full h-[48px] tablet:max-w-[712px] tablet:w-full tablet:h-[48px] lg:w-full flex items-center justify-between tablet:justify-center laptop:justify-center rounded-2xl border px-2  mx-auto ">
          <AiOutlineLeft
            className={`cursor-pointer text-[#FFFFFF] bg-[#31BEE6] rounded-full w-[32px] h-[32px]  laptop:hidden mr-2`}
            size={32}
            onClick={handlePrev}
          />

          <div
            className="flex items-center justify-center flex-grow"
            id="sub-category-container"
          >
            <Swiper
              rewind={true}
              navigation={true}
              spaceBetween={10} // Khoảng cách giữa các slide
              className="mySwiper"
              style={{ width: "100%" }} // Đảm bảo Swiper chiếm toàn bộ chiều rộng
              breakpoints={{
                // Đặt số lượng slide hiển thị cho từng kích thước màn hình
                640: {
                  slidesPerView: 2, // Trên mobile (<= 640px) hiển thị 2 sub-category
                },
                768: {
                  slidesPerView: 6, // Trên tablet (>= 768px) hiển thị 6 sub-category
                },
                1024: {
                  slidesPerView: 6, // Trên laptop (>= 1024px) hiển thị 6 sub-category
                },
              }}
            >
              {subCategory.map((subCat: any, index: number) => (
                <SwiperSlide key={index}>
                  <button
                    id={`button-${index}`}
                    onClick={() => handleSubCategoryClick(index)}
                    className={`px-1 py-2 rounded-full font-medium cursor-pointer gap-2 flex ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] font-medium font-montserrat"
                        : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] font-medium font-montserrat"
                    } mobile:block`}
                  >
                    {subCat.title}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <div
            className="flex items-center justify-center flex-grow"
            id="sub-category-container"
          >
            <div className="flex flex-row tablet:gap-4 justify-between bg-red-400">
              {subCategory
                .slice(0, visibleCount)
                .map((subCat: any, index: number) => (
                  <button
                    key={index}
                    id={`button-${index}`}
                    onClick={() => handleSubCategoryClick(index)} // Sử dụng index trực tiếp
                    className={`px-1 py-2 rounded-full font-medium cursor-pointer gap-2 flex ${
                      activeIndex === index // So sánh với activeIndex
                        ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] font-medium font-montserrat"
                        : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] font-medium font-montserrat"
                    } mobile:block`}
                  >
                    {subCat.title}
                  </button>
                ))}
            </div>
          </div> */}

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
        </div> */}
        {/* <div className="w-full h-auto mt-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-8 mx-auto  ">
            {articles &&
              articles.map((item: any) => (
                <BlogCardComponent key={item.id} item={item} />
              ))}
          </div>
        </div> */}
        {/* <div className="w-full flex justify-center sm:mt-[25.5rem] mx-auto">
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
