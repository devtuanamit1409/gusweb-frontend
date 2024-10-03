import React from "react";
import { Card, Flex } from "antd";
const IdeaCard = () => {
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
    <div className="w-full h-[539px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] py-[80px] px-[162px] gap-6  ">
      <div className="custom-container mt-[20px]">
        <div className="w-[736px] h-[171px] gap-4  flex flex-col  items-center mx-auto  text-center mt-[20px]">
          <span className="w-[329px] h-[29px] text-[#FFFFFF] text-2xl leading-[28.8px] font-bricolage font-bold">
            {content.Premble}
          </span>
          <h1 className="w-[736px] h-[134px] font-bold text-[56px] leading-[67.2px] justify-center items-center font-bricolage text-[#FFFFFF]">
            {content.title}
          </h1>
        </div>
        <div className="w-[1116px] h-[184px] gap-6 flex flex-row mx-auto mt-[20px]">
          {items.map((item, index) => (
            <Card
              key={index}
              style={{
                width: 356,
                height: 184,
                gap: 4,
                borderRadius: 24,
                borderTop: 1,
                borderRight: 1,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <h3 className="font-semibold w-[308px] h-[24px] text-xl leading-6 text-center bg-gradient-to-r from-[#00D2FF] to-[#3A7BD5] bg-clip-text text-transparent font-bricolage">
                {item.title}
              </h3>
              <p className="font-normal w-[308px] h-[96px] text-base  leading-6  tracking-[0.5px] text-[#363636] text-start ">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
