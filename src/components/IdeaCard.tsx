import React from "react";
import { Card, Flex } from "antd";
const IdeaCard: React.FC<any> = ({ solution }) => {
  const content = {
    Premble: " CÁC GIẢI PHÁP CỦA GUSWEB",
    title: "Biến ý tưởng thành sản phẩm hoàn thiện",
  };
  const items = [
    {
      title: "Đổi mới giao diện",
      description:
        "Biến giao diện người dùng đã lỗi thời trở nên hiện đại và dễ sử dụng hơn nhờ kết hợp các tiêu chuẩn UX UI trong thiết kế.",
    },
    {
      title: "Tối ưu hóa hiệu suất",
      description:
        "Cải thiện tốc độ tải trang và tối ưu hóa hiệu suất ứng dụng giúp người dùng có trải nghiệm tốt hơn.",
    },
    {
      title: "Phát triển tính năng mới",
      description:
        "Thêm các tính năng mới giúp nâng cao giá trị sản phẩm và đáp ứng nhu cầu của khách hàng.",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]  items-center flex ">
      <div className="custom-container flex flex-col gap-6 mobile:gap-8 max-w-[1116px] laptop:py-[80px]  py-[66px] px-4   items-center ">
        <div className="laptop:h-[180px] gap-4  flex flex-col  items-center text-center w-full">
          <span className="laptop:max-w-[329px] h-[38px]  text-[#FFFFFF] text-[24px] leading-[28.8px] font-bricolage font-bold w-full">
            CÁC GIẢI PHÁP CỦA GUSWEB
          </span>
          <h1 className="laptop:max-w-[736px] laptop:h-[134px] font-bold text-[56px] leading-[67.2px] justify-center items-center font-bricolage text-[#FFFFFF] w-full">
            {solution.title}
          </h1>
        </div>
        <div className=" px-4 tablet:px-0  gap-6 flex flex-wrap laptop:flex-nowrap  justify-center max-w-[1116px]">
          {solution.items &&                
            solution.items.map((item: any, index: number) => (
                <div
                key={index}
                className="bg-[#FFFFFF] rounded-[24px] p-[24px] flex flex-col items-center gap-4 w-full tablet:w-[calc(50%-12px)]"
                >
                <h3 className="font-semibold text-xl leading-6 text-center bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5] bg-clip-text text-transparent font-bricolage w-full">
                  {item.title}
                </h3>
                <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#363636] text-start w-full">
                  {item.description}
                </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
