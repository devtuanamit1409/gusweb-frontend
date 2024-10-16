import Image from "next/image";

const SupportIdeas: React.FC<any> = ({ help }) => {
  const data = {
    Premble: "Chúng tôi luôn có thể giúp bạn",
    title:
      "Từ giai đoạn lên ý tưởng đến khi website sẵn sàng phục vụ khách hàng",
    description:
      " Chúng tôi sẽ biến những ý tưởng của bạn thành hiện thực thông qua những giải pháp thiết kế bền vững và hiện đại.",
  };

  const imageNumber = [
    {
      image: "/images/number1.png",
    },
    {
      image: "/images/number2.png",
    },
    {
      image: "/images/number3.png",
    },
    {
      image: "/images/number4.png",
    },
    {
      image: "/images/number5.png",
    },
    {
      image: "/images/number6.png",
    },
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
    <div className="custom-conatiner laptop:py-[80px] laptop:px-[162px] px-4 py-10 flex flex-col items-center ">
      <div className="laptop:max-w-[1116px] flex flex-col gap-6 w-full items-center justify-center">
        <div className="gap-4  flex flex-col ">
          <div className=" w-full flex laptop:justify-start justify-center">
            <span className="relative font-bricolage font-normal text-preamble h-[38px] gap-4 text-2xl leading-[28.8px] text-[#363636]  ">
              "Chúng tôi luôn có thể giúp bạn"
            </span>
          </div>
          <h1 className="laptop:text-[56px] font-bold tablet:tetx-[42px] tablet:leading-[50.4px] font-bricolage mobile:text-[32px]  mobile:leading-[38.4px] laptop:leading-[67.2px] text-[#1C1C1C]  laptop:text-start text-center ">
            {help.title}
          </h1>
          <p className=" font-normal text-base leading-6 tracking-[0.5px] text-[#1C1C1C] w-full laptop:text-start text-center">
            {help.description}
          </p>
        </div>

        <div className="grid  laptop:grid-cols-2 laptop:grid-rows-3 grid-cols-1 grid-rows-6 gap-4 w-full    ">
          {help.items &&
            help.items.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative pt-10 pb-6 px-6 gap-6 flex flex-row p-[20px]  w-full border-dashed border-[2px] border-[#00D2FF] ${
                  index === 2 || index === 3
                    ? "flex-row-reverse justify-end "
                    : ""
                } tablet:border-dashed tablet:border-[2px] tablet:border-[#00D2FF] mobile:border-none mobile:justify-center`}
                style={{
                  backgroundColor: "#e5fcff",
                }}
              >
                <div
                  className={`absolute bottom-0 overflow-hidden ${
                    index === 2 || index === 3 ? "right-0" : "left-0"
                  } block laptop:block tablet:block mobile:hidden`}
                >
                  <Image
                    src={imageNumber[index].image}
                    alt={`Background number ${index + 1}`}
                    width={118}
                    height={68}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`flex h-[56px] w-2/3 flex-row z-10 laptop:block tablet:block mobile:hidden  ${
                    index === 2 || index === 3 ? " justify-end " : ""
                  }`}
                >
                  <div className="gap-2 flex flex-row justify-start items-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={60}
                      className="object-cover w-[56px] h-[56px]"
                    />
                    <h3 className="font-bricolage text-xl font-bold leading-6 text-[#1C1C1C] flex text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex w-full z-10 ">
                  <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#363636]">
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
