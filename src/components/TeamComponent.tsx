import Image from "next/image";
import React from "react";

const  TeamComponent: React.FC<any> = ({ team }) => {
  return (
    <div className="laptop:h-[946px] tablet:h-[890px] mobile:h-[770px] custom-container flex ">
      <div className=" mobile:py-10 mobile:px-4 laptop:px-[160px] laptop:py-20 flex flex-col items-center gap-10 relative o">
        <div className="laptop:max-w-[1116px] laptop:max-h-[762px] tablet:max-h-[225px] tablet:max-w-[712px] mobile:max-w-[328px] mobile:max-h-[330px]  flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2 laptop:items-start  mobile:h-[122px] items-center laptop:max-w-[1021px] w-full">
            <p className=" text-[24px] leading-[38.4px] text-preamble max-w-[278px] font-normal  line-clamp-1  text-[#1C1C1C] relative text-preamble uppercase text-center w-full">
              VĂN HOÁ CỦA <span className="text-[#1FA9EC]">{team.name}</span>
            </p>
            <p className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] font-bold font-bricolage text-center mobile:text-[32px] mobile:leading-[38.4px] line-clamp-2">
              {team.title}
            </p>
          </div>
          <p className="label-custom  line-clamp-3 laptop:text-start tablet:text-center tablet:line-clamp-4 mobile:line-clamp-6 laptop:max-w-[1021px]">
            {team.description}
          </p>
        </div>
        <div className="laptop:h-[545px] laptop:max-w-[1116px] tablet:h-[545px] tablet:max-w-[712px] mobile:max-w-[328px] mobile:h-[320px] gap-6 flex flex-wrap laptop:items-start laptop:justify-start justify-center items-center w-full">
          {team.items &&
            team.items.map((src: any, index: any) => (
              <div
                key={index}
                className="h-[260px] w-[260px] tablet:h-[260px] tablet:w-[260px] mobile:w-[152px] mobile:h-[152px] bg-slate-500 items-center justify-center flex "
              >
                {src.url && (
                  <Image
                    src={src.url}
                    alt={src.alt || "Team image"}
                    width={260}
                    height={260}
                    className="object-cover"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
