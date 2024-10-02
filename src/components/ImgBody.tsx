"use client"
import Image from 'next/image';
import React from 'react';

export default function ImgBody() {
    return (
        <div className="relative  w-full h-[931px] ">
            <Image
                src="/images/Desktop/Desktop2.png"
                alt="Header Banner"
                fill
                className="object-cover"
                loading="lazy"
                decoding="async"
            />
            {/* <Image src="/images/Desktop/Desktop - 2.png" alt="Header Banner" width='1440' height='931' ></Image> */}
        </div>
    );
}
