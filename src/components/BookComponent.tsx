import Image from "next/image";
import Link from "next/link";

const BookComponent = () => {
  const listItems = [
    "Tài liêu  (PDF)",
    "Bảng tóm tắt quy trình quản lý dự án theo mô hình AGILE (Google Sheet)",
    "Các Templates quản lý dự án",
    "Flowcharts",
  ];
  return (
    <div className="flex flex-col justify-center">
      <div className="h-[448px] relative justify-center items-center flex">
        <Image
          src="/images/Banner_eBook.png"
          alt="Banner eBook"
          fill
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
        <div className="w-[1440px] h-[506px] py-20 px-[162px] z-10">
          <div className="w-[1116px] h-[346px] text-[#FEFEFE] justify-center gap-2 flex flex-col">
            <h5 className="!font-normal text-[24px] font-bricolage line-clamp-1">
              #eBook
            </h5>
            <h2 className="!font-bold text-[56px] leading-[67.2px] font-bricolage line-clamp-2">
              AGILE SCRUM - Quá trình quản lý và thực hiện dự án
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
            Mô hình AGILE và Framework SCRUM
          </h4>
        </div>
        <div className="w-[641px] h-[168px] line-clamp-6 font-normal text-4 leading-6">
          <p>
            Hiện nay, có nhiều công ty phát triển phần mềm đã áp dụng mô hình
            quản lý dự án AGILE và Framework SCRUM vào quá trình làm việc của
            mình. Các Doanh nghiệp nhận định rằng khi thực hiện dự án theo mô
            hình này sẽ giúp họ đem sản phẩm đến người dùng nhanh nhất và đem
            lại giá trị tối đa cho Khách hàng của họ. Vậy AGILE và SCRUM là gì?
            Tại sao lại có khá nhiều Doanh nghiệp sử dụng chúng? EBook này sẽ
            giải thích các khái niệm cơ bản và rõ ràng nhất cho bạn.
          </p>
        </div>
      </div>
      <div className="custom-container py-20 px-[162px] flex flex-row gap-6">
        <div className="h-[474px] w-[347.84px]">
          <Image
            src="/images/agile_scrum.png"
            alt="agile_scrum"
            layout="responsive"
            width={347.84}
            height={474}
            objectFit="cover"
          />
        </div>
        <div className="w-[831px] h-[467px] flex flex-col gap-10  ">
          <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C]  w-[600px] leading-[38.4px] font-bricolage ">
            AGILE SCRUM - Project Management and Implementation process
          </h4>
          <div className="flex flex-row h-[56px] gap-6 line-clamp-2 items-center">
            <input
              type="text"
              className="w-[341px] h-[56px] px-3 rounded-[8px] border border-[#C9C9C9]"
              placeholder="Địa chỉ email"
            />
            <button className="ant-btn w-[135px] !h-[56px] bg-[#27B3E9]">
              <Link href="">Tải về ngay</Link>
            </button>
          </div>
          <div className="flex flex-col w-[642px] h-[225px] gap-6">
            <div className="h-11">
              <p className=" font-medium tetx-4 leading-[22.4px] text-[#1C1C1C] line-clamp-2">
                Đây là tài liệu mô tả quy trình thực hiện và quản lý dự án theo
                mô hình AGILE đã được nghiên cứu và phát triển bởi AMIT. eBook
                này gồm:
              </p>
            </div>
            <ul className="h-[112px] line-clamp-1 font-normal text-[16px] leading-[22.4px] text-[#1C1C1C] flex flex-col gap-2">
              {listItems.map((item, index) => (
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
            <div className=" h-[51px]">
              <p className="line-clamp-3 italic text-[#737373] font-normal text-[12px] leading-[16.8px] ">
                <span className="text-[#737373] font-bold">Ghi chú:</span> Chúng tôi sử
                dụng thông tin bạn cung cấp cho chúng tôi để liên hệ với bạn về
                nội dung, sản phẩm và dịch vụ có liên quan của chúng tôi. Chúng
                tôi cam kết thông tin của bạn được an toàn và chúng tôi sẽ bảo
                vệ dữ liệu của bạn cẩn thận.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
