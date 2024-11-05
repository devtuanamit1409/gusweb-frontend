import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchFooter } from "@/utils/GlobalApi";
import { getLocale } from "next-intl/server";

export default async function Footer() {
  const localActive = await getLocale();
  const data = await fetchFooter(localActive);
  return (
    <footer className="laptop:min-h-[50v0px] tablet:min-h-[620px] mobile:min-h-[950px] flex flex-col max-w-[1116px] mx-auto gap-8 mt-10 p-4">
      <div className="flex laptop:flex-row  mobile:flex-col tablet:flex-row target:items-start mobile:gap-6 tablet:gap-10">
        {/* <div className="laptop:w-[369px] tablet:w-[261px] mobile:w-[328px] h-[68px] tablet:justify-start  mobile:flex mobile:items-center mobile:justify-center items-center justify-center tablet:mx-0 "> */}
        <div className="laptop:w-[360px] tablet:w-[525px] mobile:mx-auto tablet:m">
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={231}
            height={80}
          />
        </div>
        <div className="flex laptop:flex-row tablet:flex-col mobile:flex-col flex-col gap-[20px]">
          <div className=" w-full h-[68px] flex items-center">
            <Image
              alt={data.address.alt}
              loading="lazy"
              width={40}
              height={40}
              src={data.address.src}
            />
            <div className="ml-4">
              <p className="font-bold">{data.address.title}</p>
              <p>{data.address.description}</p>
            </div>
          </div>
          <div className="w-full h-[68px] flex items-center mobile:mt-6 tablet:mt-0">
            <Image
              alt={data.gmail.alt}
              loading="lazy"
              width={40}
              height={40}
              src={data.gmail.src}
            />
            <div className="ml-4">
              <p className="font-bold">{data.gmail.content}</p>
              <p>{data.gmail.tel}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 h-[264px] mobile:justify-items-center mobile:text-center tablet:justify-items-start tablet:text-start justify-items-center text-center ">
        <div className="space-y-3">
          <h6 className="font-bold">Về GUSWEB</h6>
          <ul className="space-y-3">
            {data.aboutUs &&
              data.aboutUs.map((item: any, index: number) => (
                <li key={index}>
                  <Link className="hover:text-[#08BED5]" href={item.slug}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h6 className="font-bold">GUSWEB đã làm được gì</h6>
          <ul className="space-y-3">
            {data.doings &&
              data.doings.map((item: any, index: number) => (
                <li key={index}>
                  <Link className="hover:text-[#08BED5]" href={item.slug}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h6 className="font-bold">Theo dõi</h6>
          <div className="flex flex-row gap-2">
            {data.icons &&
              data.icons.map((item: any, index: number) => (
                <Link key={index} href={item.slug}>
                  <Image src={item.src} alt={item.alt} width={32} height={32} />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] laptop:mt-4 tablet:mt-20 mobile:mt-[300px]">
        <hr className="border-t-2 mb-4" />
      </div>
    </footer>
  );
}
