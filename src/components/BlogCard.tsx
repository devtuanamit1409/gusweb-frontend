import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CardModel } from "@/models/cardModel";

interface BlogCardProps {
  cardsData: CardModel[]; // Accepting cardsData as a prop
  title?: string;
  url?: string;
}

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
  {
    url: "/images/blog.png",
    title: "AGILE SCRUM - Quá trình quản lý và thực hiện dự án",
    link: "#",
    date: "10 ngày trước",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ cardsData, title, url }) => {
  return (
    <div className=" h-[705px] custom-container flex items-center justify-center">
      <div className="w-[1116px] h-[545px] mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="text-[56px] font-bricolage ">{title}</span>
            <button
              type="button"
              className="bg-[#27B3E9] text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
            >
              {url}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {cardsData.map((item, index) => (
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
                    <div className="w-[108px] h-[42px] inline-flex items-center ">
                      <Link href="">
                        <div className="text-[#1FA9EC] font-medium text-[15px] leading-[18px] font-montserrat flex items-center ml-2">
                          Xem thêm
                          <svg
                            fill="#1FA9EC"
                            height="16px"
                            width="16px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-33 -33 396.00 396.00"
                            stroke="#1FA9EC"
                            strokeWidth="0.0033"
                            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            className="ml-[10px]"
                          >
                            <path
                              id="XMLID_27_"
                              d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
