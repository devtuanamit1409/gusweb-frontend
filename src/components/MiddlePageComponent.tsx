
import { midPageModel } from '@/models/MidPageModel';
import { pages } from 'next/dist/build/templates/app-page';
import Image from 'next/image';
import React from 'react'

interface page {
    item: midPageModel;
    width?: number
    height?: number
}

export const MiddlePageComponent = (pages: page) => {
    const { item, width = 80, height = 80 } = pages;
    return (
        <div className="relative w-full h-[1024px]">
            <Image src={item.url || " "} alt='' width={width} height={height} />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className=" p-6 w-[912px] h-[324px] bg-white/30 border-2 border-white/30 rounded-[20px] gap-[16px] backdrop-blur-[10px]">
                    <p className='text-[56px] text-center p-10'>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
