import React from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
const BlogCardComponent = ({ item, key }: any) => {
  return (
    <div
      key={key}
      className="home-service-item__box mobile:max-w-[360px] mobile:w-full mobile:min-h-[454px] tablet:h-[454px] tablet:max-w-[356px] tablet:w-full  laptop:w-full laptop:h-[454px]  flex justify-center bg-cyan-400 mx-auto "
    >
      <div>
        <div className="relative">
          <Image
            src={item.url}
            alt={item.alt}
            width={367}
            height={267}
            objectFit="cover"
            className="w-[250px] h-[147px] rounded-lg tablet:w-[356px] tablet:h-[267px] sm:rounded-3xl"
          />
          <button className="background-LinearGradient absolute bottom-4 right-4 rounded w-[85px] h-[26px]">
            {item.sub_category}
          </button>
        </div>
        <div className="flex flex-col gap-2 p-6 w-[202px] h-[17px] ">
          <p>{item.createdAt}</p>
          <p className="font-bricolage text-[16px] font-semibold leading-[19.2px] h-[38px]">
            {item.title}
          </p>
          <Link href="/">
            <div className="text-[#1FA9EC] w-[102px] h-[36px] py-[10px] gap-2 font-medium text-[15px] leading-[18px] font-montserrat flex items-center ">
              Xem thêm
              <ArrowRightOutlined
                style={{ marginLeft: "10px", color: "#1FA9EC" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCardComponent;
