import Image from "next/image";

const SupportIdeas = () => {
  const data = [
    {
      title: "Nghiên cứu",
      imageSrc: "/images/Maskgroup.png",
      description: "Bao gồm nghiên cứu thị trường người dùng, đối thủ...",
      numberImage: "/images/Number01.png",
    },
    // Add more data as needed
  ];
  const items = [
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card1.png",
    },
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card2.png",
    },
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card3.png",
    },
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card4.png",
    },
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card5.png",
    },
    {
      title: "Nghiên cứu",
      icon: "/images/Maskgroup.png",
      description:
        "Bao gồm nghiên cứu thị trường người dùng, đối thủ cạnh tranh của doanh nghiệp, phân tích nhu cầu, mục tiêu kinh doanh của khách hàng để đưa ra những tư vấn về chiến lược và định hình mục tiêu cho website.",
      image: "/images/Card6.png",
    },
  ];

  return (
    <div className="w-full h-[1300px] py-[80px] px-[162px]  ">
      <div className="max-w-[1116px] h-[1140px]  mx-auto">
        <div className="h-[228px] gap-4 ">
          <div className="relative w-[338px] h-[38px]">
            <span className="font-bricolage font-normal h-[38px] gap-4 text-2xl leading-[28.8px] text-[#363636]">
              Chúng tôi luôn có thể giúp bạn
            </span>
            <span className="absolute bottom-[1px] left-[0.05rem] w-[237px] h-[11px] bg-[#08BED5] opacity-25 transform skew-x-[-20deg]" />
          </div>
          <h1 className="text-[56px] font-bold h-[134px] font-bricolage leading-[67.2px] text-[#1C1C1C]">
            Từ giai đoạn lên ý tưởng đến khi website sẵn sàng phục vụ khách hàng
          </h1>
          <p className="w-[926px] h-[24px] font-normal text-base leading-6 tracking-[0.5px] text-[#1C1C1C]">
            Chúng tôi sẽ biến những ý tưởng của bạn thành hiện thực thông qua
            những giải pháp thiết kế bền vững và hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="relative w-full h-[280px]">
              <Image
                src={item.image}
                alt=""
                width={544}
                height={280}
                className="object-cover absolute inset-0 "
              />

              <div
                className={`flex flex-row relative justify-between p-[20px] gap-[20px]  ${
                  index === 2 || index === 3 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-[237px] h-[216px]  flex flex-row justify-start">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={56}
                    height={60}
                    className="object-cover w-[56px] h-[56px]"
                  />
                  <h3 className="font-bricolage text-xl font-bold leading-6 text-[#1C1C1C] mt-[15px]">
                    {item.title}
                  </h3>
                </div>
                <div className="w-[235px] h-[192px] relative">
                  <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#363636]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportIdeas;
