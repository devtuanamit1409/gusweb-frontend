import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchFooter } from "@/utils/GlobalApi";

export default async function Footer() {
  const data = await fetchFooter("vi");
  //console.log(data.icons);

  return (
    <footer className=" py-20">
      <div className="max-w-[1140px] flex items-start justify-between mx-auto ">
        <div className="p-3 w-1/4">
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={261}
            height={80}
          />
        </div>
        <div className="w-3/4 flex flex-row">
          <div className="w-1/2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Image
                alt={data.address.alt}
                loading="lazy"
                width={40}
                height={40}
                src={data.address.src}
              />
              <div className="ml-4 ">
                <p className="font-bold">{data.address.title}</p>
                <p>{data.address.description}</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
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
      </div>
      <div className="max-w-[1140px] flex items-start justify-between mx-auto mt-16">
        <div className="flex flex-row w-full">
          <div className="w-[30%] px-4 sm:px-6 lg:px-8">
            <div className="mb-6 space-y-3">
              <h6 className="font-bold">Về GUSWEB</h6>
              <ul className="space-y-3 ">
                {data.aboutUs &&
                  data.aboutUs.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link className="hover:text-[#08BED5]" href={item.slug}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="w-[40%] px-4 sm:px-6 lg:px-8 ">
            <div className="mb-6 space-y-3">
              <h6 className="font-bold ">GUSWEB đã làm được gì</h6>
              <ul className="space-y-3">
                {data.doings &&
                  data.doings.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link className="hover:text-[#08BED5]" href={item.slug}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="w-[14%] px-4 space-y-3">
            <h6 className="font-bold">Theo dõi</h6>
            <div className="flex flex-row gap-2">
              {data.icons &&
                data.icons.map((item: any, index: number) => {
                  return (
                    <Link key={index} href={item.slug}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={32}
                        height={32}
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] justify-between mx-auto">
        <hr className="border-t-2 mb-4" />
        <p className="footer-bottom-copyRight text-left text-sm">
          Copyright © 2022 <b>AMIT GROUP</b>. All Rights Reserved | Design by{" "}
          <b>AMIT GROUP</b>
        </p>
      </div>
    </footer>
  );
}
