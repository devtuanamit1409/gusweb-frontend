import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

export default function ImgHeader() {
    return (
        <div className="relative w-full h-[639px] mt-[88px]">
            <Image
                src="/images/Desktop/img.png"
                alt="Header Banner"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 0px) 100vw"
            />
            <Header />
        </div>
    );
}
