"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Rate } from 'antd';

const item = {
    title: "Câu chuyện thành công của khách hàng",
}

export default function CustomerSuccessStory() {
    return (
        <div className='flex flex-row items-center relative h-[580px] max-w-[1109px] mx-auto'>
            <div className='flex flex-col gap-4 w-[40%]'>
                <Image src='/images/Maskgroup.png' alt='' width='166' height='166'></Image>
                <span className='font-semibold text-[42px] w-96'>{item.title}</span>
            </div>
            <div className='w-[70%]'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={true}
                    modules={[Autoplay]}
                    slideToClickedSlide={true}
                    onSlideChange={() => console.log('slide changed')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='h-[490px] w-[1000px] bottom-[-30px] rounded-[10px] overflow-hidden' // Thêm rounded và overflow-hidden ở đây
                >
                    <SwiperSlide>
                        <div className='ml-2 top-0 bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] w-[451px] h-[420px]'>
                            <div className='text-black flex flex-col gap-[14px] p-4 bg-[#E5FCFF]'>
                                <div className='relative flex flex-row items-center px-5 '>
                                    <div className='flex-grow'>
                                        <span className='mr-2 text-[20px]'>Wei Tan</span>
                                        <p className='mr-2 text-[14px]'>CEO at Techtiq Solutions</p>
                                        <Rate disabled defaultValue={4} className='mt-2' />
                                    </div>
                                    <Image src='/images/Avatar.png' alt='Avatar' width='50' height='50' className='rounded-full ml-4' />
                                </div>
                            </div>
                            <div className='flex flex-row text-black mt-5 gap-[5px] p-10 text-[16px]'>
                                <span>“The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work.”</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='ml-2 top-0 bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] w-[451px] h-[420px]'>
                            <div className='text-black flex flex-col gap-[14px] p-4 bg-[#E5FCFF]'>
                                <div className='relative flex flex-row items-center px-5 '>
                                    <div className='flex-grow'>
                                        <span className='mr-2 text-[20px]'>Wei Tan</span>
                                        <p className='mr-2 text-[14px]'>CEO at Techtiq Solutions</p>
                                        <Rate disabled defaultValue={4} className='mt-2' />
                                    </div>
                                    <Image src='/images/Avatar.png' alt='Avatar' width='50' height='50' className='rounded-full ml-4' />
                                </div>
                            </div>
                            <div className='flex flex-row text-black mt-5 gap-[5px] p-10 text-[16px]'>
                                <span>“The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work.”</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='ml-2 top-0 bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] w-[451px] h-[420px]'>
                            <div className='text-black flex flex-col gap-[14px] p-4 bg-[#E5FCFF]'>
                                <div className='relative flex flex-row items-center px-5 '>
                                    <div className='flex-grow'>
                                        <span className='mr-2 text-[20px]'>Wei Tan</span>
                                        <p className='mr-2 text-[14px]'>CEO at Techtiq Solutions</p>
                                        <Rate disabled defaultValue={4} className='mt-2' />
                                    </div>
                                    <Image src='/images/Avatar.png' alt='Avatar' width='50' height='50' className='rounded-full ml-4' />
                                </div>
                            </div>
                            <div className='flex flex-row text-black mt-5 gap-[5px] p-10 text-[16px]'>
                                <span>“The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work.”</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='ml-2 top-0 bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] w-[451px] h-[420px]'>
                            <div className='text-black flex flex-col gap-[14px] p-4 bg-[#E5FCFF]'>
                                <div className='relative flex flex-row items-center px-5 '>
                                    <div className='flex-grow'>
                                        <span className='mr-2 text-[20px]'>Wei Tan</span>
                                        <p className='mr-2 text-[14px]'>CEO at Techtiq Solutions</p>
                                        <Rate disabled defaultValue={4} className='mt-2' />
                                    </div>
                                    <Image src='/images/Avatar.png' alt='Avatar' width='50' height='50' className='rounded-full ml-4' />
                                </div>
                            </div>
                            <div className='flex flex-row text-black mt-5 gap-[5px] p-10 text-[16px]'>
                                <span>“The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work.”</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
