import React from 'react';
import BlogCardComponent from '@/components/BlogCardComponent';
import { CardModel } from '@/models/cardModel';

const cardsData: CardModel[] = [
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '2024-09-27', // Ngày được định dạng đúng
    },
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '2024-09-29', // Ngày mới hơn
    },
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '2024-09-25',
    }

];

export default function BlogCard() {
    // Sắp xếp cardsData theo ngày giảm dần và lấy 3 bài mới nhất
    const latestCards = cardsData
        .sort((a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0; // Kiểm tra date
            const dateB = b.date ? new Date(b.date).getTime() : 0; // Kiểm tra date
            return dateB - dateA; // Sắp xếp theo thứ tự giảm dần
        })
        .slice(0, 3);

    return (
        <div className='h-[705px] custom-container flex items-center justify-center'>
            <div className='w-[1116px] h-[545px] mx-auto'>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[56px] font-bricolage'>
                            Khai thác website hiệu quả
                        </span>
                        <button
                            type="button"
                            className="bg-[#27B3E9] text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
                        >
                            Báo Giá
                        </button>
                    </div>
                    <div className='flex gap-6'>
                        {latestCards.map((item, index) => (
                            <BlogCardComponent key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
