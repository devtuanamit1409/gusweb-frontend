import React from "react";
import Image from "next/image";

const InfoComponent = () => {
  return (
    <div className="h-[555px] w-[1116px] gap-[10px] flex justify-center items-center">
      <div className="w-[546px] h-[555px] justify-center items-center flex flex-row">
        <Image
          src="/images/Group 1000004070.png"
          width={418}
          height={434}
          alt=""
        />
      </div>
      <div className="h-[372px] w-[570px] py-[80px] px-6 gap-6 flex flex-col">
        <p className="font-bold leading-[68px] text-[56px] bg-clip-text text-transparent bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff]">
          GUSWEB
        </p>
        <p className="font-normal text-[16px] leading-6 text-[#363636]">
          GUSWEB không ngừng phát triển để trở thành đơn vị dẫn đầu trong thiết
          kế website cho doanh nghiệp. Là một thành viên của AMIT GROUP, chúng
          tôi phát huy tối đa kinh nghiệm hơn 15 năm của mình, cùng tư duy thiết
          kế sáng tạo, công nghệ hiện đại để tạo ra đặc điểm riêng biệt của từng
          doanh nghiệp.
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;
