import CardComponent from '@/components/CardComponent';
import ImgBody from '@/components/ImgBody';
import { CardModel } from '@/models/cardModel';
import { Descriptions } from 'antd';
import { title } from 'process';
import React from 'react';


export default function WebsiteAsGateway() {
    const items: CardModel[] = [
        {
            url: "/svg/IconGhepHinh.svg",
            title: "Tăng nhận diện thương hiệu",
            description: "Nhận diện thương hiệu mạnh giúp doanh nghiệp của bạn xây dựng lòng tin, thu hút khách hàng tiềm năng và tăng lợi thế cạnh tranh. Một website chuyên nghiệp, nhất quán về hình ảnh thương hiệu, sẽ làm cho doanh nghiệp của bạn nổi bật hơn trên thị trường."
        },
        {
            url: "/svg/IconGiayVaCap.svg",
            title: "Mở rộng thị trường",
            description: "Với website, biên giới không còn là rào cản. Tiếp cận khách hàng mới từ khắp nơi trên thế giới, tăng trưởng doanh thu và thị phần một cách đáng kể."
        },
        {
            url: "/svg/IconBanhRang.svg",
            title: "Tối Ưu hoá quy trình kinh doanh",
            description: "Website giúp tự động hóa nhiều quy trình, từ đặt hàng, thanh toán đến hỗ trợ khách hàng, giúp doanh nghiệp hoạt động hiệu quả hơn."
        },
        {
            url: "/svg/IconButCongNghe.svg",
            title: "Nâng cao trải nghiệm khách hàng",
            description: "Giao diện thân thiện, tốc độ tải trang nhanh và nội dung hấp dẫn làm cho khách hàng muốn quay lại, tạo dựng lòng trung thành."
        },
        {
            url: "/svg/IconFile.svg",
            title: "Thu thập và phân tích dữ liệu",
            description: "Website không chỉ là công cụ giao tiếp, mà còn là nguồn dữ liệu quý giá giúp bạn hiểu rõ hơn về nhu cầu và hành vi của khách hàng."
        },
    ];

    const itemtitle = [
        {
            title: " Website - Cánh Cửa Đến Thị Trường Toàn Cầu",
            descriptions: " Một website mạnh mẽ là nền tảng cho sự thành công của doanh nghiệp. Khám phá từng lợi ích cụ thể mà website mang lại"
        }
    ]

    return (
        <div className='relative flex flex-col items-center'>
            <ImgBody />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center'>
                {itemtitle.map((conten, index) => (
                    <React.Fragment key={index}>
                        <h1 className='text-[56px] text-white w-[736px] h-[134px] font-bricolage'>
                            {conten.title}
                        </h1>
                        <div className='text-white text-[16px] w-[680px] h-[48px] mt-10'>
                            <h1>
                                {conten.descriptions}
                            </h1>
                        </div>
                    </React.Fragment>
                ))}
                {/* Sử dụng grid để sắp xếp card */}
                <div className='grid grid-cols-3 gap-6 justify-center mt-4'>
                    {items.slice(0, 3).map((item, index) => (
                        <CardComponent key={item.title} item={item} showDescriptionOnHover={true} />
                    ))}
                </div>
                {/* Hàng 2 card */}
                <div className='grid grid-cols-2 gap-6 justify-center mt-4'>
                    {items.slice(3, 5).map((item) => (
                        <CardComponent key={item.title} item={item} showDescriptionOnHover={true} />
                    ))}
                </div>
            </div>
        </div>
    );
}
