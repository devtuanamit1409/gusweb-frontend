"use client";
import { useState } from 'react'; // Thêm useState
import { IconMenu } from '@/components/Icons/IconMenu';
import Language from '@/components/language';
import Logo from '@/components/Logo';
import QuotationButton from '@/components/QuotationButton';
import Link from 'next/link';

export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái mở/đóng menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái menu
    };

    return (
        <div className='bg-white fixed top-0 left-0 right-0 z-20 shadow-md'>
            <div className='custom-container'>
                <div className='max-w-[1140px] flex justify-between items-center h-[76px] mx-auto px-4 '>
                    {/* Logo Section */}
                    <div>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className='flex items-center'>
                        <ul className="hidden laptop:flex flex-row space-x-4">
                            <li>
                                <Link
                                    href="/service"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]"
                                >
                                    Thiết kế trang web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]"
                                >
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]"
                                >
                                    Case studies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5] mr-7"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                        <div className='flex items-center'>
                            <div className='ml-4'>
                                <Language />
                            </div>
                            <div className='w-[106px] h-[36px] hidden tablet:block ml-4'>
                                <QuotationButton />
                            </div>
                        </div>
                        <div className="flex laptop:hidden ml-4">
                            <button onClick={toggleMenu}>
                                <IconMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="laptop:hidden bg-white shadow-md">
                    <ul className="flex flex-col justify-center items-center space-y-2 px-4 py-2">
                        <li>
                            <Link href="/Case-studies" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Thiết kế trang web
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Về chúng tôi
                            </Link>
                        </li>
                        <li>
                            <Link href="/Case-studies" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Case studies
                            </Link>
                        </li>
                        <li>
                            <Link href="/tuyen-dung" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Tuyển dụng
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/lien-he" className="text-[#000000] font-semibold text-base underline-animation hover:text-[#08BED5]">
                                Liên hệ
                            </Link>
                        </li>
                        <div className='w-[106px] h-[36px] hidden mobile:block tablet:hidden ml-4'>
                            <QuotationButton />
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}
