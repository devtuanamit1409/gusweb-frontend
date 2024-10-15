import Image from "next/image";

const SupportIdeas: React.FC<any> = ({ help }) => {
  const data = {
    Premble: "Chúng tôi luôn có thể giúp bạn",
    title:
      "Từ giai đoạn lên ý tưởng đến khi website sẵn sàng phục vụ khách hàng",
    description:
      " Chúng tôi sẽ biến những ý tưởng của bạn thành hiện thực thông qua những giải pháp thiết kế bền vững và hiện đại.",
  };

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
    <div className="custom-conatiner laptop:h-[1300px] tablet:h-[2172px] mobile:h-[2198px] laptop:py-[80px] laptop:px-[162px] px-4 py-10 flex flex-col items-center ">
      <div className="laptop:max-w-[1116px] tablet:max-w-[712px] mobile:max-w-[328px] laptop:h-[1140px] flex flex-col gap-6 w-full items-center justify-center">
        <div className="laptop:h-[228px] tablet:h-[268px] mobile:h-[294px] gap-4  flex flex-col ">
          <div className="laptop:max-w-[338px] h-[38px] w-full flex laptop:justify-start justify-center">
            <span className="relative font-bricolage font-normal text-preamble h-[38px] gap-4 text-2xl leading-[28.8px] text-[#363636]  ">
              "Chúng tôi luôn có thể giúp bạn"
            </span>
          </div>
          <h1 className="laptop:text-[56px] font-bold laptop:h-[134px] tablet:h-[150px] mobile:h-[152px] tablet:tetx-[42px] tablet:leading-[50.4px] font-bricolage mobile:text-[32px]  mobile:leading-[38.4px] laptop:leading-[67.2px] text-[#1C1C1C] laptop:line-clamp-2 laptop:text-start text-center mobile:line-clamp-4 tablet:line-clamp-3">
            {help.title}
          </h1>
          <p className="laptop:max-w-[926px] laptop:h-[24px] font-normal text-base leading-6 tracking-[0.5px] text-[#1C1C1C] laptop:line-clamp-1 line-clamp-3 w-full laptop:text-start text-center">
            {help.description}
          </p>
        </div>

        <div className="laptop:grid tablet:grid laptop:grid-cols-2 laptop:grid-rows-3 tablet:grid-cols-1 tablet:grid-rows-6 gap-4 w-full mobile:hidden  ">
          {help.items &&
            help.items.map((item: any, index: number) => (
              <div
                key={index}
                className="relative max-w-[544px] h-[280px] w-full tablet:justify-self-center"
              >
                <Image
                  src={item.bg.url}
                  alt={item.bg.alt}
                  width={544}
                  height={280}
                  className="object-cover absolute inset-0"
                />

                <div
                  className={`flex flex-row relative p-[20px] gap-[20px] ${
                    index === 2 || index === 3 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-[237px] h-[216px] flex flex-row justify-start">
                    <Image
                      src={item.icon.url}
                      alt={item.icon.alt}
                      width={56}
                      height={60}
                      className="object-cover w-[56px] h-[56px]"
                    />
                    <h3 className="font-bricolage text-xl font-bold leading-6 text-[#1C1C1C] mt-[15px]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-[235px] h-[192px] relative">
                    <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#363636] line-clamp-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 grid-rows-6 gap-6 w-full tablet:hidden laptop:hidden">
          {help.items &&
            help.items.map((item: any, index: number) => (
              <div
                key={index}
                className="relative max-w-[328px] h-[280px] w-full px-4 pb-6 pt-10 "
              >
                <Image
                  src={item.bg.url}
                  alt={item.bg.alt}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />

                <div className="relative">
                  <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#363636] line-clamp-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SupportIdeas;
