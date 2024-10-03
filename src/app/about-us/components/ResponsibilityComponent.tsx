import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ResponsibilityComponent = () => {
  const data = [
    {
      title: "Trách Nhiệm Với Khách Hàng",
      description:
        "Chúng tôi luôn nỗ lực hoàn thiện các giải pháp toàn diện, nhằm đáp ứng nhu cầu chuyển đổi số trong nhiều lĩnh vực, giúp khách hàng tăng trưởng và phát triển bền vững.",
    },
    {
      title: "Trách Nhiệm Với Nhân Sự",
      description:
        "Nhân sự là tài sản giá trị và góp phần quan trọng vào sự thành công của doanh nghiệp. Ở AMIT, chúng tôi luôn tạo điều kiện cho mỗi nhân sự có một môi trường làm việc chuyên nghiệp, năng động với nhiều cơ hội để vượt qua giới hạn và phát triển bản thân.",
    },
    {
      title: "Trách Nhiệm Với Cổ Đông",
      description:
        "AMIT luôn đảm bảo sự minh bạch trong quá trình sử dụng các nguồn lực của công ty. Đội ngũ lãnh đạo của chúng tôi không ngừng nỗ lực tìm kiếm và phát triển những mô hình kinh doanh tiềm năng, nhằm mang lại hiệu quả tăng trưởng và sinh lợi cho cổ đông.",
    },
    {
      title: "Trách Nhiệm Với Cộng Đồng & Xã Hội",
      description:
        "Chúng tôi tin rằng một môi trường sống trong lành và một xã hội văn minh là yếu tố tiên quyết dẫn đến sự thành công. Do đó, chúng tôi luôn nỗ lực hướng đến sự phát triển bền vững, tạo ra nhiều giá trị hơn cho Cộng đồng.",
    },
  ];

  const [activeFirstSet, setActiveFirstSet] = useState("left");
  const [showFirstSetContent, setShowFirstSetContent] = useState(true);
  const [activeSecondSet, setActiveSecondSet] = useState("left");
  const [showSecondSetContent, setShowSecondSetContent] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setInitialLoad(false);
    }, 1000); 
  }, []);

  const handleFirstSetClick = (side: string) => {
    if (activeFirstSet !== side) {
      setShowFirstSetContent(false);
      setActiveFirstSet(side);
      setTimeout(() => {
        setShowFirstSetContent(true);
      }, 400);
    }
  };

  const handleSecondSetClick = (side: string) => {
    if (activeSecondSet !== side) {
      setShowSecondSetContent(false);
      setActiveSecondSet(side);
      setTimeout(() => {
        setShowSecondSetContent(true);
      }, 400);
    }
  };

  return (
    <div className="w-[1116px] flex flex-col gap-6">
      <div className="h-56 flex flex-row gap-6">
        {data.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`${
              activeFirstSet === (index === 0 ? "left" : "right")
                ? "w-[736px] bg-[#FEFEFE]"
                : "w-[380px] bg-[#E5FCFF]"
            } h-56 flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500 ${
              activeFirstSet === (index === 0 ? "left" : "right")
                ? "items-start"
                : "items-center"
            }`}
            onClick={() => handleFirstSetClick(index === 0 ? "left" : "right")}
            {...(initialLoad && {
              "data-aos": "fade-left",
              "data-aos-duration": "1000",
            })}
          >
            <p className="text-[#1C1C1C] font-semibold text-[20px] leading-6">
              {item.title}
            </p>
            {activeFirstSet === (index === 0 ? "left" : "right") &&
              showFirstSetContent && <p>{item.description}</p>}
          </div>
        ))}
      </div>
      <div className="h-56 flex flex-row gap-6">
        {data.slice(2, 4).map((item, index) => (
          <div
            key={index}
            className={`${
              activeSecondSet === (index === 0 ? "right" : "left")
                ? "w-[736px] bg-[#FEFEFE]"
                : "w-[380px] bg-[#E5FCFF]"
            } h-56 flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500 ${
              activeSecondSet === (index === 0 ? "right" : "left")
                ? "items-start"
                : "items-center"
            }`}
            onClick={() => handleSecondSetClick(index === 0 ? "right" : "left")}
            {...(initialLoad && {
              "data-aos": "fade-right",
              "data-aos-duration": "1000",
            })}
          >
            <p className="text-[#1C1C1C] font-semibold text-[20px] leading-6">
              {item.title}
            </p>
            {activeSecondSet === (index === 0 ? "right" : "left") &&
              showSecondSetContent && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsibilityComponent;
