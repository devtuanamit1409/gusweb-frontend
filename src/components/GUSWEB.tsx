"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { bodyDesktopModel } from '@/models/bodyDesktopModel';

export default function GUSWEB() {
  const items: bodyDesktopModel[] = [
    {
      url: '/images/Frame 1000003639.png',
      tilte: 'GUSWEB LÀ AI?',
      tilte2: 'Hợp tác để đi đến thành công',
      description: 'Với 15 năm kinh nghiệm phát triển và vận hành phần mềm, GUSWEB hiểu sâu cách công nghệ mang lại giá trị thực sự cho doanh nghiệp. Chúng tôi chọn lựa công nghệ tối ưu, khai thác tối đa tiến bộ để đảm bảo website vận hành mượt mà, ổn định và tiết kiệm chi phí.'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='flex items-center justify-center max-w-[1140px] mx-auto text-left'>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 aos-init p-4" data-aos="fade-right" data-aos-duration="1000">
            <Image
              src={item.url}
              alt="Header Banner"
              width={546}
              height={546}
            />
          </div>
          <div className='flex-1'>
            <span className='text-2xl ' data-aos="fade-left" data-aos-duration="1000">
              <b className='font-bold uppercase'>{item.tilte.split(' ')[0]}</b>{' '}
              <span className='normal-case'>{item.tilte.split(' ').slice(1).join(' ')}</span>
            </span>

            <h3 className=' font-bold text-[56px] font-bricolage'>{item.tilte2}</h3>
            <p>{item.description}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
