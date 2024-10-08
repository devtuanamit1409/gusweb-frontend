import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchFooter } from "@/utils/GlobalApi";

export default async function Footer() {
    const data = await fetchFooter("vi");
    //console.log(data.icons)
    return (
        <footer className="h-[620px] flex flex-col max-w-[1116px] mx-auto gap-8 mt-10">
            <div className=" flex flex-row justify-between">
                <div className=" w-[379px] h-[68px]" >
                    <Image
                        src={data.logo.src}
                        alt={data.logo.alt}
                        width={261}
                        height={80}
                    />
                </div>
                <div className="w-[379px] h-[68px]  flex items-center">
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
                <div className="w-[379px] h-[68px]  flex items-center">
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
            <div className=" h-[264px] flex flex-row justify-between" >
                <div className="space-y-3 w-[357px] h-[264px]">
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
                </div >
                <div className="w-[357px] h-[264px] space-y-3">
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
                <div className="w-[357px] h-[264px] space-y-3">
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
            <div className="max-w-[1140px] justify-between ">
                <hr className="border-t-2 mb-4" />
                <p className="footer-bottom-copyRight text-left text-sm">
                    Copyright © 2022 <b>AMIT GROUP</b>. All Rights Reserved | Design by{" "}
                    <b>AMIT GROUP</b>
                </p>
            </div>
        </footer>
    );
}
