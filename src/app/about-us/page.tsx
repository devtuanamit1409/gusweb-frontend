"use client";
import BannerComponent from "@/components/BannerComponent";

import React, { useEffect } from "react";
import Image from "next/image";
import SponsorSwiper from "@/components/ SponsorSwiper";
import ResponsibilityComponent from "./components/ResponsibilityComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import InfoComponent from "@/components/InfoComponent";
import Link from "next/link";
const Page = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="w-full h-full">
      <div className="custom-container">
        <BannerComponent />
        <SponsorSwiper />
        <div className="h-[716px] justify-center items-center flex relative">
          <Image
            src="/images/Framea.png"
            width={418}
            height={489}
            alt=""
            className="absolute top-10 right-8"
          />
          <InfoComponent />
        </div>
        <div className="py-20 px-[162px] gap-10 justify-center items-center flex flex-col">
          <div
            className="w-[736px] h-[236px] flex flex-col gap-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="h-[172px] gap-2 items-center flex flex-col">
              <p className="font-normal text-[24px] line-clamp-1 leading-[29px] text-[#1C1C1C] relative text-preamble uppercase text-center">
                NGUYÊN TẮC LÀM VIỆC GUSWEB
              </p>
              <p className="font-bold text-[56px] leading-[68px] text-[#1C1C1C] text-center line-clamp-2">
                Tinh Thần Trách Nhiệm Cao
              </p>
            </div>
            <p className="h-[48px] line-clamp-2 font-normal textt-4 leading-6 text-center text-[#1C1C1C]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              qui facilis dolore culpa nihil consequuntur atque illo. Atque
              tenetur natus, incidunt non in fuga ipsum aliquam error quisquam
              molestiae inventore.
            </p>
          </div>
          <div className="h-[472px] justify-center items-center flex">
            <div className="w-[1116px] flex flex-col gap-6">
              <ResponsibilityComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[448px] bg-slate-500 relative justify-center items-center flex">
        <Image
          src="/images/Section1.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0  "
        />
        <div className="w-[1116px] justify-start flex">
          <div className="w-[642px] h-[382px] text-[#FEFEFE] flex flex-col gap-10 z-50">
            <div className="h-[134px] flex flex-col w-[642px]">
              <p className="font-bold text-[56px] leading-[68px]">
                Kinh nghiệm của GUSWEB
              </p>
            </div>
            <p>
              Tại GUSWEB, chúng tôi có 1 đội ngũ nghiên cứu về mô hình Agile
              cũng như Framework SCRUM để thực hiện chúng tốt hơn. Áp dụng SCRUM
              vào việc phát triển phần mềm theo phương pháp Agile - một phương
              pháp phát triển phần mềm linh hoạt đã giúp chúng tôi đưa sản phẩm
              đến người dùng một cách nhanh nhất và tối đa giá trị cho Khách
              hàng.
            </p>
            <div className="w-[366px] h-[42px] flex flex-row gap-6">
              <button className="ant-btn w-[166px]">
                <Link href="">Tải eBook</Link>
              </button>
              <button className="gradient-text  w-[166px]">
                <Link href="">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <LeaderComponent/> */}
    </div>
  );
};

export default Page;
