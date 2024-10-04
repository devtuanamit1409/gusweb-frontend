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

const Slogan = () => {
  return (
    <>
      <div className="w-full h-[715px] py-[80px] px-[162px] justify-center items-center flex gap-10">
        <div className="h-[294px] w-[523px] gap-4  flex flex-col">
          <h1 className="h-[134px] gap-2 font-bold leading-[67.2px] text-[56px] font-bricolage text-[#1C1C1C]">
            {item.title}
          </h1>
          <p className=" h-[144px] font-normal text-[16px] leading-6 text-[#363636] tracking-[0.5px] line-clamp-2">
            {item.description}
          </p>
        </div>
        <div className="w-[545px] h-[555px] justify-center items-center  ">
          <Image
            src={item.image || "/images/OBJECTS.png"}
            width={545}
            height={555}
            alt=""
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full h-[715px] py-[80px] px-[160px]  justify-center items-center flex">
        <div className="w">
          <InfoComponent
            data={data}
            styleTitle="h-[134px] font-bold text-5xl text-[#1C1C1C] leading-[67.2px] gap-2 font-bricolage"
            styleImage="h-[555px] w-[545px]"
          />
        </div>
      </div>
    </>
  );
};

export default Slogan;
