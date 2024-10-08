"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Rate } from 'antd';

const item = {
    title: "Câu chuyện thành công của khách hàng",
    url: "/images/Maskgroup.png"
}

export default function CustomerSuccessStory() {
    const [items, setItems] = useState([
        {
            name: "Wei Tan",
            title: "CEO at Techtiq Solutions",
            description: '"The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work."',
            imageUrl: "/images/Avatar.png",
            rating: 4,
        },
        {
            name: "Emily Johnson",
            title: "CTO at Innovatech",
            description: '"The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work."',
            imageUrl: "/images/Avatar.png",
            rating: 5,
        },
        {
            name: "Michael Brown",
            description: '"The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work."',
            title: "Founder at Brown Ventures",
            imageUrl: "/images/Avatar.png",
            rating: 4,
        },
        {
            name: "Sarah Lee",
            title: "CEO at TechDream",
            description: '"The client has been impressed with AMIT GROUP’s ability to manage and solve issues. Although they would benefit from focusing on continuous improvement, the client expects to see some improvement in some areas. Their flexibility and adaptability are highlights of their work."',
            imageUrl: "/images/Avatar.png",
            rating: 5,
        },
    ]);
    return (
        <div className='flex flex-row items-center relative h-[580px] max-w-[1109px] mx-auto'>
            <div className='flex flex-col gap-4 w-[40%]'>
                <Image src='/images/Maskgroup.png' alt='' width='166' height='166'></Image>
                <span className='font-semibold text-[42px] w-96'>{item.title}</span>
            </div>
            <div className='w-[60%]'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={true}
                    modules={[Autoplay]}
                    slideToClickedSlide={true}
                    onSlideChange={() => console.log('slide changed')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className='!w-max !h-[430px]'>
                            <div className='ml-2 bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] w-[451px] h-[420px]'>
                                <div className='text-black flex flex-col gap-[14px] p-4 bg-[#E5FCFF] rounded-[10px]'>
                                    <div className='relative flex flex-row items-center px-5 '>
                                        <div className='flex-grow'>
                                            <span className='mr-2 text-[20px]'>{item.name}</span>
                                            <p className='mr-2 text-[14px]'>{item.title}</p>
                                            <Rate disabled defaultValue={item.rating} className='mt-2' />
                                        </div>
                                        <Image src={item.imageUrl} alt='Avatar' width='50' height='50' className='rounded-full ml-4' />
                                    </div>
                                </div>
                                <div className='flex flex-row text-black mt-5 gap-[5px] p-10 text-[16px]'>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
