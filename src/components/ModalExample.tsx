import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';

const App: React.FC = () => {
    const [modal2Open, setModal2Open] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                footer={null}
                closable={false}
                width={1116}
                height={573}
            >
                <div>
                    <div className='bg-slate-500 flex-row flex justify-between gap-6'>
                        <div className='bg-red-500 flex flex-col'>
                            <div className='bg-zinc-500 w-[418px] h-[427px]'>
                                <Image src='' alt='anh' />
                            </div>
                            <div className='flex bg-red-300 w-[418px] justify-center items-end h-[66px]'>
                                <div className='flex gap-6'>
                                    <Button>Dự án trước</Button>
                                    <Button>Dự án sau</Button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-orange-500 w-[594px] h-[493px] overflow-y-auto'>
                            <div>
                                <p>Tự động hóa</p>
                                <p>GHT Verification app blockchain</p>
                                <p>G-Verification là một ứng dụng phi tập trung được xây dựng trên nền tảng của chuỗi khối Ethereum (sử dụng Solidity làm ngôn ngữ mã hóa chính) để cho phép khách hàng cá nhân, công ty và tổ chức công xác minh Bản ghi tin cậy của bất kỳ người hoặc đối tượng nào trên thế giới bằng cách kết nối với nền tảng G-Data</p>
                                <p>Quy trình Xác minh sẽ yêu cầu Mã thông báo GHT làm "gas" cho các hành động, bao gồm Xác minh, Xác nhận, Danh sách đen, Sửa đổi, v.v. trên Bản ghi Tin cậy của một người / một đối tượng.</p>
                                <p>Những người dùng tham gia vào quá trình Xác minh Niềm tin sẽ nhận được Mã thông báo GHT như phần thưởng cho sự hợp tác của họ trong việc xây dựng Mạng lưới GHT.</p>
                            </div>
                            <div>
                                <p>khách hàng</p>
                                <div className=''>
                                    <Image src='' alt='GHT ' />
                                </div>
                            </div>
                            <div>
                                <p>Công nghệ</p>
                                <div>
                                    <Image src='' alt='java ' />
                                    <Image src='' alt='GHT ' />
                                    <Image src='' alt='next ' />
                                    <Image src='' alt='react ' />
                                </div>
                            </div>
                            <div>
                                <p>Hệ điều hành</p>
                                <div>
                                    <Image src='' alt='java ' />
                                    <Image src='' alt='GHT ' />
                                    <Image src='' alt='next ' />
                                    <Image src='' alt='react ' />
                                </div>
                            </div>
                            <div>
                                <p>thử thách</p>
                                <p>Một app trên blockchain BSC, app này sẽ cung cấp một dịch vụ để người dùng xác minh ai đó / điều gì đó để xây dựng lòng tin.  Người dùng kết nối với 3 vai trò của ứng dụng: Người yêu cầu / Người xác minh / Người xác minh</p>
                            </div>
                            <div>
                                <p>Giải pháp</p>
                                <p>Phát triển trên nền tảng iOS và Android native (Swift và Kotlin), tích hợp công nghệ blockchain Polygon và ETH</p>
                            </div>
                            <div className='flex bg-amber-500 w-[418px] justify-center items-end h-[42px]'>
                                <div className='flex gap-6'>
                                    <Button>Dự án trước</Button>
                                    <Button>Dự án sau</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default App;