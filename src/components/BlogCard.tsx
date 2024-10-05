import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogCardComponent from '@/components/BlogCardComponent'
import { CardModel } from '@/models/cardModel';

const cardsData: CardModel[] = [
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '10 ngày trước',
    },
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '10 ngày trước',
    },
    {
        url: '/images/blog.png',
        title: 'AGILE SCRUM - Quá trình quản lý và thực hiện dự án',
        link: '#',
        date: '10 ngày trước',
    }
];

export default function BlogCard() {

    return (
        <div className=' h-[705px] custom-container flex items-center justify-center'>
            <div className='w-[1116px] h-[545px]  mx-auto '>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[56px] font-bricolage '>
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
                        {cardsData.map((item, index) => (
                            <BlogCardComponent key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
