"use client";
import Banner from "@/components/BannerComponent";
import React from "react";
import Slide from "@/components/SlideComponent";
import IdeaCard from "@/components/IdeaCard";
import SupportIdeas from "@/components/SupportIdeas";
import dynamic from "next/dynamic";
import InfoComponent from "@/components/InfoComponent";
import Image from "next/image";
import DevelopmentSolutions from "@/components/DevelopmentSolutions";
import Contact from "@/components/Contact";
import Head from "next/head";
import BannerComponent from "@/components/BannerComponent";

const DynamicSlide = dynamic(() => import("@/components/SlideComponent"), {
  ssr: false, // Không render trên server
});
const item = {
  title: "Tập trung vào nhu cầu của người dùng",
  description:
    " Chúng tôi tập trung vào người dùng để thiết kế từng yếu tố trong mỗi sản phẩm nhằm đem đến trải nghiệm hữu ích và hiệu quả. Với chúng tôi, một sản phẩm đẹp thôi là chưa đủ, mà còn phải tạo ra những trải nghiệm tốt. Điều đó sẽ giúp khách hàng cảm thấy được trân trọng và thấu hiểu. Đây cũng là một phần cốt lõi trong dịch vụ thiết kế UX UI của chúng tôi.",
  image: "/images/OBJECTS.png",
};
const data = {
  title: "Tạo đúng sản phẩm ngay từ ban đầu",
  description:
    " Khi bắt đầu thực hiện dự án, việc đi đến xây dựng và phát triển yêu cầu ngay là điều không thể. Trước tiên, chúng tôi sẽ dành thời gian để lập kế hoạch, sử dụng các phương pháp tư duy thiết kế, xác định và dự đoán nhu cầu của người dùng nhằm đưa ra thành phẩm hoàn thiện theo tiêu chuẩn. ",
  image: "/images/Group.png",
  alt: "",
};
const page = () => {
  return (
    <>
      <Head>
        <title>Client-Side Page Title</title>
        <meta name="description" content="This is a client-side description" />
      </Head>
      <div className="w-full h-full">
        <BannerComponent />
        <Slide />
        <div className="w-full h-[715px] py-[80px] px-[162px] justify-center items-center flex gap-10">
          <div className="h-[294px] w-[523px] gap-4  flex flex-col">
            <h1 className="h-[134px] gap-2 font-bold leading-[67.2px] text-[56px] font-bricolage text-[#1C1C1C]">
              {item.title}
            </h1>
            <p className=" h-[144px] font-normal text-[16px] leading-6 text-[#363636] tracking-[0.5px] line-clamp-2">
              {item.description}
            </p>
          </div>
          <div className="w-[545px] h-[555px] justify-center items-center  ">
            <Image
              src={item.image || "/images/OBJECTS.png"}
              width={545}
              height={555}
              alt=""
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full h-[715px] py-[80px] px-[160px]  justify-center items-center flex">
          <div className="w">
            <InfoComponent
              data={data}
              styleTitle="h-[134px] font-bold text-5xl text-[#1C1C1C] leading-[67.2px] gap-2 font-bricolage"
              styleImage="h-[555px] w-[545px]"
            />
          </div>
        </div>

        <IdeaCard />
        <SupportIdeas />

        <div
          className="relative w-full h-[319px] flex justify-center items-center "
          style={{
            backgroundImage: `url('/images/Rectangle 175.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Title Section */}
          <div className="absolute top-[80px] h-[67px]">
            <h1 className="font-bricolage font-bold w-[1116px] text-[56px] leading-[67.2px] text-[#1C1C1C] px-4 py-2 flex justify-center">
              Khách hàng tiêu biểu
            </h1>
          </div>

          {/* Logos or List of Items */}
          <div className="absolute bottom-[40px] w-[1116px] h-[88px] flex justify-center items-center">
            <ul className="flex gap-12">
              <li className="w-[208px] h-[68px]  flex items-center justify-center">
                <Image
                  width={208}
                  height={68}
                  src="/images/logofima.png"
                  alt=""
                />
              </li>
              <li className="w-[208px] h-[68px] flex items-center justify-center ">
                <Image
                  width={208}
                  height={68}
                  src="/images/logocanva.png"
                  alt=""
                />
              </li>
              <li className="w-[208px] h-[68px]  flex items-center justify-center ">
                <Image
                  width={208}
                  height={68}
                  src="/images/logozeplin.png"
                  alt=""
                />
              </li>
              <li className="w-[208px] h-[68px]  flex items-center justify-center ">
                <Image
                  width={208}
                  height={68}
                  src="/images/logoadobe.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        <DevelopmentSolutions />
        <Contact />
      </div>
    </>
  );
};

export default page;
