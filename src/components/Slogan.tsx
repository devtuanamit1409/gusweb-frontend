import Image from "next/image";
import React from "react";
import InfoComponent from "./InfoComponent";

const item = {
  title: "Tập trung vào nhu cầu của người dùng",
  description:
    " Chúng tôi tập trung vào người dùng để thiết kế từng yếu tố trong mỗi sản phẩm nhằm đem đến trải nghiệm hữu ích và hiệu quả. Với chúng tôi, một sản phẩm đẹp thôi là chưa đủ, mà còn phải tạo ra những trải nghiệm tốt. Điều đó sẽ giúp khách hàng cảm thấy được trân trọng và thấu hiểu. Đây cũng là một phần cốt lõi trong dịch vụ thiết kế UX UI của chúng tôi.",
  image: "/images/OBJECTS.png",
};
const data = {
  title: "Tạo đúng sản phẩm ngay từ ban đầu",
  description:
    " Khi bắt đầu thực hiện dự án, việc đi đến xây dựng và phát triển yêu cầu ngay là điều không thể. Trước tiên, chúng tôi sẽ dành thời gian để lập kế hoạch, sử dụng các phương pháp tư duy thiết kế, xác định và dự đoán nhu cầu của người dùng nhằm đưa ra thành phẩm hoàn thiện theo tiêu chuẩn. ",
  image: "/images/Group.png",
  alt: "",
};

const Slogan: React.FC<any> = ({ slogans }) => {
  return (
    <div className="custom-container laptop:py-[80px] tablet:py-[80px] laptop:px-[162px] tablet:px-4 flex flex-col laptop:gap-20 gap-10  ">
      <div className="justify-center items-center flex  laptop:flex-row flex-col mobile:gap-12">
        <div className=" px-4 tablet:px-0 flex justify-center flex-col gap-4  w-full  ">
          <h1 className="font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center ">
            {slogans[0].title}
          </h1>
          <p className=" font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[0].description}
          </p>
        </div>
        <div className="flex px-4 tablet:px-0  justify-center items-center w-full ">
          <Image
            src={slogans[0].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[0].alt}
            className="object-cover"
          />
        </div>
      </div>
      <div className="justify-center items-center flex  laptop:flex-row flex-col mobile:gap-12">
        <div className=" px-4 tablet:px-0 flex justify-center flex-col gap-4  w-full  laptop:order-2 ">
          <h1 className="font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center ">
            {slogans[1].title}
          </h1>
          <p className=" font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[1].description}
          </p>
        </div>
        <div className="flex px-4 tablet:px-0  justify-center items-center w-full ">
          <Image
            src={slogans[1].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[1].alt}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Slogan;
