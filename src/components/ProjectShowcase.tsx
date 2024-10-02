import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SwiperContainer123 from '@/components/SwiperContainer123';

export default function ProjectShowcase() {
    return (
        <div className='flex flex-row items-center relative'>
            <div className='flex flex-col justify-center gap-4 w-[40%]'>
                <p className='font-semibold text-2xl relative text-preamble w-64'>CÁC DỰ ÁN TIÊU BIỂU</p>
                <span className='font-semibold text-[56px]'>PanUnited’s go Truck mobile application</span>
                <span className='text-base'>Ứng dụng di động dành cho tài xế xe tải để nhận việc và điều hành trang web để giám sát việc giao hàng.</span>
                <Link href='/chi-tiet' className='text-blue-500 underline mt-2'>Xem chi tiết</Link>
            </div>
            <div className=' w-[70%]'>
                <Image
                    src="/images/Maskgroup2.png"
                    alt="Header Banner"
                    width={853}
                    height={469}
                    className="object-cover w-full h-full"
                />
            </div>
            <SwiperContainer123 />
        </div>
    );
}
