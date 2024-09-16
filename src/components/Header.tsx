"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonGia from '@/test/ButtonGia';

const Header = () => {
    return (
        <header className="bg-[#FFFFFF] -p-1 header-fixed">
            <div className="container mx-auto max-w-[80vw] flex justify-between items-center">
                {/* Cột 1 */}
                <div className="flex-1">
                    <Link href="">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={165.54}
                            height={44}
                            style={{ marginRight: '100px' }}
                        />
                    </Link>
                </div>
                {/* Cột 2 */}
                <nav className="flex-2 text-center">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link
                                href="/"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/Case-studies"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Case studies
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Về chúng tôi
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tuyen-dung"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Tuyển dụng
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/lien-he"
                                className="text-[#000000] font-bold text-lg underline-animation"
                            >
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Cột 3 */}
                <div className="flex-1 flex items-center justify-end space-x-4">
                    {/* Dropdown */}
                    <ul className="relative group m-4">
                        <li>
                            <span className="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                                VI
                            </span>
                            {/* Dropdown menu */}
                            <div className="absolute hidden group-hover:block  left-1/2 top-9 -translate-x-1/2 ">
                                <ul className="bg-gray-100 text-lg text-center w-40 rounded-lg">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-t-lg">Tiếng Việt</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Tiếng Anh</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-b-lg">Tiếng Hàn</a></li>
                                </ul>
                                <div className="dropdown-arrow absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                                <div className="dropdown-triangle absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-100"></div>
                            </div>
                        </li>
                    </ul>
                    {/* Nút "Báo giá" */}
                    <ButtonGia />
                </div>
            </div>
        </header>
    );
}

export default Header;
