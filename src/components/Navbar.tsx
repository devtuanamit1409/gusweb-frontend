"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { IconMenu } from '@/components/Icons/IconMenu';
import Logo from '@/components/Logo';
import Language from '@/components/language';
import QuotationButton from '@/components/QuotationButton';

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

    },
    {
        key: '6',
        label: (
            <Link href="/">
                ádjifahjodfs
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
            <div className="max-w-[1109px] flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <div className="flex items-center justify-center md:order-2 md:space-x-0 rtl:space-x-reverse space-x-3">
                    <Language />
                    <QuotationButton />
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
