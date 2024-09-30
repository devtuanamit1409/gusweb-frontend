import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import QuotationButton from '@/components/QuotationButton';

export default function SwiperContainer() {
    return (
        <div className='absolute bottom-[30px] right-0 left-[40%]'>
            <Swiper
                spaceBetween={100}
                slidesPerView={2}
                loop={true}
                // autoplay={{
                //     delay: 1000,
                //     disableOnInteraction: false,
                // }}
                // modules={[Autoplay]}
                slideToClickedSlide={true}
                onSlideChange={() => console.log('slide changed')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center ml-20'>
                        <div className='w-[400px] h-[258px] relative'>
                            <Image
                                src='/images/MacBook Pro 16 inch 2.png'
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
                                src='/images/iPad Mini 2021 2.png'
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
                                src='/images/iPad Mini 2021 2.png'
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
                                src='/images/iPad Mini 2021 2.png'
                                alt=''
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <div className='flex items-center'>
                    <QuotationButton />
                </div>
            </Swiper>
        </div>
    );
}
