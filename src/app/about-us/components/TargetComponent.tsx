import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const TargetComponent: React.FC<any> = ({ taget }) => {
  const [activeTab, setActiveTab] = useState(taget.items[0].id);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[716px] justify-center items-center flex ">
      <div className="h-[555px] w-[1116px] gap-[10px] flex justify-center items-center">
        <div
          className="h-[392px] w-[570px]  px-6 gap-6 flex flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="h-[166px] w-[400px] ">
            <p className="font-bricolage title-custom">{taget.banner.title}</p>
          </div>
          <div className="w-[546px] h-[66px] flex justify-between gap-10 border-t-2 border-[#C9C9C9]">
            {taget.items &&
              taget.items.map((item: any) => (
                <button
                  key={item.id}
                  className={`relative w-[182px] px-4 flex items-center justify-center ${
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
                  <span>{item.title}</span>
                </button>
              ))}
          </div>

          <div className="h-[120px] mt-[-24px] p-6">
            {taget.items &&
              taget.items.map(
                (item: any) =>
                  activeTab === item.id && (
                    <div key={item.id}>
                      <p className=" line-clamp-3 label-custom">
                        {item.description}
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div
          className="justify-center items-center flex flex-row"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={taget.banner.url}
            width={555}
            height={555}
            alt={taget.banner.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default TargetComponent;
