'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SwiperContainer from "@/components/SwiperContainer";
import QuotationButton from "./QuotationButton";
import { useTranslations } from "next-intl";
import IconArrowDesc from "@/components/Icons/IconArrowDesc";
import { Button, Modal } from "antd";
import { Swiper } from "swiper";

export default function ProjectShowcase({ project }: any) {
  const t = useTranslations();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [tempSlideIndex, setTempSlideIndex] = useState(0);
  const [modal2Open, setModal2Open] = useState(false);
  const [isClosable, setIsClosable] = useState(false);
  const swiperRef = useRef<Swiper | null>(null); // Khai báo kiểu cho swiperRef

  const handlePreviousProject = () => {
    setTempSlideIndex((prevIndex) =>
      prevIndex === 0 ? project.items.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setTempSlideIndex((prevIndex) =>
      prevIndex === project.items.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleClick = () => {
    setTempSlideIndex(activeSlideIndex);
    setModal2Open(true);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop(); // Dừng autoplay
    }
  };

  const handleCloseModal = () => {
    setModal2Open(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start(); // Khởi động lại autoplay
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsClosable(window.innerWidth < 744);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col tablet:flex-row items-center relative tablet:h-[436px] laptop:h-[545px] mt-20">
      <div className="max-w-[1116px] w-full mx-auto flex flex-row px-4 desktop:px-0 z-10">
        <div className="flex flex-col gap-2 w-full tablet:w-[40%] mt-[80px]">
          <p className="font-semibold text-2xl relative text-preamble w-max text-[#1C1C1C]">
            {t("homePage.project")}
          </p>
          <p className="font-bold leading-[38.4px] laptop:leading-[78px] text-[32px] laptop:text-[56px] line-clamp-3 text-[#1C1C1C]">
            {project?.items[activeSlideIndex]?.title}
          </p>
          <span className="text-base line-clamp-2 leading-6 text-[#363636]">
            {project.items[activeSlideIndex].description}
          </span>
          <button
            className='text-[#1FA9EC] font-medium text-[15px] underline mt-2 flex flex-row items-center gap-2 leading-6 w-max h-8'
            onClick={handleClick}
          >
            Xem chi tiết<IconArrowDesc />
          </button>
        </div>
        <div className="hidden tablet:w-[60%]"></div>
      </div>

      <div className="w-full tablet:absolute tablet:top-0 tablet:left-0 tablet:right-0 tablet:bottom-0 tablet:mt-0 mt-6 flex flex-row">
        <div className="tablet:w-[55%] tablet:ml-auto w-full relative h-full overflow-hidden">
          <div className="hidden tablet:block w-full tablet:w-full laptop:w-full laptop:h-[90%] tablet:h-[354px]">
            <Image
              src="/images/Maskgroup2.png"
              alt="image banner project laptop"
              width={800}
              height={450}
              className="object-cover object-left w-full tablet:w-auto h-full min-h-[328px] tablet:h-full"
            />
          </div>
          <div className="tablet:hidden w-full min-w-[328px] min-h-[328px]">
            <Image
              src="/images/MaskgroupMobile.png"
              alt="image banner project mobile"
              width={744}
              height={744}
              className="object-cover w-full min-h-[328px] h-full"
            />
          </div>
          <div className="absolute top-0 left-0 h-full tablet:h-[354px] laptop:h-full w-full tablet:w-[1100px]">
            <SwiperContainer
              projects={project.items}
              onSlideChangeIndex={setActiveSlideIndex}
              ref={swiperRef} // Truyền swiperRef xuống SwiperContainer
            />

          </div>
          <div className="hidden tablet:block absolute bottom-0 left-0 mobile:left-[50%] tablet:left-[37%] laptop:left-[26%] desktop:left-[20%] ">
            <QuotationButton label="Xem tất cả dự án" />
          </div>
        </div>
      </div>
      <div className="tablet:hidden">
        <QuotationButton label="Xem tất cả dự án" />
      </div>

      <Modal
        onClose={handleCloseModal}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        closable={isClosable}
        width={1116}
        height={573}
      >
        <div className='mobile:flex-col tablet:flex-row flex gap-6 py-[20px] px-4'>
          <div className='flex flex-col max-w-[418px] mobile:mx-auto'>
            <div className='w-full'>
              <Image src={project.items[tempSlideIndex].url}
                alt={project.items[tempSlideIndex].alt} width={418} height={427} />
            </div>
            <div className='flex justify-center items-end tablet:w-[418px] mobile:max-w-[418px] h-[66px]'>
              <div className='flex tablet:gap-6 mobile:gap-3 '>
                <button
                  className="bg-[#27B3E9] text-white font-semibold h-[42px] laptop:w-[166px] tablet:w-[100px] mobile:w-[100px]"
                  onClick={handlePreviousProject}
                >
                  Dự án trước
                </button>
                <button
                  className="bg-[#27B3E9] text-white font-semibold h-[42px]  laptop:w-[166px] tablet:w-[100px] mobile:w-[100px]"
                  onClick={handleNextProject}
                >
                  Dự án sau
                </button>
              </div>

            </div>
          </div>
          <div className='max-w-[594px] max-h-[493px] mx-auto scrollbar-custom overflow-y-auto pr-6 gap-6 flex flex-col'>
            <div>
              <p className='font-semibold gradient-text text-xl'>Tự động hóa</p>
              <p className='font-bold text-[32px] font-bricolage leading-[38.4px]'>{project.items[tempSlideIndex].title}</p>
              <p>{project.items[tempSlideIndex].description}</p>
            </div>
            <div className='flex items-center gap-6'>
              <p className='font-semibold text-xl leading-[24px] '>khách hàng</p>
              <div className='flex max-h-[40px] gap-2'>
                {project.items[tempSlideIndex].customer.map((item: any, index: number) => (
                  <div className='w-full' key={index}>
                    <Image
                      src={item.url}
                      alt={item.alt}
                      width={120}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='font-semibold text-xl leading-[24px]'>Công nghệ</p>
              <div className='flex gap-2 mt-1'>
                {project.items[tempSlideIndex].technology.map((item: any, index: number) => (
                  <div className='w-[40px] h-[40px]' key={index}>
                    <Image
                      src={item.url}
                      alt={item.alt}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='font-semibold text-xl leading-[24px]'>Hệ điều hành</p>
              <div className='flex gap-2 mt-1'>
                {project.items[tempSlideIndex].system.map((item: any, index: number) => (
                  <div className='w-[40px] h-[40px]' key={index}>
                    <Image
                      src={item.url}
                      alt={item.alt}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='font-semibold text-xl leading-[24px]'>Thử thách</p>
              <p className='mt-1'>{project.items[activeSlideIndex].solution}
              </p>
            </div>
            <div>
              <p className='font-semibold text-xl leading-[24px]'>Giải pháp</p>
              <p className='mt-1'>{project.items[activeSlideIndex].challenge}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

