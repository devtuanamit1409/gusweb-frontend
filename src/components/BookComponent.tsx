"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Button, message } from "antd";

const BookComponent: React.FC<any> = ({ article }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = (
    content: string,
    type: "success" | "error" | "loading"
  ) => {
    messageApi.open({
      key,
      type,
      content,
      duration: 2,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/send-email",
        { email }
      );

      openMessage(
        `File đã được gửi về gmail ${email}!`,
        response.status === 200 ? "success" : "error"
      );
      setEmail("");
    } catch (error) {
      console.error("Error sending form", error);
      openMessage("An error occurred while sending the email.", "error");
    } finally {
      setLoading(false);
    }
  };

  const listItems = article.typeEbook.ebook.option
    .split(", ")
    .map((item: string) => item.trim());

  return (
    <div className="flex flex-col justify-center">
      {contextHolder}
      <div className="h-[448px] relative justify-center items-center flex">
        <Image
          src={article.sub_category.url}
          alt={article.sub_category.alt}
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
        <div className="w-[1440px] h-[506px] py-20 px-[162px] z-10">
          <div className="w-[1116px] h-[346px] text-[#FEFEFE] justify-center gap-2 flex flex-col ">
            <h5 className="!font-normal text-[24px] font-bricolage line-clamp-1">
              #{article.sub_category.title}
            </h5>
            <h2 className="!font-bold text-[56px] leading-[67.2px] font-bricolage line-clamp-2">
              {article.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="custom-container py-20 px-[162px] h-[248px] flex flex-row gap-6">
        <div className="h-[122px] w-[451px] items-start gap-6 flex flex-col">
          <h5 className="line-clamp-1 label-custom flex relative text-preamble">
            QUẢN LÝ DỰ ÁN VỚI
          </h5>
          <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C] leading-[38.4px] font-bricolage ">
            {article.typeEbook.intro.title}
          </h4>
        </div>
        <div className="w-[641px] h-[168px] line-clamp-6 font-normal text-4 leading-6">
          <p>{article.typeEbook.intro.description}</p>
        </div>
      </div>
      <div className="custom-container py-20 px-[162px] flex flex-row gap-6">
        <div className="h-[474px] w-[347.84px] relative">
          <Image
            src={article.typeEbook.ebook.src}
            alt={article.typeEbook.ebook.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[831px] h-[467px] flex flex-col gap-10">
          <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C]  w-[600px] leading-[38.4px] font-bricolage ">
            {article.typeEbook.ebook.titleBook}
          </h4>
          <div className="flex flex-row h-[56px] gap-6 line-clamp-2 items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                required
                className="w-[341px] h-[56px] px-3 rounded-[8px] border border-[#C9C9C9]"
              />
              <Button
                type="primary"
                loading={loading}
                htmlType="submit"
                className="!h-[56px] w-[135px] hover:!opacity-90 hover:!bg-[#1FA9EC]"
              >
                Tải về ngay
              </Button>
            </form>
          </div>
          <div className="flex flex-col w-[642px] h-[225px] gap-6">
            <div className="h-11">
              <p className="font-medium tetx-4 leading-[22.4px] text-[#1C1C1C] line-clamp-2">
                {article.typeEbook.ebook.descBook}
              </p>
            </div>
            <ul className="h-[112px] line-clamp-1 font-normal text-[16px] leading-[22.4px] text-[#1C1C1C] flex flex-col gap-2">
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
            <div className="h-[51px]">
              <p className="line-clamp-3 italic text-[#737373] font-normal text-[12px] leading-[16.8px] ">
                <span className="text-[#737373] font-bold">Ghi chú:</span>{" "}
                {article.typeEbook.ebook.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
