"use client"
import Image from 'next/image';
import React from 'react';

export default function Principle() {
    return (
        <div className="relative  h-[1517px] max-w-[1145px] mx-auto mt-20">
            <Image
                src="/images/Frame.png"
                alt="Header Banner"
                fill
                className="object-cover"
                loading="lazy"
                decoding="async"
            />
            <div className='flex'>
                <div>
                    <p>NGUYÊN TẮC LÀM VIỆC</p>
                    <p className='text-[56px] font-bricolage'>Minh bạch, trách nhiệm,
                        <br />hợp tác, đổi mới sáng tạo</p>
                    <p>Tại GUSWEB, chúng tôi cam kết tuân thủ các nguyên tắc làm việc cốt lõi để đảm bảo sự phát triển bền vững, tạo dựng niềm tin và mang lại giá trị tối đa cho khách hàng.</p>
                    <hr className="border-t-2 mb-4 w-36" />
                </div>
            </div>
        </div>
    );
}
