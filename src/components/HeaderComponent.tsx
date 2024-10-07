"use client"
import Language from '@/components/language'
import Logo from '@/components/Logo'
import QuotationButton from '@/components/QuotationButton'
import { Dropdown } from 'antd'
import Link from 'next/link'
import React from 'react'

const items = [
    {
        key: "1",
        label: <Link href="/">Phát triển phần mềm theo yêu cầu</Link>,
    },
    {
        key: "2",
        label: <Link href="/">Offshore Development Center</Link>,
    },
    {
        key: "3",
        label: <Link href="/">Giải pháp phần mềm có sẵn</Link>,
    },
    {
        key: "4",
        label: <Link href="/">Thiết kế UX UI</Link>,
    },
    {
        key: "5",
        label: <Link href="/">Cung cấp nhân sự Công nghệ thông tin</Link>,
    },
    {
        key: "6",
        label: <Link href="/">ádjifahjodfs</Link>,
    },
];

export default function HeaderComponent() {
    return (
        <div className=' bg-white fixed top-0 left-0 right-0 z-20'>
            <div className='custom-container py-4 px-[162px] h-[76px] '>
                <div className=' max-w-[1109px] mx-auto flex justify-between h-[50px]'>
                    <Logo />
                    <div className=' flex gap-4 items-center justify-center'>
                        <ul className="flex items-center md:p-0 font-medium tablet:space-x-8 laptop:space-x-0 rtl:space-x-reverse flex-row tablet:mt-0 tablet:border-0 mr-4">
                            <li className="underline-animation font-semibold text-base m-4 group relative">
                                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                                    <p className="flex items-center cursor-pointer hover:text-[#08BED5]">
                                        Dịch Vụ
                                        <svg
                                            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </p>
                                </Dropdown>
                            </li>
                            <li>
                                <Link
                                    href="/Case-studies"
                                    className="text-[#000000] font-semibold text-base m-4 underline-animation hover:text-[#08BED5]"
                                >
                                    Case studies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-[#000000] font-semibold text-base m-4 underline-animation hover:text-[#08BED5]"
                                >
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tuyen-dung"
                                    className="text-[#000000] font-semibold text-base m-4 underline-animation hover:text-[#08BED5]"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-[#000000] font-semibold text-base m-4 underline-animation hover:text-[#08BED5]"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/lien-he"
                                    className="text-[#000000] font-semibold text-base m-4 underline-animation hover:text-[#08BED5]"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                        <div className='gap-8 flex items-center'>
                            <div className=''><Language /></div>
                            <div className='w-[106px] h-[36px]'><QuotationButton /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
