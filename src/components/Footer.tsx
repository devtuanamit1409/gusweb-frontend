import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=' py-20'>
            <div className="max-w-[1140px] flex items-start justify-between mx-auto ">
                <div className='p-3 w-1/4'>
                    <Image src="/images/logo.png" alt="Flowbite Logo" width={261} height={80} />
                </div>
                <div className='w-3/4 flex flex-row'>
                    <div className="w-1/2 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <Image
                                alt="Location Icon"
                                loading="lazy"
                                width={40}
                                height={40}
                                src="/images/Diachi.png"
                            />
                            <div className="ml-4 ">
                                <p className="font-bold">Hồ Chí Minh</p>
                                <p>Số 07, Đường 7C, KĐT An Phú An Khánh, phường An Phú, TP. Thủ Đức</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 px-4 sm:px-6 lg:px-8'>
                        <div className="flex items-center">
                            <Image
                                alt="Location Icon"
                                loading="lazy"
                                width={40}
                                height={40}
                                src="/images/Email.png"
                            />
                            <div className="ml-4">
                                <p className='font-bold'>gusweb.vn@gmail.com</p>
                                <p>+84.911.000.038</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] flex items-start justify-between mx-auto mt-16">
                <div className='flex flex-row w-full'>
                    <div className='w-[30%] px-4 sm:px-6 lg:px-8'>
                        <div className='mb-6 space-y-3'>
                            <h6 className='font-bold'>Về GUSWEB</h6>
                            <ul className='space-y-3 '>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/mobile-app-development/">Thiết kế website</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/mobile-app-development/">Về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="https://amitgroup.vn/vi/services/it-staffing-service/">Case Studies</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/asp-solutions/">Blog</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/website-development/">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/website-development/">Chính sách bảo mật thông tin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[40%] px-4 sm:px-6 lg:px-8 '>
                        <div className='mb-6 space-y-3'>
                            <h6 className='font-bold '>GUSWEB đã làm được gì</h6>
                            <ul className='space-y-3'>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={'/'}>PanUnited’s go Truck mobile application</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={''}>HUS BMW Application - north America version</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={''}>Audi application</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={''}>GHT Verification app blockchain</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={''}>Bitcare application</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[14%] px-4 space-y-3'>
                        <h6 className='font-bold'>Theo dõi</h6>
                        <div className='flex flex-row gap-2'>
                            <Link href={'https://www.facebook.com/amitgroup.vn/'}>
                                <Image src="/images/Youtube.png" alt="Youtube Logo" width={32} height={32} />
                            </Link>
                            <Link href={'https://www.facebook.com/amitgroup.vn/'}>
                                <Image src="/images/Face.png" alt="Facebook Logo" width={32} height={32} />
                            </Link>
                            <Link href={'https://www.facebook.com/amitgroup.vn/'}>
                                <Image src="/images/Titok.png" alt="Titok Logo" width={32} height={32} />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/amit-group'}>
                                <Image src="/images/In.png" alt="LinkedIn Logo" width={32} height={32} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] justify-between mx-auto">
                <hr className="border-t-2 mb-4" />
                <p className="footer-bottom-copyRight text-left text-sm">
                    Copyright © 2022 <b>AMIT GROUP</b>. All Rights Reserved | Design by <b>AMIT GROUP</b>
                </p>
            </div>
        </footer>

    )
}
