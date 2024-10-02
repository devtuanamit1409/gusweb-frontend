"use client";

import { principleDescriptionModel, principleModel } from '@/models/principleModel';
import Image from 'next/image';
import React from 'react';
import { Collapse } from 'antd'; // Import Collapse từ Ant Design
import ProjectShowcase from '@/components/ProjectShowcase';

export default function WorkPrinciples() {
    const items: principleModel[] = [{
        title: 'NGUYÊN TẮC LÀM VIỆC',
        description: 'Minh bạch, trách nhiệm, hợp tác, đổi mới sáng tạo',
        description2: 'Tại GUSWEB, chúng tôi cam kết tuân thủ các nguyên tắc làm việc cốt lõi để đảm bảo sự phát triển bền vững, tạo dựng niềm tin và mang lại giá trị tối đa cho khách hàng.',
        icon: '/svg/Icons+.svg'
    }];

    const itemsa: principleDescriptionModel[] = [
        {
            title: 'Minh bạch',
            description: 'Chúng tôi minh bạch trong mọi hoạt động, đảm bảo thông tin rõ ràng về quy trình, thời gian, tiến độ, chính sách. Điều này giúp khách hàng dễ dàng nắm bắt thông tin, đưa ra quyết định chính xác và xây dựng niềm tin vững chắc với GUSWEB.',
        },
        {
            title: 'Trách nhiệm',
            description: 'GUSWEB cam kết trách nhiệm với khách hàng, hỗ trợ họ phát triển thông qua các giải pháp tối ưu. Với nhân sự, chúng tôi nâng cao năng lực và tạo cơ hội thăng tiến. Chúng tôi đóng góp tích cực vào xã hội qua các hoạt động cộng đồng và giáo dục. Bên cạnh đó, GUSWEB chú trọng bảo vệ môi trường bằng việc giảm thiểu rác thải nhựa, sử dụng tài nguyên hợp lý.',
        },
        {
            title: 'Tinh thần hợp tác',
            description: 'Chúng tôi đề cao tinh thần đồng đội, với sự hỗ trợ lẫn nhau và giao tiếp hiệu quả. Mỗi thành viên đều đóng góp để cùng đạt mục tiêu chung. Tinh thần hợp tác không chỉ giúp dự án của khách hàng thành công mà còn tạo cơ hội để mọi người phát triển, chia sẻ kiến thức và kinh nghiệm, hướng đến phát triển bền vững.',
        },
        {
            title: 'Đổi mới sáng tạo',
            description: 'Chúng tôi không ngừng cải tiến quy trình và khuyến khích học tập cuối ngày để nâng cao hiệu quả công việc. Đổi mới sáng tạo giúp GUSWEB mang đến các giải pháp đột phá, đáp ứng nhu cầu đa dạng của khách hàng. Chúng tôi thúc đẩy tư duy sáng tạo và ứng dụng công nghệ tiên tiến vào mọi hoạt động.',
        },
    ];

    const collapseItems = itemsa.map((itemDescription, idx) => ({
        key: idx,
        label: (
            <div className="flex justify-between items-center w-full">
                <span className="text-[20px] font-bold">{itemDescription.title}</span>
                <Image
                    src={items[0].icon}
                    alt="tesst"
                    width={28}
                    height={28}
                    className='ml-2'
                />
            </div>
        ),
        children: (
            <div className="mt-4 text-base">
                <p>{itemDescription.description}</p>
            </div>
        ),
    }));
    return (
        <div className="relative h-[1517px] max-w-[1145px] mx-auto mt-20">
            <div className='gap-10 mb-[469px]'>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <Image
                            src='/images/starrysky.png'
                            alt="Header Banner"
                            fill
                            className="object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className='w-[800px]'>
                            <span className='relative text-preamble w-[300px] text-2xl'>{item.title}</span>
                            <p className='text-[56px] font-bricolage'>{item.description}</p>
                            <p>{item.description2}</p>
                            <hr className="border-t-2 mb-4 mt-10" />
                            <Collapse defaultActiveKey={['']} expandIcon={() => null} bordered={false} items={collapseItems} />
                            <hr className="border-t-2 mb-4 mt-5" />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='absolute bottom-40 left-0 right-0'>
                <ProjectShowcase />
            </div>
        </div>
    );
}
