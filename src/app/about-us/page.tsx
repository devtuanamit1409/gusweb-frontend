"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ResponsibilityComponent from "./components/ResponsibilityComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import InfoComponent from "@/components/InfoComponent";
import Link from "next/link";
import LeaderComponent from "./components/LeaderComponent";
import { infoModel } from "@/models/inforModel";
import Target from "./components/TargetComponent";
import TargetComponent from "./components/TargetComponent";
import BannerComponent from "@/components/BannerComponent";
import Contact from "@/components/Contact";
const Page = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
  ];
  const info: infoModel = {
    image: "/images/Group 1000004070.png",
    alt: "About us",
    title: "GUSWEB",
    description:
      "GUSWEB là công ty chuyên cung cấp các giải pháp công nghệ thông tin hàng đầu tại Việt Nam. Chúng tôi luôn nỗ lực hoàn thiện các giải pháp toàn diện, nhằm đáp ứng nhu cầu chuyển đổi số trong nhiều lĩnh vực, giúp khách hàng tăng trưởng và phát triển bền vững.",
  };

  return (
    <div className="w-full h-full">
      <BannerComponent />
      <div className="custom-container relative">
        <div className="absolute top-20 right-24 w-[418px] h-[498px]">
          <Image
            src="/images/Framea.png"
            alt=""
            width={418}
            height={498}
            objectFit="cover"
          />
        </div>
        <div className="h-[716px] justify-center items-center flex ">
          <InfoComponent data={info} />
        </div>
        <div className="h-[716px] justify-center items-center flex ">
          <TargetComponent />
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
              <p className="title-custom font-bricolage line-clamp-2">
                Tinh Thần Trách Nhiệm Cao
              </p>
            </div>
            <p className="lable-custom">
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
            <div className="h-[134px] flex flex-col w-[641px]">
              <p className="title-custom font-bricolage !text-[#FEFEFE] w-[400px]">
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
      <div className="h-[946px] flex ">
        <div className="custom-container px-[160px] py-20 flex flex-col gap-10 relative">
          <div className="absolute top-10 right-0 transform rotate-[26.3deg]">
            <Image src="/images/Framea.png" width={475} height={555} alt="" />
          </div>
          <div className="w-[1116px] h-[762px flex flex-col gap-4">
            <div className="h-[201px] w-[1021px]  gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-preamble  w-[278px] font-normal text-[24px] line-clamp-1 leading-[29px] text-[#1C1C1C] relative text-preamble uppercase ">
                  VĂN HOÁ CỦA <span className="text-[#1FA9EC]">GUSWEB</span>
                </p>
                <p className="title-custom font-bricolage">
                  Lấy nhân sự làm cốt lõi
                </p>
              </div>
              <p className="label-custom line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam iste itaque sapiente sint atque quidem velit nihil
                suscipit numquam quia? Optio consequuntur explicabo autem odit
                repudiandae ducimus non voluptatibus aperiam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Architecto ipsa officiis
                aliquam quam, atque magni distinctio. Aliquam labore, sint in
                suscipit, quam perspiciatis eligendi doloremque, facere incidunt
                commodi placeat quidem!
              </p>
            </div>
          </div>
          <div className="w-full h-[545px] gap-6 flex flex-wrap">
            {images.map((src, index) => (
              <div
                key={index}
                className="h-[260px] w-[260px] bg-slate-500 items-center justify-center flex"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={260}
                  height={260}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Page;
