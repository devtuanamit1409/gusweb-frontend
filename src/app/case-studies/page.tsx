import Image from "next/image";
import React from "react";
import { Pagination } from "antd";
const page = () => {
  const data = [
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
    {
      imgSrc: "/images/Rectangle 5067.png",
      title: "Web Design UI/UX & Development",
      heading: "McLaren Group",
    },
  ];
  return (
    <div className="w-full h-full s  py-[80px] px-[162px] gap-[108px] pb-[100px]">
      <div className="w-[1116px] h-[203px]   items-center flex flex-row mx-auto">
        <div className="w-[557px] h-[176px] gap-6 ">
          <h1 className="w-[246px] h-[38px] font-normal text-2xl leading-[38.4px] text-[#1C1C1C] text-preamble relative ">
            DISCOVER OUR WORK
          </h1>
          <h2 className="w-[557px] h-[114px] font-bold font-bricolage text-[32px] leading-[38.4px] pt-[27px] ">
            Every design we crafted focuses on user-centered experience and our
            client's business goal.
          </h2>
        </div>
        <div className="w-[502px] h-[203px]  font-normal text-wrap leading-[28.8px] pl-2">
          We provide technology solutions that are personalized to your
          company's needs, allowing you to save time and stay ahead of the
          competition. Concentrate on building your business while we handle the
          technology. Concentrate on building your business while we handle the
          technology. Concentrate on building your business while we handle the
          technology.
        </div>
      </div>
      <div className="w-[1113px] h-[2868px] gap-[108px] mx-auto flex flex-col ">
        <div className="grid grid-cols-2 gap-4 w-[1113px] h-[636px]">
          {data.map((item, index) => (
            <div key={index} className="w-full h-[636px] gap-8 bg-white">
              <Image
                width={500}
                height={500}
                src={item.imgSrc}
                alt=""
                className="object-cover rounded-3xl !w-[500px] !h-[500px]"
              />
              <h1 className="h-[38px] font-bricolage font-normal text-2xl leading-[38.4px] ">
                {item.title}
              </h1>
              <h2 className="w-[500px] h-[50px] font-bricolage font-bold text-[42px] leading-[50.4px] ">
                {item.heading}
              </h2>
            </div>
          ))}
        </div>
        <Pagination defaultCurrent={1} total={50} />;
      </div>
    </div>
  );
};

export default page;
