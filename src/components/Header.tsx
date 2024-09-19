"use client";
import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="absolute top-14 left-0 right-0 bottom-0">
            <div className='flex items-center justify-center max-w-[1140px] mx-auto text-left'>
                <div className='flex-1 ' >
                    <h2 className='text-[#fefefe] text-2xl home-banner-preamble'>CHÚNG TÔI LÀ</h2>
                    <h1 className='home-banner-title text-[76px]'>AMIT GROUP</h1>
                    <h3 className='home-banner-description text-[32px]'>GIẢI PHÁP CÔNG NGHỆ THÔNG TIN BỀN VỮNG</h3>
                    <p className='home-banner-content'>AMIT luôn hướng tới các giải pháp toàn diện, với tinh thần trách nhiệm cao và hiệu quả chi phí, nhằm mang lại giá trị lâu dài cho sự phát triển bền vững của khách hàng và doanh nghiệp.</p>
                    <button
                        type="button"
                        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm hidden lg:block md:w-auto md:order-1"
                    >
                        Tải profiled
                    </button>
                </div>
                <div className="flex-1">
                    <Image
                        src="/images/Desktop/Artboard 1@4x 2.png"
                        alt="Header Banner"
                        width={546}
                        height={479}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
