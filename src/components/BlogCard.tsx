import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className=" h-[705px] custom-container flex items-center justify-center">
      <div className="w-[1116px] h-[545px]  mx-auto ">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="text-[56px] font-bricolage ">
              Khai thác website hiệu quả
            </span>
            <button
              type="button"
              className="bg-[#27B3E9] text-white focus:outline-none rounded-md text-sm w-[132px] h-[42px]"
            >
              Báo Giá
            </button>
          </div>
          <div className="flex gap-6">
            {cardsData.map((item, index) => (
              <div key={index} className="home-service-item__box w-[356px] h-[454px] flex justify-center">
                <div>
                  <div className="relative">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={367}
                      height={267}
                    />
                    <button className="background-LinearGradient absolute bottom-4 right-4 w-[85px] h-[26px]">
                      eBook
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <p>{item.date}</p>
                    <p className="font-bricolage text-[20px] font-bold">
                      {item.title}
                    </p>
                    <Link href="" className="text-blue-500">
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
