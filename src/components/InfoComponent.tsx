import React from "react";
import Image from "next/image";
import { infoModel } from "@/models/inforModel";

interface Props {
  data: infoModel;
  styleTitle?: string; // Changed from React.CSSProperties to string for Tailwind classes
  styleImage?: string;
}

const InfoComponent = (props: Props) => {
  const { data, styleTitle, styleImage } = props;
  return (
    <div className="h-[555px] w-[1116px] gap-[10px] flex justify-center items-center">
      <div
        className={`justify-center items-center flex flex-row ${styleImage}`}
      >
        <Image
          src={data.image || "/images/Group 1000004070.png"}
          width={418}
          height={434}
          alt={data.alt || ""}
          className={styleImage}
        />
      </div>

      <div className="h-[372px] w-[570px] py-[80px] px-6 gap-6 flex flex-col">
          className={
            styleTitle
              ? styleTitle
              : "font-bold leading-[68px] text-[56px] bg-clip-text text-transparent bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] line-clamp-2"
          }
        >
          {data.title}
        </p>
        <p className="font-normal text-[16px] leading-6 text-[#363636] line-clamp-2 traking-[0.5px]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;
