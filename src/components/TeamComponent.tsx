import Image from "next/image";
import React from "react";

const TeamComponent: React.FC<any> = ({ team }) => {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
  ];
  return (
    <div className="h-[946px] flex ">
      <div className="custom-container px-[160px] py-20 flex flex-col gap-10 relative">
        <div className="absolute top-10 right-0 transform rotate-[26.3deg]">
          <Image src="/images/Framea.png" width={475} height={555} alt="" />
        </div>
        <div className="w-[1116px] h-[762px flex flex-col gap-4">
          <div className="h-[201px] w-[1021px]  gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-preamble  w-[278px] font-normal text-[24px] line-clamp-1 leading-[29px] text-[#1C1C1C] relative text-preamble uppercase ">
                VĂN HOÁ CỦA <span className="text-[#1FA9EC]">{team.name}</span>
              </p>
              <p className="title-custom font-bricolage">{team.title}</p>
            </div>
            <p className="label-custom line-clamp-4">{team.description}</p>
          </div>
        </div>
        <div className="w-full h-[545px] gap-6 flex flex-wrap">
          {team.items &&
            team.items.map((src: any, index: number) => (
              <div
                key={index}
                className="h-[260px] w-[260px] bg-slate-500 items-center justify-center flex"
              >
                <Image src={src.url} alt={src.alt} width={260} height={260} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
