import React from "react";

import Image from "next/image";
import { midPageModel } from "@/models/MidPageModel";
import { Button } from "antd";
import Link from "next/link";

const items: midPageModel[] = [
  {
    url: "/images/Promotion.png",
    title: "LIÊN HỆ",
    description: "Tạo dựng thương hiệu, khẳng định vị thế",
  },
];

export default function Contact() {
  return (
    <div className="w-full h-[428px]  mx-auto">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <Image
            src={item.url || ""}
            alt="Header Banner"
            width={1440}
            height={428}
            className="object-cover w-full relative"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1116px] h-[246px] gap-4 justify-center items-center flex flex-col ">
            <h1 className="w-[86px] h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] text-white">
              {item.title}
            </h1>
            <p className="w-[736px] h-[134px] font-bricolage font-bold text-[56px] leading-[67.2px] text-center  text-white">
              {item.description}
            </p>

            <div className="w-[356px] h-[42px] gap-6 flex justify-between">
              <Link href="/">
                <Button className="w-[186px] h-[42px] rounded text-white bg-[#1FA9EC]">
                  Tải Profile
                </Button>
              </Link>
              <Link href="/">
                <Button className="w-[186px] h-[42px] rounded bg-white bg-clip-text text-white">
                  Liên hệ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div className="">
    //   {items.map((item, index) => (
    //     <React.Fragment key={index}>
    //       <div className="relative w-full h-[428px] flex justify-center ">
    //         <Image
    //           src={item.url}
    //           alt="Header Banner"
    //           width={1440}
    //           height={428}
    //           className="object-cover w-full"
    //         />
    //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //           <div className=" p-6 w-[700px] h-[324px] rounded-[20px] gap-[16px]">
    //             <p className="text-[16px] text-center text-white">
    //               {item.title}
    //             </p>
    //             <p className="text-[56px] text-center text-white font-bricolage font-bold leading-[67.2px] ">
    //               {item.description}
    //             </p>
    //             <div className="w-[356px] h-[42px] flex flex-row items-center justify-center gap-6 ">
    //               <Button className="text-white w-[166px] h-[42] bg-[#1FA9EC] focus:outline-none font-medium rounded-md text-sm px-8 py-3  lg:block md:w-auto md:order-1">
    //                 Tải Profile
    //               </Button>
    //               <Button className="text-[#00D2FF] w-[166px] h-[42] bg-[#FEFEFE]  font-medium rounded-md text-sm px-8 py-3  lg:block md:w-auto md:order-1">
    //                 Liên hệ
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   ))}
    // </div>
  );
}
