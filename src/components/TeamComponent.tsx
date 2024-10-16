import Image from "next/image";
import React from "react";

const TeamComponent: React.FC<any> = ({ team }) => {
  return (
    <div className="custom-container mobile:py-10 tablet:py-20  px-4 laptop:px-[162px] laptop:py-20 flex flex-col items-center gap-10 relative  w-full ">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 laptop:items-start   items-center">
          <p className=" text-[24px] leading-[38.4px] text-preamble font-normal  line-clamp-1  text-[#1C1C1C] relative text-preamble uppercase text-center ">
            VĂN HOÁ CỦA <span className="text-[#1FA9EC]">{team.name}</span>
          </p>
          <p className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] font-bold font-bricolage text-center mobile:text-[32px] mobile:leading-[38.4px] line-clamp-2">
            {team.title}
          </p>
        </div>
        <p className="label-custom  line-clamp-3 laptop:text-start tablet:text-center tablet:line-clamp-4 mobile:line-clamp-6 ">
          {team.description}
        </p>
      </div>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-6 w-full tablet:px-[84px] laptop:px-0 mobile:px-0">
        {team.items &&
          team.items.map((src: any, index: any) => (
            <div
              key={index}
              className="bg-slate-500 flex items-center justify-center   tablet:min-h-[260px]  "
            >
              {src.url && (
                <Image
                  src={src.url}
                  alt={src.alt || "Team image"}
                  width={260}
                  height={260}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamComponent;
