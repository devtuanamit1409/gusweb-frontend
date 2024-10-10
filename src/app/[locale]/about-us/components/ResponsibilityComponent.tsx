import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ResponsibilityComponent: React.FC<any> = ({ data }) => {
  const [activeFirstSet, setActiveFirstSet] = useState("left");
  const [showFirstSetContent, setShowFirstSetContent] = useState(true);
  const [activeSecondSet, setActiveSecondSet] = useState("left");
  const [showSecondSetContent, setShowSecondSetContent] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setInitialLoad(false);
    setTimeout(() => {}, 1000);
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
    <div className="laptop:max-w-[1116px] tablet:max-w-[712px] mobile:max-w-[328px] flex flex-col gap-6 jus  w-full">
      <div className="laptop:h-56 tablet:h-[248px] flex-row gap-6 laptop:flex tablet:flex  mobile:hidden">
        {data.slice(0, 2).map((item: any, index: number) => (
          <div
            key={index}
            className={`${
              activeFirstSet === (index === 0 ? "left" : "right")
                ? "laptop:max-w-[736px] tablet:max-w-[454px] bg-[#FEFEFE] w-full"
                : "laptop:max-w-[356px] tablet:max-w-[236px] bg-[#E5FCFF] w-full"
            } laptop:h-56 tablet:h-[248px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500 w-full ${
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
            <h6 className="text-[#1C1C1C] font-semibold text-[20px] leading-6 text-center">
              {item.title}
            </h6>
            {activeFirstSet === (index === 0 ? "left" : "right") &&
              showFirstSetContent && (
                <p className="line-clamp-3">{item.description}</p>
              )}
          </div>
        ))}
      </div>
      <div className="laptop:h-56 tablet:h-[248px] laptop:flex tablet:flex flex-row gap-6  mobile:hidden">
        {data.slice(2, 4).map((item: any, index: number) => (
          <div
            key={index}
            className={`${
              activeSecondSet === (index === 0 ? "right" : "left")
                ? "laptop:max-w-[736px] tablet:max-w-[454px] bg-[#FEFEFE] w-full"
                : "laptop:max-w-[356px] tablet:max-w-[236px] bg-[#E5FCFF] w-full"
            } laptop:h-56 tablet:h-[248px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer transition-all duration-500 w-full ${
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
            <h6 className="text-[#1C1C1C] font-semibold text-[20px] leading-6 text-center">
              {item.title}
            </h6>
            {activeSecondSet === (index === 0 ? "right" : "left") &&
              showSecondSetContent && (
                <p className="line-clamp-3">{item.description}</p>
              )}
          </div>
        ))}
      </div>
      <div>
        <div className="laptop:hidden tablet:hidden mobile:flex flex-col justify-between gap-6">
          {data.slice(0, 2).map((item: any, index: number) => (
            <div
              key={index}
              className={`${
                index === 0 ? "bg-[#E5FCFF]" : "bg-[#FEFEFE]"
              } w-[328px] h-[330px] flex flex-col gap-2 p-6 border-bottom-blue-custom justify-center cursor-pointer`}
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
