import React from "react";
import { Card } from "antd";
import Image from "next/image";
const DevelopmentSolutions: React.FC<any> = ({ whyUs }) => {
  // console.log(whyUs);
  const cardData = [
    {
      id: 1,
      image: "/images/image 1157053983.png",
      title: "Hiểu rõ doanh nghiệp và hướng tới mục tiêu chung",
    },
    {
      id: 2,
      image: "/images/image 1157053983.png",
      title: "Hiểu rõ doanh nghiệp và hướng tới mục tiêu chung",
    },
    {
      id: 3,
      image: "/images/image 1157053983.png",
      title: "Hiểu rõ doanh nghiệp và hướng tới mục tiêu chung",
    },
    {
      id: 4,
      image: "/images/image 1157053983.png",
      title: "Hiểu rõ doanh nghiệp và hướng tới mục tiêu chung",
    },
  ];
  const data = {
    premble: "TẠI SAO NÊN CHỌN GUSWEB?",
    title: "Giải pháp phát triển website bền vững",
    description:
      "Giúp doanh nghiệp sở hữu một nền tảng trực tuyến vững chắc, có thể   phát triển lâu dài và thích ứng linh hoạt. Chúng tôi đồng hành cùng  doanh nghiệp để đảm bảo website không chỉ hoạt động hiệu quả mà còn hỗ  trợ tăng trưởng bền vững theo thời gian.",
  };
  return (
    <div className="custom-container   laptop:py-[80px]  px-4 py-10 gap-6 justify-center items-center flex flex-col">
      <div className="laptop:max-w-[1116px] laptop:max-h-[209px]  gap-4  items-center flex flex-col w-full">
        <h1 className="font-normal text-2xl leading-[38.4px] text-preamble relative font-bricolage">
          TẠI SAO NÊN CHỌN GUSWEB?
        </h1>
        <h2 className="laptop:h-[67px]  font-bold laptop:text-[56px] laptop:leading-[67.2px] text-[40px] leading-[50.4px] text-center font-bricolage line-clamp-2 mobile:line-clamp-3">
          {whyUs.title}
        </h2>
        <p className="laptop:max-w-[736px] laptop:max-h-[72px]  font-normal text-base leading-6 text-center w-full laptop:line-clamp-3 line-clamp-6">
          {whyUs.description}
        </p>
      </div>
      <div className="  gap-6 mt-6 bg-white flex flex-wrap laptop:flex-nowrap justify-center w-full mobile:px-[66px] tablet:px-0">
        {whyUs.items &&
          whyUs.items.map((item: any, index: number) => (
            <div
              key={index}
              className=" rounded-3xl p-6 gap-6 bg-[#FEFEFE] shadow-custom-shadow justify-center items-center flex flex-col w-full tablet:w-1/3"
            >
              <Image src={item.url} alt={item.alt} width={80} height={80} />
              <h1 className="laptop:max-w-[213px] min-h-[72px] font-semibold text-xl leading-6 text-[#1C1C1C] w-full text-center ">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DevelopmentSolutions;
