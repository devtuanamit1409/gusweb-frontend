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
    <div className="w-full h-[589px] py-[80px] px-[162px] gap-6 justify-center items-center flex flex-col">
      <div className="w-[1116px] h-[209px] gap-4   justify-center items-center flex flex-col">
        <h1 className="h-[38px] font-normal text-2xl leading-[38.4px] text-preamble relative font-bricolage">
          TẠI SAO NÊN CHỌN GUSWEB?
        </h1>
        <h2 className="h-[67px] font-bold text-[56px] leading-[67.2px] items-center font-bricolage">
          {whyUs.title}
        </h2>
        <p className="w-[736px] h-[72px] font-normal text-base leading-6 text-center ">
          {whyUs.description}
        </p>
      </div>
      <div className="w-[1116px] h-[196px] gap-6 mt-6 bg-white flex flex-row">
        {whyUs.items &&
          whyUs.items.map((item: any, index: number) => (
            <div
              key={index}
              className="w-[261px] h-[196px] rounded-3xl p-6 gap-6 bg-[#FEFEFE] shadow-custom-shadow justify-center items-center flex flex-col"
            >
              <Image src={item.url} alt={item.alt} width={80} height={80} />
              <h1 className="w-[213px] h-[72px] font-semibold text-xl leading-6 items-center text-[#1C1C1C]">
                {item.title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DevelopmentSolutions;
