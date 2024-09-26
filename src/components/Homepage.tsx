"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='flex items-center justify-center max-w-[1140px] mx-auto text-left'>
      <div className="flex-1 aos-init p-4" data-aos="fade-right" data-aos-duration="1000">
        <Image
          src="/images/Desktop/Untitled-2 1.png"
          alt="Header Banner"
          width={546}
          height={546}
        />
      </div>
      <div className='flex-1'>
        <span className='text-2xl ' data-aos="fade-left" data-aos-duration="1000">TRIẾT LÝ KINH DOANH</span>
        <h3 className='font-bold text-[56px]'>Thêm hợp tác</h3>
        <p className='font-bold text-[56px]'>Thêm giá trị</p>
        <p>Chúng tôi là nhóm các công ty công nghệ thông tin, hợp tác cùng nhau để mang đến các giải pháp IT chất lượng, bảo mật, đáp ứng nhu cầu của khách hàng và thúc đẩy doanh nghiệp tăng trưởng vững bền.</p>
      </div>
    </div>
  );
}
