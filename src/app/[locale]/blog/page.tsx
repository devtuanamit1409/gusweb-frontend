"use client";
import BlogCard from "@/components/BlogCard";
import PaginationComponent from "@/components/PaginationComponent";
import { CardModel } from "@/models/cardModel";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Sử dụng react-icons cho icon left/right

const Page = () => {
  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref cho phần danh sách cuộn

  // Scroll handling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  // Sample card data
  const cardsData: CardModel[] = [
    {
      url: "/images/blog.png",
      title: "AGILE SCRUM - Quá trình quản lý và thực hiện dự án",
      link: "#",
      date: "10 ngày trước",
    },
    {
      url: "/images/blog.png",
      title: "AGILE SCRUM - Quá trình quản lý và thực hiện dự án",
      link: "#",
      date: "10 ngày trước",
    },
    // ... thêm các mục khác
  ];

  // Calculate pagination variables
  const totalItems = cardsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

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

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full">
      <div className="px-[162px] py-[80px] gap-10 custom-container mx-auto ">
        {/* Categories Filter */}
        <div className="relative w-full tablet:max-w-[712px] laptop:max-w-[911px] mobile:w-full  h-[48px] rounded-2xl border py-2 px-4 gap-6 mx-auto flex items-center">
          {/* Left icon */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 tablet:flex hidden items-center justify-center w-10 h-full bg-white rounded-l-2xl z-10"
          >
            <FaChevronLeft className="text-gray-500" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center py-[5px] px-[12px] gap-2 overflow-x-auto scrollbar-hide justify-between"
          >
            {categories.map((category, index) => (
              <Link key={index} href={category.href} passHref>
                <div
                  onClick={() => setActiveIndex(index)} // Update state on click
                  className={`px-4 py-2 rounded-full font-medium cursor-pointer ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white text-[15px] leading-[26px] font-medium font-montserrat"
                      : "bg-[#F7F7F7] text-[#363636] opacity-50 text-[15px] leading-[26px] font-medium font-montserrat"
                  }`}
                >
                  {category.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Right icon */}
          <button
            onClick={scrollRight}
            className="absolute right-0 tablet:flex hidden items-center justify-center w-10 h-full bg-white rounded-r-2xl z-10"
          >
            <FaChevronRight className="text-gray-500" />
          </button>
        </div>

        {/* Featured Blog Post Section */}
        <div className="w-[1116px] h-[421.82px] gap-6 flex flex-row justify-center items-center mx-auto mt-[50px] mb-[50px]">
          <div>
            <Image
              width={546}
              height={421}
              src="/images/GusWeb - Blog1 1.png"
              alt="Featured Post"
              className="rounded-2xl"
            />
          </div>
          <div className="w-[546px] h-[254px] gap-4">
            <h1 className="w-[126px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-preamble relative mb-[5px]">
              #CÔNG NGHỆ UI
            </h1>
            <h2 className="h-[38px] font-bricolage font-bold text-[32px] leading-[38.4px] text-[#1C1C1C] mb-[18px]">
              Thiết kế UX và UI là gì?
            </h2>
            <p className="h-[96px] font-normal text-[16px] leading-6 font-montserrat line-clamp-2 mb-[16px]">
              UI (User Interface) trong thiết kế UI là viết tắt của “giao diện
              người dùng”. Giao diện người dùng là bố cục đồ họa của một ứng
              dụng. UX (User Experience) là “trải nghiệm người dùng”. Trải
              nghiệm của người dùng về ứng dụng được xác định...
            </p>

            <div className="w-[108px] h-[42px] inline-flex items-center">
              <Link href="https://example.com">
                <div className="text-[#1FA9EC] font-medium text-[15px] leading-[18px] font-montserrat flex items-center ml-2">
                  Xem thêm
                  <ArrowRightOutlined
                    style={{ marginLeft: "10px", color: "#1FA9EC" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="w-[1116px] gap-6 mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="home-service-item__box w-[356px] h-[454px] flex justify-center"
              >
                <div>
                  <div className="relative">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={367}
                      height={267}
                      className="rounded-2xl !w-[356px] !h-[267px]"
                    />
                    <button className="background-LinearGradient absolute bottom-4 right-4 w-[85px] h-[26px]">
                      eBook
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <p>{item.date}</p>
                    <p className="font-bricolage text-[20px] font-bold">
                      {item.title}
                    </p>
                    <div className="w-[108px] h-[42px] inline-flex items-center bottom-0">
                      <Link href={item.link}>
                        <div className="text-[#1FA9EC] font-medium text-[15px] leading-[18px] font-montserrat flex items-center ml-2">
                          Xem thêm
                          <ArrowRightOutlined
                            style={{ marginLeft: "10px", color: "#1FA9EC" }}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Component */}
        <div className="w-full flex justify-center mt-6">
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
