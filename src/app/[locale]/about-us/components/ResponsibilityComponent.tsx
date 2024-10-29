import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ResponsibilityComponent: React.FC<any> = ({ data }) => {
  const [activeFirstSet, setActiveFirstSet] = useState("left");
  const [showFirstSetContent, setShowFirstSetContent] = useState(true);
  const [activeSecondSet, setActiveSecondSet] = useState("left");
  const [showSecondSetContent, setShowSecondSetContent] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setTimeout(() => {}, 1000);
  }, []);

  const handleFirstSetClick = (side: string) => {
    if (activeFirstSet !== side) {
      setShowFirstSetContent(false);
      setActiveFirstSet(side);
      setShowFirstSetContent(true);
    }
  };

  const handleSecondSetClick = (side: string) => {
    if (activeSecondSet !== side) {
      setShowSecondSetContent(false);
      setActiveSecondSet(side);
      setShowSecondSetContent(true);
    }
  };

  return (
    <div className=" flex flex-col gap-6 jus  w-full items-center">
      <div
        className="laptop:h-56 tablet:h-[248px] flex-row gap-6 laptop:flex tablet:flex  mobile:hidden"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {data.slice(0, 2).map((item: any, index: number) => (
          <div
            key={index}
            className={`${
              activeFirstSet === (index === 0 ? "left" : "right")
                ? "bg-[#FEFEFE] w-[66%]"
                : "bg-[#E5FCFF] w-[34%]"
            } laptop:h-56 tablet:h-[248px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500 ${
              activeFirstSet === (index === 0 ? "left" : "right")
                ? "items-start"
                : "items-center"
            }`}
            onClick={() => handleFirstSetClick(index === 0 ? "left" : "right")}
          >
            <h6 className="text-[#1C1C1C] font-semibold text-[20px] leading-6 text-center">
              {item.title}
            </h6>
            {activeFirstSet === (index === 0 ? "left" : "right") &&
              showFirstSetContent && <p className="">{item.description}</p>}
          </div>
        ))}
      </div>
      <div
        className="laptop:min-h-56 tablet:min-h-[248px] laptop:flex tablet:flex flex-row gap-6  mobile:hidden"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {data.slice(2, 4).map((item: any, index: number) => (
          <div
            key={index}
            className={`${
              activeSecondSet === (index === 0 ? "right" : "left")
                ? " bg-[#FEFEFE] w-[66%]"
                : " bg-[#E5FCFF] w-[34%]"
            } laptop:h-56 tablet:h-[248px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500  ${
              activeSecondSet === (index === 0 ? "right" : "left")
                ? "items-start"
                : "items-center"
            }`}
            onClick={() => handleSecondSetClick(index === 0 ? "right" : "left")}
          >
            <h6 className="text-[#1C1C1C] font-semibold text-[20px] leading-6 text-center">
              {item.title}
            </h6>
            {activeSecondSet === (index === 0 ? "right" : "left") &&
              showSecondSetContent && <p className="">{item.description}</p>}
          </div>
        ))}
      </div>
      <div>
        <div className="laptop:hidden tablet:hidden mobile:flex flex-col justify-between gap-6 px-4">
          {data.slice(0, 2).map((item: any, index: number) => (
            <div
              key={index}
              className={`${
                index === 0 ? "bg-[#E5FCFF]" : "bg-[#FEFEFE]"
              } min-h-[330px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer`}
            >
              <h6 className="text-[#1C1C1C] font-semibold text-[20px] text-center">
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityComponent;
