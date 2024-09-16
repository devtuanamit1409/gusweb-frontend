"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarTest() {
    const [use, setuse] = useState()

    return (
        <nav className='container items-center bg-black flex'>
            <div className="flex-1 text-white bg-red-500">Logo</div>
            <div className="flex-2 text-white bg-green-500">
                <nav>
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
            </div>
            <div className="flex-1 text-white bg-yellow-500">Vi</div>
            <div className="flex-1 text-white bg-lime-500">button</div>

        </nav>



    )
}
