import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import QuotationButton from '@/components/QuotationButton';
import { Button } from 'antd';

export default function SwiperContainer123() {
    return (
        <div className='absolute bottom-[30px] right-0 left-[40%]'>
            <Swiper
                spaceBetween={90}
                slidesPerView={2}
                loop={true}
                // autoplay={{
                //     delay: 1500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                slideToClickedSlide={true}
                onSlideChange={() => console.log('slide changed')}
                onSwiper={(swiper) => console.log(swiper)}
                className='w-[800px]'
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center ml-20'>
                        <div className='w-[400px] h-[258px] relative'>
                            <Image
                                src='/images/MacBookPro16inch2.png'
                                alt=''
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='w-[400px] h-[258px] relative'>
                            <Image
                                src='/images/iPadMini.png'
                                alt=''
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='w-[400px] h-[258px] relative'>
                            <Image
                                src='/images/iPadMini.png'
                                alt=''
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center'>
                        <div className='w-[400px] h-[258px] relative'>
                            <Image
                                src='/images/iPadMini.png'
                                alt=''
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex left-[90px] bottom-[-80px] relative'>
                <button
                    type="button"
                    className="text-white bg-[#27B3E9] w-[180px] h-[42px] font-medium rounded-md text-sm"
                >
                    Xem tất cả dự án
                </button>
            </div>
        </div>

    );
}
