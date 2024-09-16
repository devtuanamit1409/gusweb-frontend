"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/images/logo.png" alt="Flowbite Logo" width={166} height={44} />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 m-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>

                    <button
                        type="button"
                        className={`text-white bg-gradient-custom focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center items-center justify-between hidden md:block md:w-auto md:order-1`}
                    >
                        Get started
                    </button>

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden "
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                        <button
                            type="button"
                            className={`text-white bg-gradient-custom focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center items-center justify-between block md:hidden`}
                        >
                            Get started
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
