import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpensiveComponent: React.FC<any> = ({ exp }) => {
  return (
    <div className=" relative laptop:h-[488px] tablet:h-[380px] mobile:h-[446px] ">
      <Image
        src={exp.url}
        alt={exp.alt}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0  "
      />
      <div className="custom-container  laptop:px-[162px] ">
        <div className=" laptop:max-h-[448px] tablet:max-h-[380px] mobile:min-w-[360px] mobile:max-h-[446px] justify-center  mobile:py-10 mobile:px-4 flex px-40">
          <div className="laptop:w-[1116px] tablet:w-[712px]  justify-start flex">
            <div className="laptop:w-[642px] laptop:h-[382px] tablet:w-[712px]  tablet:h-[220px] mobile:w-[328px] mobile:h-[336px] text-[#FEFEFE] flex flex-col laptop:gap-10 gap-4 z-10">
              <div className="laptop:h-[134px] tablet:h-[50px] mobile:h-[76px]">
                <p className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[32px] font-bold font-bricolage !text-[#FEFEFE] laptop:w-[400px]">
                  {exp.title}
                </p>
              </div>
              <p className="mobile:h-[216px]">{exp.description}</p>
              <div className="laptop:w-[366px] laptop:h-[42px] flex flex-row gap-6">
                <button className="ant-btn w-[166px] mobile:w-[130px] mobile:h-[42px] bg-[#27B3E9]">
                  <Link href="">Tải eBook</Link>
                </button>
                <button className="gradient-text  w-[166px] mobile:w-[130px] mobile:h-[42px]">
                  <Link href="">Xem thêm</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensiveComponent;
