import React from 'react'

import Image from 'next/image';
import { midPageModel } from '@/models/MidPageModel';

const items: midPageModel[] = [
    {
        url: "/images/Promotion.png",
        title: "LIÊN HỆ",
        description: "Tạo dựng thương hiệu, khẳng định vị thế"
    },
];

export default function Contact() {
    return (
        <div className=''>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="relative h-[428px] flex justify-center ">
                        <Image
                            src={item.url}
                            alt="Header Banner"
                            width={1540}
                            height={428}
                            className=''
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className=" p-6 w-[700px] h-[324px] rounded-[20px] gap-[16px]">
                                <p className='text-[16px] text-center text-white'>{item.title}</p>
                                <p className='text-[56px] text-center text-white font-bricolage'>
                                    {item.description}
                                </p>
                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <button
                                        type="button"
                                        className="text-white w-[166px] h-[42] bg-[#1FA9EC] focus:outline-none font-medium rounded-md text-sm px-8 py-3 hidden lg:block md:w-auto md:order-1"
                                    >
                                        Tải Profile
                                    </button>
                                    <button
                                        type="button"
                                        className="text-[#00D2FF] w-[166px] h-[42] bg-[#FEFEFE] focus:outline-none font-medium rounded-md text-sm px-8 py-3 hidden lg:block md:w-auto md:order-1"
                                    >
                                        Liên hệ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
