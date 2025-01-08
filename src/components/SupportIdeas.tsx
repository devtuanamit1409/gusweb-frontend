"use client";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SupportIdeas: React.FC<any> = ({ help }) => {
  const t = useTranslations();
  useEffect(() => {
    Aos.init({ once: true });
    setTimeout(() => {}, 1000);
  }, []);
  const imageNumber = [
    {
      image: "/images/number1.png",
      bgColor: "#EBFFEE",
    },
    {
      image: "/images/number2.png",
      bgColor: "#E5FCFF",
    },
    {
      image: "/images/number3.png",
      bgColor: "#E5FCFF",
    },
    {
      image: "/images/number4.png",
      bgColor: "#F7F7F7",
    },
    {
      image: "/images/number5.png",
      bgColor: "#F7F7F7",
    },
    {
      image: "/images/number6.png",
      bgColor: "#EBFFEE",
    },
  ];

  return (
    <div className="custom-container laptop:py-[80px]  px-4 py-10 flex flex-col items-center ">
      <div className="laptop:max-w-[1116px] flex flex-col gap-6 items-center justify-center">
        <div className="gap-4  flex flex-col " data-aos="fade-right">
          <div className=" flex laptop:justify-start justify-center">
            <span className="relative font-bricolage font-normal text-preamble h-[38px] gap-4 text-2xl leading-[28.8px] text-[#363636] ">
              {t("servicePage.help")}
            </span>
          </div>
          <h1 className="laptop:text-[56px] font-bold tablet:tetx-[42px] tablet:leading-[50.4px] font-bricolage mobile:text-[32px]  mobile:leading-[38.4px] laptop:leading-[67.2px] text-[#1C1C1C]  laptop:text-start text-center ">
            {help.title}
          </h1>
          <p className=" font-normal text-base leading-6 tracking-[0.5px] text-[#1C1C1C] w-full laptop:text-start text-center">
            {help.description}
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="grid  laptop:grid-cols-2 laptop:grid-rows-3 grid-cols-1 grid-rows-6 gap-4 laptop:max-w-[1116px] tablet:px-20 laptop:px-0"
        >
          {help.items &&
            help.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative pt-10 pb-6 px-6 gap-6 flex flex-col tablet:flex-row p-[20px]  w-full border-dashed border-[2px] border-[#00D2FF] ${
                  index === 2 || index === 3
                    ? "flex-row-reverse justify-end "
                    : ""
                } border-dashed border-[1px] border-[#00D2FF] mobile:justify-center`}
                style={{
                  backgroundColor: imageNumber[index].bgColor,
                }}
              >
                <div
                  className={`absolute bottom-0 overflow-hidden ${
                    index === 2 || index === 3 ? "right-0" : "left-0"
                  } block laptop:block tablet:block mobile:hidden`}
                >
                  <Image
                    src={imageNumber[index].image}
                    alt={`Background number ${index + 1}`}
                    width={118}
                    height={68}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`flex h-[56px] w-2/3 flex-row justify-center tablet:justify-start z-10 laptop:block tablet:block w-full ${
                    index === 2 || index === 3 ? " justify-end " : ""
                  }`}
                >
                  <div className="gap-2 flex flex-row justify-start items-center">
                    <Image
                      src={item.icon.url}
                      alt={item.icon.alt}
                      width={56}
                      height={60}
                      className="object-cover w-[56px] h-[56px]"
                    />
                    <h3 className="font-bricolage text-xl font-bold leading-6 text-[#1C1C1C] flex text-start">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex w-full z-10 ">
                  <ul className="font-normal text-base leading-6  text-[#363636] list-none pl-5 gap-2 flex flex-col">
                    {item.description
                      .split("\n")
                      .map((desc: string, i: number) => (
                        <li key={i}>{desc.trimStart()}</li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SupportIdeas;
