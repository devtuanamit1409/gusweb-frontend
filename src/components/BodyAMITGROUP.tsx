"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img_Internet_Earth from '@/components/Img_Internet_Earth';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Khởi động AOS
    }, []);

    return (
        <div className='flex flex-wrap items-center justify-center md:flex-row flex-col'>
            <Img_Internet_Earth />
            <div className="absolute top-40 left-0 right-0 bottom-0 px-4">
                <div className='flex flex-col md:flex-row items-center justify-center max-w-[1140px] mx-auto text-left'>
                    <div className='flex-1 p-4' data-aos="zoom-in">
                        <h2 className='text-[#fefefe] text-2xl home-banner-preamble'>CHÚNG TÔI LÀ</h2>
                        <h1 className='home-banner-title text-[50px] md:text-[76px]'>AMIT GROUP</h1>
                        <h3 className='home-banner-description text-[24px] md:text-[32px]'>GIẢI PHÁP CÔNG NGHỆ THÔNG TIN BỀN VỮNG</h3>
                        <p className='home-banner-content'>AMIT luôn hướng tới các giải pháp toàn diện, với tinh thần trách nhiệm cao và hiệu quả chi phí...</p>
                        <button
                            type="button"
                            className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm  lg:block md:w-auto md:order-1"
                        >
                            Tải Profile
                        </button>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0" data-aos="zoom-in">
                        <Image
                            src="/images/Desktop/Artboard 1@4x 2.png"
                            alt="Header Banner"
                            width={546}
                            height={479}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
