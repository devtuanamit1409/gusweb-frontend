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
    <div className="w-full laptop:h-[539px] tablet:h-[728px]  laptop:py-[80px] laptop:px-[162px]  bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]  items-center flex ">
      <div className="custom-container flex flex-col gap-6 mobile:gap-8 mobile:py-10  items-center ">
        <div className="laptop:max-w-[736px] tablet:max-w-[736px] mobile:max-w-[328px] laptop:h-[180px] gap-4  flex flex-col  items-center text-center w-full">
          <span className="laptop:max-w-[329px] h-[38px]  text-[#FFFFFF] text-[24px] leading-[28.8px] font-bricolage font-bold w-full">
            CÁC GIẢI PHÁP CỦA GUSWEB
          </span>
          <h1 className="laptop:max-w-[736px] laptop:h-[134px] font-bold text-[56px] leading-[67.2px] justify-center items-center font-bricolage text-[#FFFFFF] w-full">
            {solution.title}
          </h1>
        </div>
        <div className="laptop:max-w-[1116px] tablet:max-w-[712px] mobile:max-w-[328px] mobile:h-[600px] laptop:h-[184px] tablet:h-[392px] gap-6 flex flex-wrap laptop:flex-nowrap w-full justify-center">
          {solution.items &&
            solution.items.map((item: any, index: number) => (
              <div
                key={index}
                className="laptop:max-w-[356px] tablet:max-w-[342px] h-[184px] bg-[#FFFFFF] rounded-[24px] p-[24px] flex flex-col items-center gap-4 w-full"
              >
                <h3 className="font-semibold laptop:max-w-[308px] h-[24px] text-xl leading-6 text-center bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5] bg-clip-text text-transparent font-bricolage w-full">
                  {item.title}
                </h3>
                <p className="font-normal laptop:max-w-[308px] h-[96px] text-base leading-6 tracking-[0.5px] text-[#363636] text-start w-full line-clamp-4">
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
