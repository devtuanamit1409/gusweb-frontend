import React from "react";
import Image from "next/image";
import BlogCardComponent from "./BlogCardComponent";
import BlogCard from "./BlogCard";
const TechnologyComponent: React.FC<any> = ({ subCates, article }) => {
  // console.log(article);

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
    <div className="flex flex-col justify-center gap-10">
      <div className="h-[506px] relative justify-center items-center flex">
        <Image
          src={article.sub_category.url}
          alt={article.sub_category.alt}
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
        <div className="laptop:max-w-[1440px] tablet:max-w-[744px] mobile:max-w-[360px] h-[506px] py-20 px-[162px] mobile:px-4 z-10 w-full flex justify-center items-center ">
          <div className="laptop:max-w-[1116px] laptop:h-[346px] tablet:max-w-[557px] tablet:h-[129px] mobile:max-w-[328px] mobile:h-[234px] text-[#FEFEFE] justify-center laptop:items-start tablet:items-center mobile:items-center tablet:gap-6 laptop:gap-2 flex flex-col  w-full">
            <h5 className="font-normal text-[24px] leading-[38.4px] font-bricolage line-clamp-1 mobile:h-[76px] relative text-preamble  mobile:line-clamp-2 z-30">
              #{article.sub_category.title}
            </h5>
            <h2 className="font-bold text-[56px] leading-[67.2px]  font-bricolage laptop:line-clamp-2 tablet:line-clamp-1 mobile:h-[134px] mobile:line-clamp-2">
              {article.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="custom-container laptop:py-20 laptop:px-[162px] flex flex-row gap-6">
        <div
          className="laptop:max-w-[831px] tablet:max-w-[500px] mobile:max-w-[328px] w-full"
          dangerouslySetInnerHTML={{
            __html: articleData.content,
          }}
        />

        <div className="max-w-[261px] w-full h-full flex-col gap-4 p-4 rounded-[16px]  category-item__box hidden laptop:block">
          <h6 className="!font-semibold text-[20px] leading-[24.2px] font-bricolage uppercase">
            Danh mục bài viết
          </h6>

          <div className="max-w-[220px]  flex flex-col gap-2 w-full">
            {subCates &&
              subCates?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="max-w-[220px] h-[22px] flex flex-row gap-2 rounded-[1px] w-full"
                  >
                    <p className="font-medium text-4 leading-[22.4px]">
                      {item.title}
                    </p>
                    <p className="font-medium text-4 leading-[22.4px]">{`(${item.articleCount})`}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyComponent;
