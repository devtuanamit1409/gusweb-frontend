"use client";
import { IconMenu } from '@/components/Icons/IconMenu';
import Language from '@/components/language';
import Logo from '@/components/Logo';
import QuotationButton from '@/components/QuotationButton';
import Link from 'next/link';
import React from 'react';

export default function HeaderComponent() {
    return (
        <div className='bg-white fixed top-0 left-0 right-0 z-20'>
            <div className='custom-container'>
                <div className='max-w-[1140px] flex justify-between items-center h-[76px] mx-auto p-4 '>
                    <div className=''>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>
                    <div className='flex items-center h-[36px]'>
                        <ul className="hidden laptop:flex flex-row">
                            <li>
                                <Link
                                    href="/Case-studies"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5]"
                                >
                                    Thiết kế trang web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5]"
                                >
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/Case-studies"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5]"
                                >
                                    Case studies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tuyen-dung"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5]"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5]"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/lien-he"
                                    className="text-[#000000] font-semibold text-base m-2 underline-animation hover:text-[#08BED5] mr-7"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                        <div className=''><Language /></div>
                        <div className='w-[106px] h-[36px] justify-end tablet:block hidden -mr-4'>
                            <QuotationButton />
                        </div>
                        <div className="flex laptop:hidden ml-4">
                            <IconMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
