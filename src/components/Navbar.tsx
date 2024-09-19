"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { IconMenu } from '@/components/IconMenu';


const items = [
    {
        key: '1',
        label: (
            <Link href="/">
                Phát triển phần mềm theo yêu cầu
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/">
                Offshore Development Center
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href="/">
                Giải pháp phần mềm có sẵn
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link href="/">
                Thiết kế UX UI
            </Link>
        ),
    },
    {
        key: '5',
        label: (
            <Link href="/">
                Cung cấp nhân sự Công nghệ thông tin
            </Link>
        ),
    }
];

const language = [
    {
        key: '1',
        label: (
            <Link href="/">
                Tiếng Việt
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/">
                Tiếng Anh
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href="/">
                Tiếng Hàn
            </Link>
        ),
    }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-md">
            <div className="max-w-[1140px] flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/images/logo.png" alt="Flowbite Logo" width={166} height={44} />
                </Link>
                <div className="flex items-center justify-center md:order-2 md:space-x-0 rtl:space-x-reverse space-x-3">
                    <div className="flex items-center relative group mr-4">
                        <Dropdown
                            menu={{ items: language }}
                            placement="bottom"
                            arrow
                        >
                            <Link href="#" className="flex items-center cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 mr-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                                VI
                            </Link>
                        </Dropdown>
                    </div>
                    <button
                        type="button"
                        className="text-white ant-btn focus:outline-none font-medium rounded-md text-sm px-8 py-3  hidden lg:block md:w-auto md:order-1"
                    >
                        Quotation
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <IconMenu />
                    </button>
                </div>

                <div className={`items-center  justify-between hidden w-full lg:flex md:w-auto md:order-1  `} id="navbar-sticky">
                    <ul className="flex items-center md:p-0 mt-4 font-medium md:space-x-8 lg:space-x-0 rtl:space-x-reverse flex-row md:mt-0 md:border-0 mr-4">
                        <li className="underline-animation font-semibold text-base m-4 group relative">
                            <Dropdown
                                menu={{ items }}
                                placement="bottomLeft"
                                // trigger={['click']}
                                arrow
                            >
                                <p className="flex items-center cursor-pointer hover:text-[#08BED5]">
                                    Dịch Vụ
                                    <svg
                                        className="fill-current h-4 w-4 transform  group-hover:-rotate-180  transition duration-150 ease-in-out ml-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </p>
                            </Dropdown>
                        </li>
                        <div>

                        </div>
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
                        <button
                            type="button"
                            className={`text-white ant-btn focus:outline-none font-medium rounded-md text-base px-4 py-2 text-center items-center justify-between block md:hidden`}
                        >
                            Quotation
                        </button>
                    </ul>
                </div>

            </div>

            <ul className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center lg:hidden`}>
                <li className="underline-animation font-semibold text-base m-4 group relative hover:text-[#08BED5]">
                    <Dropdown
                        menu={{ items }}
                        placement="bottom"
                        arrow
                    >
                        <Link href="#" className="flex items-center cursor-pointer">
                            Dịch Vụ
                            <svg
                                className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </Link>
                    </Dropdown>
                </li>
                <li>
                    <Link
                        href="/Case-studies"
                        className="text-[#000000] font-semibold text-base m-4 underline-animation"
                    >
                        Case studies
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="text-[#000000] font-semibold text-base m-4 underline-animation"
                    >
                        Về chúng tôi
                    </Link>
                </li>
                <li>
                    <Link
                        href="/tuyen-dung"
                        className="text-[#000000] font-semibold text-base m-4 underline-animation"
                    >
                        Tuyển dụng
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog"
                        className="text-[#000000] font-semibold text-base m-4 underline-animation"
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        href="/lien-he"
                        className="text-[#000000] font-semibold text-base m-4 underline-animation"
                    >
                        Liên hệ
                    </Link>
                </li>
                <button
                    type="button"
                    className={`text-white ant-btn focus:outline-none font-medium rounded-md text-base px-4 py-2 text-center items-center justify-between block`}
                >
                    Quotation
                </button>
            </ul>

        </nav>
    );
}
