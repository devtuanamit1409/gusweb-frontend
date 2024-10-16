"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TargetComponent: React.FC<any> = ({ taget }) => {
  const [activeTab, setActiveTab] = useState(taget.items[0].id);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
 
  return (
    <div className="custom-container laptop:py-20 laptop:px-[162px] tablet:px-[100px] px-4">
      <div className=" laptop:max-w-[1116px] laptop:gap-[10px]  laptop:flex-row laptop:justify-between flex flex-col  w-full items-center gap-10  ">
        <div
          className=" laptop:max-w-[570px] gap-6 flex flex-col w-full items-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className=" w-full ">
            <h2 className="font-bold font-bricolage line-clamp-2 laptop:text-[56px] laptop:leading-[67.2px] text-[42px] leading-[50.4px] text-start ">
              {taget.banner.title}
            </h2>
          </div>
          <div className=" min-h-[66px]  flex tablet:gap-10 laptop:gap-10 border-t-2 border-[#C9C9C9] w-full">
            {taget.items &&
              taget.items.map((item: any) => (
                <button
                  key={item.id}
                  className={`relative  px-4 flex items-center justify-center w-full ${
                    activeTab === item.id ? "gradient-text" : "text-[#C9C9C9]"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {activeTab === item.id && (
                    <div className="absolute top-[-4.6px] left-1/2 transform -translate-x-1/2">
                      <Image
                        src="/svg/Vector.svg"
                        alt=""
                        width={52}
                        height={18}
                      />
                    </div>
                  )}
                  <h6 className="w-full">{item.title}</h6>
                </button>
              ))}
          </div>
 
          <div className=" mt-[-24px] p-6 h-full">
            {taget.items &&
              taget.items.map(
                (item: any) =>
                  activeTab === item.id && (
                    <div key={item.id}>
                      <p className="line-clamp-3 label-custom">
                        {item.description}
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div
          className="justify-center items-center flex w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={taget.banner.url}
            width={555}
            height={555}
            alt={taget.banner.alt}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default TargetComponent;
