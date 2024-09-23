"use client"
import Image from 'next/image';
import CardHover from '@/components/CardHover';
import React from 'react';

export default function ImgBody() {
    return (
        <div className="relative w-full h-[639px] mt-[88px]">

            <Image
                src="/images/Desktop/Group.png"
                alt="Header Banner"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 0px) 100vw"
            />
            <CardHover />

        </div>
    );
}
