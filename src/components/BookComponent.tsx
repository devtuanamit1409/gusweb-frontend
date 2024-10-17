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

  const articleData = {
    content: `
    <div><div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Trong môi trường kinh doanh hiện nay, chỉ số ROI (</span><span>Return</span><span> </span><span>on</span><span> </span><span>Investment</span><span>) đóng vai trò quan trọng trong việc đánh giá hiệu quả tài chính và định hướng chiến lược cho tương lai. Việc tăng ROI không chỉ giúp doanh nghiệp tối ưu hóa lợi nhuận mà còn cải thiện toàn diện hiệu quả đầu tư. Dưới đây là những gợi ý giúp bạn tăng cường ROI một cách dễ dàng:</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<h2 class="Paragraph SCXW264513416 BCX8" role="heading" aria-level="3"><strong><span data-contrast="none"><span data-ccp-parastyle="heading 3">1. Tự động hóa quy trình</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;134245418&quot;:true,&quot;134245529&quot;:true,&quot;201341983&quot;:0,&quot;335559738&quot;:281,&quot;335559739&quot;:281,&quot;335559740&quot;:279}">&nbsp;</span></strong></h2>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Tự động hóa quy trình, đặc biệt là thông qua RPA (</span><span>Robotics</span><span> </span><span>Process</span><span> </span><span>Automation</span><span>), đang trở thành xu hướng phổ biến trong thời kỳ cách mạng công nghiệp 4.0. Các doanh nghiệp trong lĩnh vực ngân hàng, bán lẻ và bảo hiểm đang áp dụng RPA để chuyển đổi hoạt động kinh doanh, nhờ đó giảm thiểu chi phí nhân lực và tăng tốc độ xử lý công việc.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Theo báo cáo của </span><span>PricewaterhouseCoopers</span><span>, RPA có khả năng tiết kiệm đến 2 nghìn tỷ đô la chi phí lao động trên toàn cầu và tự động hóa 45% các hoạt động công việc. Những lợi ích này thúc đẩy các doanh nghiệp tiếp tục đầu tư vào RPA để tối ưu hóa quy trình và gia tăng lợi nhuận.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<h2 class="Paragraph SCXW264513416 BCX8" role="heading" aria-level="3"><strong><span data-contrast="none"><span data-ccp-parastyle="heading 3">2. Giảm chi phí đầu tư</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;134245418&quot;:true,&quot;134245529&quot;:true,&quot;201341983&quot;:0,&quot;335559738&quot;:281,&quot;335559739&quot;:281,&quot;335559740&quot;:279}">&nbsp;</span></strong></h2>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Chi phí đầu tư, đặc biệt là chi phí chung, là những khoản không liên quan trực tiếp đến sản xuất nhưng lại tiêu tốn đáng kể nguồn lực của doanh nghiệp. Việc cắt giảm chi phí này sẽ giúp bạn tiết kiệm ngân sách để đầu tư vào các cơ hội sinh lời khác.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Bạn có thể bắt đầu bằng cách phân chia chi phí thành hai loại: chi phí chung và chi phí sản xuất. Từ đó, xác định các khoản chi phí có thể giảm thiểu, như chi phí thuê mặt bằng, tiện ích và các chi phí hành chính khác. Một số biện pháp đơn giản như đàm phán lại hợp đồng thuê, chuyển địa điểm kinh doanh hoặc tối ưu hóa việc sử dụng dịch vụ cũng sẽ giúp tiết kiệm chi phí đáng kể.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<h2 class="Paragraph SCXW264513416 BCX8" role="heading" aria-level="3"><strong><span data-contrast="none"><span data-ccp-parastyle="heading 3">3. Cải thiện trải nghiệm khách hàng</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;134245418&quot;:true,&quot;134245529&quot;:true,&quot;201341983&quot;:0,&quot;335559738&quot;:281,&quot;335559739&quot;:281,&quot;335559740&quot;:279}">&nbsp;</span></strong></h2>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Trải nghiệm người dùng (UX) có ảnh hưởng lớn đến mức độ hài lòng và lòng trung thành của khách hàng. Những doanh nghiệp đầu tư vào UX thường có tỷ lệ chuyển đổi cao hơn và giữ chân khách hàng lâu dài hơn. Điều này không chỉ mang lại giá trị tức thì mà còn nâng cao ROI tổng thể.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Để cải thiện trải nghiệm người dùng, bạn cần chú trọng đến tính tiện dụng, khả năng truy cập, hiệu suất, thiết kế và sự tương tác giữa người dùng và sản phẩm. Một trải nghiệm tốt sẽ thúc đẩy sự hài lòng và tăng giá trị khách hàng suốt đời, góp phần nâng cao danh tiếng thương hiệu và tăng trưởng doanh thu.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr SCXW264513416 BCX8">
<p class="Paragraph SCXW264513416 BCX8"><span data-contrast="auto"><span>Nếu bạn đang tìm kiếm giải pháp gia tăng ROI cho doanh nghiệp mình thông qua tối ưu hóa quy trình và cải thiện trải nghiệm người dùng, hãy liên hệ với </span></span><span data-contrast="auto"><span>AMIT GROUP</span></span><span data-contrast="auto"><span>. Chúng tôi chuyên cung cấp dịch vụ thiết kế </span><span>website</span><span> và gia công phần mềm, giúp doanh nghiệp của bạn vượt qua thách thức và đạt được mục tiêu phát triển. Để biết thêm thông tin chi tiết, hãy truy cập </span><span>website</span><span> của chúng tôi.</span></span><span data-ccp-props="{&quot;134233117&quot;:false,&quot;134233118&quot;:false,&quot;201341983&quot;:0,&quot;335559738&quot;:240,&quot;335559739&quot;:240,&quot;335559740&quot;:279}">&nbsp;</span></p>
</div></div>
    `,
  };

  return (
    <div className="flex flex-col gap-10 laptop:gap-0">
      {contextHolder}
      <div className="w-full relative justify-center items-center flex">
        <Image
          src={article.sub_category.url}
          alt={article.sub_category.alt}
          width={1440}
          height={506}
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
        <div className=" py-20 px-[162px] mobile:px-4 z-10 w-full flex justify-center items-center ">
          <div className=" text-[#FEFEFE] justify-center laptop:items-start tablet:items-center mobile:items-center tablet:gap-6 laptop:gap-2 flex flex-col  w-full">
            <h5 className="font-normal text-[24px] leading-[38.4px] font-bricolage line-clamp-1 relative text-preamble  mobile:line-clamp-2 z-30">
              #{article.sub_category.title}
            </h5>
            <h2 className="font-bold text-[56px] leading-[67.2px]  font-bricolage laptop:line-clamp-2 tablet:line-clamp-1 mobile:h-[134px] mobile:line-clamp-2">
              {article.title}
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="custom-container py-20 px-[162px] h-[248px] hidden laptop:flex flex-row gap-6">
        <div className="laptop:h-[122px] laptop:max-w-[451px] items-start gap-6 flex flex-col w-full">
          <h5 className="line-clamp-1 label-custom flex relative text-preamble">
            QUẢN LÝ DỰ ÁN VỚI
          </h5>
          <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C] leading-[38.4px] font-bricolage">
            {article.typeEbook.intro.title}
          </h4>
        </div>
        <div className="laptop:max-w-[641px] h-[168px] line-clamp-6 font-normal text-4 leading-6 w-full">
          <p>{article.typeEbook.intro.description}</p>
        </div>
      </div>
      <div className="custom-container items-center laptop:hidden mobile:block tablet:block ">
        <div
          className="tablet:max-w-[500px] mobile:max-w-[328px] w-full"
          dangerouslySetInnerHTML={{
            __html: articleData.content,
          }}
        />
      </div>
      <div className="custom-container laptop:py-20 laptop:px-[162px] flex laptop:flex-row tablet:flex-row mobile:max-w-[743px] laptop:max-w-[1439px] tablet:max-w-[1023px] laptop:gap-6 mobile:gap-6 mobile:flex-col tablet:justify-between  px-4  mobile:items-center">
        <div className="laptop:max-h-[474px] laptop:max-w-[347.84px] tablet:max-w-[304px] tablet:max-h-[298px] mobile:max-w-[328px] mobile:max-h-[298px] h-full  relative w-full flex ">
          <Image
            src="/images/book1.png"
            alt="Book"
            width={347.84}
            height={474}
            className="laptop:max-h-[474px]  tablet:max-h-[298px] mobile:max-h-[298px] h-full   object-cover"
          />
        </div>
        <div className="laptop:max-w-[831px] laptop:h-[467px] tablet:max-w-[408px] h-[298px] mobile:max-w-[360px]  flex flex-col gap-10 w-full">
          <h4 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C]  laptop:max-w-[600px] leading-[38.4px] h-[76px] font-bricolage w-full hidden laptop:block">
            {article.typeEbook.ebook.titleBook}
          </h4>
          <h1 className="line-clamp-2 !font-bold text-[32px] text-[#1C1C1C] leading-[38.4px] font-bricolage laptop:hidden mobile:block tablet:block">
            Tai ebook
          </h1>
          <form
            className="flex flex-row min-h-[56px] mobile:max-w-[328px] tablet:max-w-[408px]  line-clamp-2 items-center  laptop:gap-6 justify-between w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
              className="laptop:max-w-[341px] tablet:max-w-[250px] mobile:max-w-[178px]  h-[56px] px-3 rounded-[8px] border border-[#C9C9C9] w-full"
            />
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="!h-[56px] laptop:max-w-[135px] tablet:max-w-[149px] mobile:max-w-[140px] hover:!opacity-90 hover:!bg-[#1FA9EC] w-full"
            >
              Tải về ngay
            </Button>
          </form>
          <div className="flex flex-col laptop:max-w-[642px] laptop:h-[225px] gap-6 w-full">
            <div className="h-11  hidden laptop:block">
              <p className="font-medium tetx-4 leading-[22.4px] text-[#1C1C1C] line-clamp-2">
                {article.typeEbook.ebook.descBook}
              </p>
            </div>
            <ul className="h-[112px]  line-clamp-1 font-normal text-[16px] leading-[22.4px] text-[#1C1C1C] flex-col gap-2 hidden laptop:flex">
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
            <div className="laptop:h-[51px] tablet:h-[132px] mobile:h-[120px]">
              <p className="line-clamp-3 italic text-[#737373] font-normal text-[12px] leading-[16.8px] ">
                <span className="text-[#737373] font-bold">Ghi chú:</span>{" "}
                {article.typeEbook.ebook.note}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BookComponent;
