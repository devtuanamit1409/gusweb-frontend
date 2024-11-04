"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { message } from "antd";
import { postEmailUser } from "@/utils/GlobalApi";
import type { NotificationArgsProps } from "antd";
import { Button, Divider, notification, Space } from "antd";
import BlogCardComponent from "./BlogCardComponent";
import BlogCard from "./BlogCard";

type NotificationPlacement = NotificationArgsProps["placement"];

const BookComponent: React.FC<any> = ({ article }) => {
  // console.log(article);

  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification`,
      description:
        "Do file pdf có kích thước lớn nên sẽ mất thời gian gửi về email của bạn!(khoản vài phút)",
      placement,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await postEmailUser({
        email: emailRef.current?.value || "",
        locale: article.locale,
        titleArticle: article.title,
        urlPdf: article.typeEbook.ebook.pdfFile,
      });

      message.success("Email đã được gửi thành công!");
      openNotification("topRight");
    } catch (error: any) {
      console.error("Error sending form", error);

      if (error?.response && error?.response?.status === 500) {
        message.error(
          "Email của bạn đã đăng ký tải file pdf này rồi, Vui lòng dùng email khác!"
        );
      } else {
        message.error("Có lỗi xảy ra trong quá trình gửi email!");
      }
    } finally {
      setLoading(false);
    }
  };

  const listItems = article.typeEbook.ebook.option
    .split(", ")
    .map((item: string) => item.trim());

  return (
    <>
      {contextHolder}
      <div className="flex flex-col gap-10 laptop:gap-0  ">
        <div className="h-[506px] relative justify-center items-center flex">
          <Image
            src={article.sub_category.url}
            alt={article.sub_category.alt}
            fill
            className="absolute top-0 left-0 object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
          <div className="laptop:max-w-[1440px] tablet:max-w-[744px] mobile:max-w-[360px] h-[506px] py-20 px-[162px] mobile:px-4 z-10 w-full flex justify-center items-center ">
            <div className="laptop:max-w-[1116px]  text-[#FEFEFE] justify-center laptop:items-start tablet:items-center mobile:items-center tablet:gap-6 laptop:gap-2 flex flex-col  w-full">
              <h5 className="font-normal text-[24px] leading-[38.4px] font-bricolage  relative text-preamble   z-30">
                #{article.sub_category.title}
              </h5>
              <h2 className="font-bold text-[56px] leading-[67.2px]  font-bricolage laptop:text-start text-center">
                {article.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="custom-container py-20 px-4 hidden  laptop:flex flex-row gap-6">
          <div className="laptop:max-w-[451px] items-start gap-6 flex flex-col w-full">
            <h5 className="line-clamp-1 label-custom flex relative text-preamble">
              QUẢN LÝ DỰ ÁN VỚI
            </h5>
            <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C] leading-[38.4px] font-bricolage">
              {article.typeEbook.intro.title}
            </h4>
          </div>
          <div className="laptop:max-w-[641px]  font-normal text-4 leading-6 w-full">
            <p>{article.typeEbook.intro.description}</p>
          </div>
        </div>

        <div className="custom-container items-center ">
          <div
            className="max-w-[1116px] mx-auto w-full laptop:px-2 tablet:px-[122px] mobile:px-4 flex flex-col gap-10"
            dangerouslySetInnerHTML={{
              __html: article.detail,
            }}
          />
        </div>
        <div className="custom-container laptop:max-w-[1116px] laptop:py-20 laptop:flex-grow  flex  tablet:flex-row  laptop:gap-6 mobile:gap-6 mobile:flex-col tablet:justify-between  px-4  mobile:items-center">
          <div className="  relative w-full  items-center justify-center flex">
            <Image
              src={article.typeEbook.ebook.src}
              alt={article.typeEbook.ebook.alt}
              width={348}
              height={474}
              className=" h-[474px]   object-fill"
            />
          </div>
          <div className=" flex flex-col gap-10 w-full justify-center ">
            <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C]  laptop:max-w-[600px] leading-[38.4px] h-[76px] font-bricolage w-full hidden laptop:block">
              {article.typeEbook.ebook.titleBook}
            </h4>
            <h1 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C] leading-[38.4px] font-bricolage laptop:hidden mobile:block tablet:block">
              Tai ebook
            </h1>
            <form
              className="flex flex-row min-h-[56px]   line-clamp-2 items-center  gap-6 laptop:justify-start justify-between w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                ref={emailRef}
                placeholder="Nhập email của bạn"
                required
                className=" h-[56px] px-3 rounded-[8px] border border-[#C9C9C9] laptop:max-w-[341px] flex-grow"
              />
              <Button
                type="primary"
                loading={loading}
                htmlType="submit"
                className="!h-[56px]  hover:!opacity-90 hover:!bg-[#1FA9EC] mobile:w-[140px] tablet:w-[150px] laptop:w-[135px]"
              >
                {loading ? "Đang tải..." : "Tải về ngay"}
              </Button>
            </form>
            <div className="flex flex-col laptop:h-[225px] gap-6 w-full">
              <div className="h-11  hidden laptop:block">
                <p className="font-medium tetx-4 leading-[22.4px] text-[#1C1C1C] ">
                  {article.typeEbook.ebook.descBook}
                </p>
              </div>
              <ul className="h-[112px]  line-clamp-1 font-normal text-[16px] leading-[22.4px] text-[#1C1C1C] flex-col gap-2 hidden laptop:flex">
                {listItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Image
                      src="/svg/tick-circle.svg"
                      alt="Check"
                      width={22}
                      height={22}
                      className="mr-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="laptop:h-[51px] tablet:h-[132px] mobile:h-[120px]">
                <p className="line-clamp-3 italic text-[#737373] font-normal text-[12px] leading-[16.8px] ">
                  <span className="text-[#737373] font-bold">Ghi chú:</span>{" "}
                  {article.typeEbook.ebook.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookComponent;
