import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const TargetComponent = () => {
  const [activeTab, setActiveTab] = useState("1");
  useEffect(() => {
    AOS.init();
  }, []);
  const tabItems = [
    {
      key: "1",
      label: "Tầm Nhìn",
      description:
        "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iste itaque sapiente sint atque quidem velit nihil suscipit numquam quia? Optio consequuntur explicabo autem odit repudiandae ducimus non voluptatibus aperiam!",
    },
    {
      key: "2",
      label: "Sứ Mệnh",
      description:
        "3 năm tới GUSWEB sẽ bước chân ra khỏi Việt Nam và trở thành một trung tâm sáng tạo công nghệ uy tín của Việt Nam và Đông Nam Á vào năm 2035.",
    },
    {
      key: "3",
      label: "Thế Mạnh",
      description:
        "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iste itaque sapiente sint atque quidem velit nihil suscipit numquam quia? Optio consequuntur explicabo autem odit repudiandae ducimus non voluptatibus aperiam!",
    },
  ];

  return (
    <div className="h-[555px] w-[1116px] gap-[10px] flex justify-center items-center">
      <div className="h-[392px] w-[570px]  px-6 gap-6 flex flex-col" data-aos="fade-right" data-aos-duration="1000">
        <div className="h-[166px] w-[400px] ">
          <p className="font-bricolage title-custom">Cùng hướng đến mục tiêu</p>
        </div>
        <div className="w-[546px] h-[66px] flex justify-between gap-10 border-t-2 border-[#C9C9C9]">
          {tabItems.map((item) => (
            <button
              key={item.key}
              className={`relative w-[182px] px-4 flex items-center justify-center ${
                activeTab === item.key ? "gradient-text" : "text-[#C9C9C9]"
              }`}
              onClick={() => setActiveTab(item.key)}
            >
              {activeTab === item.key && (
                <div className="absolute top-[-4.6px] left-1/2 transform -translate-x-1/2">
                  <Image src="/svg/Vector.svg" alt="" width={52} height={18} />
                </div>
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="h-[120px] mt-[-24px] p-6">
          {tabItems.map(
            (item) =>
              activeTab === item.key && (
                <div key={item.key}>
                  <p className=" line-clamp-3 label-custom">
                    {item.description}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="justify-center items-center flex flex-row" data-aos="fade-left" data-aos-duration="1000">
        <Image src="/images/Maskgroup1.png" width={555} height={555} alt="" />
      </div>
    </div>
  );
};

export default TargetComponent;
