import React from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";
import Link from "next/link";

const BlogCardComponent = ({ item, key }: any) => {
  return (
    <div
      key={key}
      className="home-service-item__box w-[356px] h-[454px] flex justify-center"
    >
      <div>
        <div className="relative">
          <Image src={item.url} alt={item.alt} width={367} height={267} />
          <button className="background-LinearGradient absolute bottom-4 right-4 w-[85px] h-[26px]">
            {item.sub_category}
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6 ">
          <p>{item.createdAt}</p>
          <p className="font-bricolage text-[20px] font-bold">{item.title}</p>
          <Link href={item.slug} className="text-blue-500">
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCardComponent;
