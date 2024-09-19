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
                                src="/images/Location.png"
                            />
                            <div className="ml-4 ">
                                <p className="font-bold">Hồ Chí Minh</p>
                                <p>Số 07, Đường 7C, KĐT An Phú An Khánh, phường An Phú, TP. Thủ Đức</p>
                            </div>
                        </div>
                        <div>
                            <div className=" flex items-center mt-6">
                                <Image
                                    alt="Icon Email"
                                    loading="lazy"
                                    width={40}
                                    height={40}
                                    src="/images/Mail.png"
                                />
                                <div className="ml-4">
                                    <p>sales@amitgroup.vn</p>
                                    <p>+84911000038</p>
                                </div>
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
                                src="/images/Location.png"
                            />
                            <div className="ml-4">
                                <p className='font-bold'>Hồ Chí Minh</p>
                                <p>Tòa 8, Phòng 18, CVPM Quang Trung, phường Tân Chánh Hiệp, Quận 12 </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <Image
                                alt="Location Icon"
                                loading="lazy"
                                width={40}
                                height={40}
                                src="/images/Location.png"
                            />
                            <div className="ml-4">
                                <p className="font-bold">Hà Nội</p>
                                <p>89 Khuất Duy Tiến, Phường Nhân Chính, Quận Thanh Xuân</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1140px] flex items-start justify-between mx-auto mt-16">
                <div className='flex flex-row w-full'>
                    <div className='w-[30%] px-4 sm:px-6 lg:px-8'>
                        <div className='mb-6 space-y-3'>
                            <h6 className='font-bold'>Những gì AMIT thực hiện</h6>
                            <ul className='space-y-3 '>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/mobile-app-development/">Phát triển phần mềm</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/mobile-app-development/">Offshore Development Center</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="https://amitgroup.vn/vi/services/it-staffing-service/">Giải pháp phần mềm có sẵn</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/asp-solutions/">Thiết kế UX UI</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href="/vi/services/website-development/">Cung cấp nhân sự CNTT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[40%] px-4 sm:px-6 lg:px-8 '>
                        <div className='mb-6 space-y-3'>
                            <h6 className='font-bold'>AMIT đã làm được gì</h6>
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
                    <div className='w-[20%] px-4 sm:px-6 lg:px-8'>
                        <div className='mb-6 space-y-3'>
                            <h6 className='font-bold'>Giới Thiệu AMIT</h6>
                            <ul className='space-y-3'>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={'/'}>Về AMIT</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={'/'}>Bài Viết</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={'/'}> Tuyển Dụng</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-[#08BED5]' href={'/'}> Liên Hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[10%] px-4 space-y-3'>
                        <h6 className='font-bold'>Theo dõi</h6>
                        <div className='flex flex-row gap-2'>
                            <Link href={'https://www.facebook.com/amitgroup.vn/'}>
                                <Image src="https://admin.amitgroup.vn/uploads/Facebook_18a9e9f6fe.svg" alt="Facebook Logo" width={33} height={33} />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/amit-group'}>
                                <Image src="https://admin.amitgroup.vn/uploads/Linked_In_8020a55bc7.svg" alt="LinkedIn Logo" width={33} height={33} />
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
