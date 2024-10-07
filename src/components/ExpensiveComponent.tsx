import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpensiveComponent: React.FC<any> = ({ exp }) => {
  return (
    <div className="h-[448px] bg-slate-500 relative justify-center items-center flex">
      <Image
        src={exp.url}
        alt={exp.alt}
        width={1500}
        height={500}
        className="absolute top-0 h-auto w-full left-0 object-contain"
      />
      <div className="w-[1116px] justify-start flex">
        <div className="w-[642px] h-[382px] text-[#FEFEFE] flex flex-col gap-10 z-50">
          <div className="h-[134px] flex flex-col w-[641px]">
            <p className="title-custom font-bricolage !text-[#FEFEFE] w-[400px]">
              {exp.title}
            </p>
          </div>
          <p>{exp.description}</p>
          <div className="w-[366px] h-[42px] flex flex-row gap-6">
            <button className="ant-btn w-[166px]">
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
