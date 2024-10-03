import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ImgHeader() {
    return (
        <div className="relative w-full h-[1024px]">
            <Image
                src="/images/Desktop/TangGiaTri.png"
                alt="Header Banner"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 0px) 100vw"
            />
        </div>
    );
}
