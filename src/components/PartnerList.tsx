"use client"
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SwiperContainer123 from '@/components/SwiperContainer123';
import Slide from '@/components/Slide';


const item = {
    title: "Trách nhiệm với niềm tin của khách hàng",
    descriptions: "Bằng kinh nghiệm vững chắc và tinh thần trách nhiệm, chúng tôi đã thực hiện thành công và nhanh chóng các dự án của các khách hàng trong nhiều lĩnh vực"
}

const PartnerList = () => {
    return (
        <div className="relative w-full h-[559px]">
            <Image
                src="/images/Section.png"
                alt="Hình nền khách hàng của Gusweb"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 0px) 100vw"
            />
            <div className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[700px] bg-white bg-opacity-70 p-4 rounded-lg'>
                <span className='text-[24px] relative text-preamble '>KHÁCH HÀNG CỦA <b>GUSWEB</b></span>
                <p className='text-[56px] font-bricolage'>{item.title}</p>
                <span>{item.descriptions}</span>
            </div>
            <div className='absolute bottom-20 left-0 right-0'>
                <Slide />
            </div>

        </div>
    );
}
export default PartnerList