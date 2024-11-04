"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SwiperContainer from "@/components/SwiperContainer";
import QuotationButton from "./QuotationButton";
import { useTranslations } from "next-intl";
import IconArrowDesc from "@/components/Icons/IconArrowDesc";
import { Button, Modal } from "antd";
import { Swiper } from "swiper";
import Link from "next/link";

export default function ProjectShowcase({ project }: any) {

  const t = useTranslations();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [tempSlideIndex, setTempSlideIndex] = useState(0);
  const [modal2Open, setModal2Open] = useState(false);
  const [isClosable, setIsClosable] = useState(false);
  const swiperRef = useRef<Swiper | null>(null);

  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "proposal.doc");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("project-123", project)
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
      swiperRef.current.autoplay.stop();
    }
  };

  const handleCloseModal = () => {
    setModal2Open(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsClosable(window.innerWidth < 744);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col tablet:flex-row items-center relative tablet:h-[436px] laptop:h-[545px] mt-20">
      <div className="max-w-[1116px] w-full mx-auto flex flex-row px-4 desktop:px-0 z-10">
        <div className="flex flex-col gap-2 w-full tablet:w-[40%] mt-[80px]" >
          <p className="font-semibold text-2xl relative text-preamble w-max text-[#1C1C1C]">
            {t("homePage.project")}
          </p>
          <p className="font-bold leading-[38.4px] laptop:leading-[78px] text-[32px] laptop:text-[56px] line-clamp-3 text-[#1C1C1C]" style={{ lineHeight: '67.2px' }}>
            {project?.items[activeSlideIndex]?.title}
          </p>
          <span className="text-base line-clamp-2 leading-6 text-[#363636]"  >
            {project.items[activeSlideIndex]?.description}
          </span>
          <button
            className="text-[#1FA9EC] font-medium text-[15px] underline mt-2 flex flex-row items-center gap-2 leading-6 w-max h-8"
            onClick={handleClick}
          >
            <p>{t("homePage.buttonProj")}</p>
            <IconArrowDesc />
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
              ref={swiperRef}
              pauseAutoplay={modal2Open}
            />
          </div>
          <div className="hidden tablet:block absolute bottom-0 left-0 mobile:left-[50%] tablet:left-[37%] laptop:left-[26%] desktop:left-[20%] ">
            <Link href="/case-studies">
              <button
                className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
              >

                {t("project.button")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="tablet:hidden">
        <Link href="/case-studies">
          <button
            className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3 "
          >
            {t("project.button")}
          </button>
        </Link>
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
        style={{ background: "#FEFEFE" }}
      >
        <div className="mobile:flex-col tablet:flex-row flex gap-6 py-[20px] px-4">
          <div className="flex flex-col max-w-[418px] mobile:mx-auto">
            <div className="w-full">
              <Image
                src={project.items[tempSlideIndex]?.url}
                alt={project.items[tempSlideIndex]?.alt}
                width={418}
                height={427}
              />
            </div>
            <div className="flex justify-center items-end tablet:w-[418px] mobile:max-w-[418px] h-[66px]">
              <div className="flex tablet:gap-6 mobile:gap-3 ">
                <button
                  className="bg-[#27B3E9] text-white font-semibold h-[42px] laptop:w-[166px] tablet:w-[100px] mobile:w-[100px] rounded-md"
                  onClick={handlePreviousProject}
                >
                  {t("project.buttonTruoc")}
                </button>
                <button
                  className="bg-[#27B3E9] text-white font-semibold h-[42px]  laptop:w-[166px] tablet:w-[100px] mobile:w-[100px] rounded-md"
                  onClick={handleNextProject}
                >
                  {t("project.buttonSau")}
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[594px] max-h-[493px] mx-auto scrollbar-custom overflow-y-auto pr-6 gap-6 flex flex-col">
            <div>
              <p className="font-semibold gradient-text text-xl">{t("project.Automation")}</p>
              <p className="font-bold text-[32px] font-bricolage leading-[38.4px]">
                {project.items[tempSlideIndex]?.title}
              </p>
              <p>{project.items[tempSlideIndex]?.description}</p>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-semibold text-xl leading-[24px] ">

                {t("project.customer")}
              </p>
              <div className="flex max-h-[40px] gap-2">
                {project.items[tempSlideIndex]?.customer.map(
                  (item: any, index: number) => (
                    <div className="w-full" key={index}>
                      <Image
                        src={item.url}
                        alt={item.alt}
                        width={120}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl leading-[24px]">
                {t("project.technology")}</p>
              <div className="flex gap-2 mt-1">
                {project.items[tempSlideIndex]?.technology.map(
                  (item: any, index: number) => (
                    <div className="w-[40px] h-[40px]" key={index}>
                      <Image
                        src={item.url}
                        alt={item.alt}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl leading-[24px]">
                {t("project.system")}
              </p>
              <div className="flex gap-2 mt-1">
                {project.items[tempSlideIndex]?.system.map(
                  (item: any, index: number) => (
                    <div className="w-[40px] h-[40px]" key={index}>
                      <Image
                        src={item.url}
                        alt={item.alt}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl leading-[24px]">
                {t("project.challenge")}</p>
              <p className="mt-1">{project.items[activeSlideIndex]?.solution}</p>
            </div>
            <div>
              <p className="font-semibold text-xl leading-[24px]">Giải pháp</p>
              <p className="mt-1">
                {project.items[activeSlideIndex]?.challenge}
              </p>
            </div>
            <div className="flex tablet:gap-6 mobile:gap-3 ">
              <button
                className="bg-[#27B3E9] text-white font-semibold h-[42px] laptop:w-[166px] tablet:w-[100px] mobile:w-[100px] rounded-md"
                onClick={() => handleDownload(project.items[tempSlideIndex]?.file)}
              >
                {t("project.buttonPro")}
              </button>
              <button
                className="!bg-[#27B3E9] gradient-text font-semibold h-[42px]  laptop:w-[166px] tablet:w-[100px] mobile:w-[100px] rounded-md border"
                onClick={handleNextProject}
              >
                {t("project.buttonSau")}

              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}