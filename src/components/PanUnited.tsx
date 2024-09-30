import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SwiperContainer123 from '@/components/SwiperContainer123';

export default function PanUnited() {
    return (
        <div className='flex flex-row items-center relative'>
            <div className='flex flex-col justify-center gap-4 w-[40%]'>
                <p className='font-bold text-2xl'>CÁC DỰ ÁN TIÊU BIỂU</p>
                <span className='font-semibold text-[56px]'>PanUnited’s go Truck mobile application</span>
                <span className='text-sm'>Ứng dụng di động dành cho tài xế xe tải để nhận việc và điều hành trang web để giám sát việc giao hàng.</span>
                <Link href='/chi-tiet' className='text-blue-500 underline mt-2'>Xem chi tiết</Link>
            </div>
            <div className=' w-[70%]'>
                <Image
                    src="/images/Mask group 2.png"
                    alt="Header Banner"
                    width={853} // Đặt kích thước theo tỷ lệ thực tế
                    height={469} // Đặt kích thước theo tỷ lệ thực tế
                    className="object-cover w-full h-full" // Đảm bảo hình ảnh chiếm toàn bộ chiều rộng và chiều cao
                />
            </div>
            <SwiperContainer123 />

        </div>
    );
}
