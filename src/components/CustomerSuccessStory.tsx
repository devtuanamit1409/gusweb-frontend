"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rate } from "antd";

export default function CustomerSuccessStory({ chats }: any) {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth <= 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className=" flex  relative mx-auto p-3 laptop:h-[580px] laptop:max-w-[1109px] tablet:max-w-[1109px] tablet:h-[580px] mobile:max-h-[673px] mobile:max-w-[360px] tablet:items-center tablet:flex-row mobile:flex-col">
            <div className="flex flex-col gap-4 max-w-[450px] ">
                <Image
                    src="/images/Maskgroup.png"
                    alt=""
                    width="166"
                    height="166"
                />
                <span className="font-semibold text-[42px] tablet:w-[356px] tablet:h-[150px]  mobile:h-[78px]">
                    Câu chuyện thành công của khách hàng
                </span>
            </div>
            <Swiper
                spaceBetween={300}
                loop={true}
                modules={[Autoplay, Navigation]}
                navigation={isLargeScreen}
                style={{ padding: 24 }}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                    },
                    744: {
                        slidesPerView: 1,
                    },
                    360: {
                        slidesPerView: 1,
                    },
                }}
            >
                {chats &&
                    chats.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="bg-[#fefefe] shadow-lg shadow-[rgba(58,123,213,0.4)] rounded-[10px] laptop:w-[451px] laptop:h-[390px] tablet:max-w-[451px] tablet:max-h-[390px] mobile:max-w-[328px] mobile:max-h-[360px]">
                                    <div className="text-black flex flex-row bg-[#E5FCFF] rounded-[10px] tablet:h-[124px] tablet:w-[451px] mobile:h-[104px] mobile:w-[328px] gap-2 tablet:px-10 tablet:py-6 mobile:px-6 mobile:py-2 ">
                                        <div className="flex flex-col w-[313px] h-[76px] gap-2">
                                            <div>
                                                <span className="text-[20px]">{item.name}</span>
                                                <p className="text-[14px]">{item.position}</p>
                                            </div>
                                            <Rate disabled defaultValue={item.rating} />
                                        </div>
                                        <div className="relative max-w-[50px] w-full h-full max-h-[50px]">
                                            <Image
                                                src={item.url}
                                                alt={item.alt}
                                                priority
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-black text-[16px] h-[296px] laptop:p-10 tablet:p-8 mobile:p-4">
                                        <span>{item.content}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}
