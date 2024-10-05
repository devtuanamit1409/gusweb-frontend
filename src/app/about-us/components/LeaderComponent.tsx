"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const LeaderComponent = () => {
  const datas = [
    {
      id: 1,
      name: "Lê Quốc Thạo",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Nhà Sáng Lập", "Tổng Giám Đốc"],
    },
    {
      id: 2,
      name: "Trần Nhật Anh",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Đồng Sáng Lập", "Giám Đốc Vận Hành"],
    },
    {
      id: 3,
      name: "Lê Quốc Thạo",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Nhà Sáng Lập", "Tổng Giám Đốc"],
    },
    {
      id: 4,
      name: "Trần Nhật Anh",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Đồng Sáng Lập", "Giám Đốc Vận Hành"],
    },
    {
      id: 5,
      name: "Lê Quốc Thạo",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Nhà Sáng Lập", "Tổng Giám Đốc"],
    },
    {
      id: 6,
      name: "Trần Nhật Anh",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Đồng Sáng Lập", "Giám Đốc Vận Hành"],
    },
    {
      id: 7,
      name: "Lê Quốc Thạo",
      image: "/images/Avatar.png",
      gender: "Ông",
      positions: ["Nhà Sáng Lập", "Tổng Giám Đốc"],
    },
  ];

  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const expertsSwiperRef = useRef<SwiperType | null>(null);

  const handlePrevExpert = () => {
    if (expertsSwiperRef.current) {
      const newIndex = Math.max(currentExpertIndex - 1, 0);
      expertsSwiperRef.current.slideTo(newIndex);
      setCurrentExpertIndex(newIndex);
    }
  };

  const handleNextExpert = () => {
    if (expertsSwiperRef.current) {
      const maxIndex = datas.length - 1;
      const newIndex = Math.min(currentExpertIndex + 1, maxIndex);
      expertsSwiperRef.current.slideTo(newIndex);
      setCurrentExpertIndex(newIndex);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1116px] h-[112px] gap-40 py-20 bg-slate-600">
        <p className="text-center text-white text-2xl mb-8">
          Gặp gỡ những trụ cột chính của GUSWEB
        </p>
      </div>
      <div className="w-full h-[577px] flex gap-4 items-center ">
        <button
          onClick={handlePrevExpert}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <Swiper
          spaceBetween={18}
          
          slidesPerView={5}
          // centeredSlides={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSwiper={(swiper) => {
            expertsSwiperRef.current = swiper;
            setCurrentExpertIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setCurrentExpertIndex(swiper.activeIndex);
          }}
        >
          {datas.map((data, index) => (
            <SwiperSlide key={data.id}>
              <div
                className={`${
                  index === currentExpertIndex
                    ? "w-[400px] h-[400px] border-4 border-blue-500"
                    : "w-[356px] h-[322px]"
                } flex flex-col justify-center items-center`}
              >
                <Image width={161} height={161} src={data.image} alt="" />
                <div className="mt-2 text-center">
                  <h3 className="text-[#3B559E] font-semibold line-clamp-1">
                    {data.name}
                  </h3>
                  <span className="text-[12px] text-[#637381] line-clamp-2">
                    {data.positions.join(", ")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handleNextExpert}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LeaderComponent;
