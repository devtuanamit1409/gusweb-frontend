import React from 'react'

import Image from 'next/image';
import { aboutModel } from '@/models/aboutModel';

const items: aboutModel[] = [
    {
        url: "/images/chúng tôi có các chuyên gia trong nhiều lĩnh vực.png",
        description: "CHÚNG TÔI CÓ CÁC CHUYÊN GIA TRONG NHIỀU LĨNH VỰC"
    },
];

export default function About() {
    return (
        <div className=''>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="relative w-full h-[1024px]">
                        <Image
                            src={item.url}
                            alt="Header Banner"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center' }}
                            loading="lazy"
                            decoding="async"
                            sizes="(min-width: 0px) 100vw"
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className=" p-6 w-[912px] h-[324px] bg-white/30 border-2 border-white/30 rounded-[20px] gap-[16px] backdrop-blur-[10px]">
                                <p className='text-[56px] text-center p-10'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
