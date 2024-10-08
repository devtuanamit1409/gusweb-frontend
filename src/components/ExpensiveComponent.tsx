import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpensiveComponent: React.FC<any> = ({ exp }) => {
  return (
    <div className="h-[448px] bg-slate-500 relative justify-center items-center flex">
      <Image
        src={exp.url}
        alt={exp.alt}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0  "
      />
      <div className="w-[1116px] justify-start flex">
        <div className="w-[642px] h-[382px] text-[#FEFEFE] flex flex-col gap-10 z-10">
          <div className="h-[134px] flex flex-col w-[641px]">
            <p className="title-custom font-bricolage !text-[#FEFEFE] w-[400px]">
              {exp.title}
            </p>
          </div>
          <p>{exp.description}</p>
          <div className="w-[366px] h-[42px] flex flex-row gap-6">
            <button className="ant-btn w-[166px] bg-[#27B3E9]">
              <Link href="">Tải eBook</Link>
            </button>
            <button className="gradient-text  w-[166px]">
              <Link href="">Xem thêm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensiveComponent;
