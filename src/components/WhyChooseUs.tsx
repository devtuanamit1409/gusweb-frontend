import React from 'react'

import { CardModel } from '@/models/cardModel';
import WhyCardComponent from '@/components/WhyCardComponent';

export default function WhyChooseUs() {
    const items: CardModel[] = [
        {
            url: "/images/Image1.png",
            title: "Hướng dẫn khai thác website hiệu quả",
            description: "GUSWEB không chỉ tạo ra website mà còn hướng dẫn bạn khai thác tối đa tiềm năng của nó, biến website thành công cụ kinh doanh mạnh mẽ."
        },
        {
            url: "/images/Image.png",
            title: "Hỗ trợ tối ưu SEO",
            description: "Tối ưu hóa SEO qua việc chọn công nghệ phù hợp, chức năng meta, cải thiện tốc độ tải trang và đảm bảo website hoạt động ổn định, giúp website của bạn có cơ hội đạt thứ hạng cao hơn trên các công cụ tìm kiếm."
        },
        {
            url: "/images/Image3.png",
            title: "Hỗ trợ liên tục và tận tâm",
            description: "Chúng tôi luôn đồng hành cùng bạn, từ giải quyết vấn đề kỹ thuật đến cập nhật nội dung, đảm bảo website hoạt động mượt mà."
        },
        {
            url: "/images/Image4.png",
            title: "Ổn định và tiết kiệm chi phí",
            description: "Với 15 năm kinh nghiệm, chúng tôi tối ưu hóa website để vận hành ổn định, tiết kiệm chi phí và ít gặp sự cố."
        },
    ]
    const itemtitle = [
        {
            description: "Chúng tôi không chỉ thiết kế , mà còn xây dựng thương hiệu cho doanh nghiệp"
        }
    ]

    return (
        <div>
            <div className='relative flex flex-col items-center'>
                <div className='mt-40 '>
                    {itemtitle.map((title, conten) => (
                        <React.Fragment key={conten}>
                            <p className="text-2xl relative text-preamble w-[470px]">
                                Tại sao <b>GUSWEB</b>  là lựa chọn phù hợp nhất?.
                            </p>
                            <p className='text-[56px] max-w-[1100px] font-bricolage'>
                                <b>
                                    {title.description}
                                </b>
                            </p>
                        </React.Fragment>
                    )
                    )}
                    <div className='grid grid-cols-4 gap-6 justify-center mt-4'>
                        {items.map((item, index) => (
                            <WhyCardComponent key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
