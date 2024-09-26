import React from 'react'
import { CardModel } from '@/models/cardModel';
import CardComponent from '@/components/CardComponent';

export default function DesignGusweb() {
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

    return (
        <div>
            <div className='relative flex flex-col items-center'>
                <div className='mt-10'>
                    <p className="text-2xl">
                        Tại sao <b>GUSWEB</b>  là lựa chọn phù hợp nhất?.
                    </p>
                    <p className='text-[26px]'>
                        <b>
                            Chúng tôi không chỉ thiết kế , mà còn xây dựng thương hiệu cho doanh nghiệp
                        </b>
                    </p>
                    <div className='grid grid-cols-4 gap-6 justify-center mt-4'>
                        {items.map((item, index) => (
                            <CardComponent key={index} item={item} showDescriptionOnHover={false} showDescription={true} customClassName="home-service-item__box " customClassNameTitle='font-bold text-xl'
                                width={261}
                                height={195}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
