import Image from "next/image";
import React from "react";

const CustomerVip = () => {
  return (
    <div
      className="relative w-full h-[319px] flex justify-center items-center "
      style={{
        backgroundImage: `url('/images/Rectangle 175.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[80px] h-[67px]">
        <h1 className="font-bricolage font-bold w-[1116px] text-[56px] leading-[67.2px] text-[#1C1C1C] px-4 py-2 flex justify-center">
          Khách hàng tiêu biểu
        </h1>
      </div>

      <div className="absolute bottom-[40px] w-[1116px] h-[88px] flex justify-center items-center">
        <ul className="flex gap-12">
          <li className="w-[208px] h-[68px]  flex items-center justify-center">
            <Image width={208} height={68} src="/images/logofima.png" alt="" />
          </li>
          <li className="w-[208px] h-[68px] flex items-center justify-center ">
            <Image width={208} height={68} src="/images/logocanva.png" alt="" />
          </li>
          <li className="w-[208px] h-[68px]  flex items-center justify-center ">
            <Image
              width={208}
              height={68}
              src="/images/logozeplin.png"
              alt=""
            />
          </li>
          <li className="w-[208px] h-[68px]  flex items-center justify-center ">
            <Image width={208} height={68} src="/images/logoadobe.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerVip;
