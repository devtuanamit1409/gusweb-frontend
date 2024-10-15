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
    <>
      <div className="custom-container  laptop:h-[715px] tablet:h-[979px] mobile:h-[702px] laptop:py-[80px] tablet:py-[80px] laptop:px-[162px] tablet:px-4  justify-center items-center flex  laptop:flex-row flex-col gap-10  mobile:gap-4 ">
        <div className="laptop:h-[294px] laptop:max-w-[523px] tablet:max-w-[712px] tablet:h-[261px] mobile:max-w-[328px] mobile:h-[326px] flex justify-center flex-col gap-4  w-full  ">
          <h1 className="laptop:h-[134px] tablet:h-[100px] mobile:h-[76px] font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center line-clamp-2">
            {slogans[0].title}
          </h1>
          <p className="laptop:h-[144px] tablet:h-[145px] mobile:h-[234px] font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[0].description}
          </p>
        </div>
        <div className="laptop:max-w-[545px] laptop:h-[555px] tablet:max-w-[500px] tablet:h-[510px] mobile:max-w-[328px] mobile:h-[328px]  justify-center items-center w-full ">
          <Image
            src={slogans[0].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[0].alt}
            className="object-cover"
          />
        </div>
      </div>
      <div className="custom-container  laptop:h-[715px] tablet:h-[979px] mobile:h-[702px] laptop:py-[80px] tablet:py-[80px] laptop:px-[162px] tablet:px-4  justify-center items-center flex  laptop:flex-row flex-col gap-10  mobile:gap-4 ">
        <div className="laptop:h-[294px] laptop:max-w-[523px] tablet:max-w-[712px] tablet:h-[261px] mobile:max-w-[328px] mobile:h-[326px] flex justify-center flex-col gap-4  w-full laptop:order-2 ">
          <h1 className="laptop:h-[134px] tablet:h-[100px] mobile:h-[76px] font-bold laptop:leading-[67.2px] laptop:text-[56px] tablet:leading-[50.2px] tablet:text-[42px] mobile:text-[32px] mobile:leading-[38.4px] font-bricolage text-[#1C1C1C] laptop:text-start text-center line-clamp-2">
            {slogans[1].title}
          </h1>
          <p className="laptop:h-[144px] tablet:h-[145px] mobile:h-[234px] font-normal text-[16px] leading-6 text-[#363636] ">
            {slogans[1].description}
          </p>
        </div>
        <div className="laptop:max-w-[545px] laptop:h-[555px] tablet:max-w-[500px] tablet:h-[510px] mobile:max-w-[328px] mobile:h-[328px]  justify-center items-center w-full ">
          <Image
            src={slogans[1].image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt={slogans[1].alt}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Slogan;
