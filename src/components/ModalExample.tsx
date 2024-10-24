import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import IconArrowDesc from '@/components/Icons/IconArrowDesc';
import { useTranslations } from 'next-intl';

const App: React.FC = () => {
    const t = useTranslations();
    const [modal2Open, setModal2Open] = useState(false);
    const [isClosable, setIsClosable] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 744) {
                setIsClosable(true);
            } else {
                setIsClosable(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <>
        <p
          className="text-[#1FA9EC] font-medium text-[15px] underline mt-2 flex flex-row items-center gap-2 leading-6 w-max h-8"
          onClick={() => setModal2Open(true)}
        >
          {t("homePage.buttonDetail")}
          <IconArrowDesc />
        </p>
        {/* <Button type="primary" onClick={() => setModal2Open(true)}>
            </Button> */}
        <Modal
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
          closable={isClosable}
          width={1116}
          height={573}
        >
          <div className="mobile:flex-col tablet:flex-row flex gap-6 py-[20px] px-4">
            <div className=" flex flex-col max-w-[418px] mobile:mx-auto">
              <div className=" w-full">
                <Image
                  src="/images/GHT.png"
                  alt="anh"
                  width={418}
                  height={427}
                />
              </div>
              <div className="flex  justify-center items-end max-w-[418px] h-[66px]">
                <div className="flex tablet:gap-6 mobile:gap-3">
                  <Button>Dự án trước</Button>
                  <Button>Dự án sau</Button>
                </div>
              </div>
            </div>
            <div className=" max-w-[594px] max-h-[493px] mx-auto scrollbar-custom overflow-y-auto pr-6 gap-6 flex flex-col">
              <div>
                <p className="font-semibold gradient-text text-xl">
                  Tự động hóa
                </p>
                <p className="font-bold text-[32px] font-bricolage leading-[38.4px]">
                  GHT Verification app blockchain
                </p>
                <p>
                  G-Verification là một ứng dụng phi tập trung được xây dựng
                  trên nền tảng của chuỗi khối Ethereum (sử dụng Solidity làm
                  ngôn ngữ mã hóa chính) để cho phép khách hàng cá nhân, công ty
                  và tổ chức công xác minh Bản ghi tin cậy của bất kỳ người hoặc
                  đối tượng nào trên thế giới bằng cách kết nối với nền tảng
                  G-Data
                </p>
                <p>
                  Quy trình Xác minh sẽ yêu cầu Mã thông báo GHT làm "gas" cho
                  các hành động, bao gồm Xác minh, Xác nhận, Danh sách đen, Sửa
                  đổi, v.v. trên Bản ghi Tin cậy của một người / một đối tượng.
                </p>
                <p>
                  Những người dùng tham gia vào quá trình Xác minh Niềm tin sẽ
                  nhận được Mã thông báo GHT như phần thưởng cho sự hợp tác của
                  họ trong việc xây dựng Mạng lưới GHT.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <p className="font-semibold text-xl leading-[24px] ">
                  khách hàng
                </p>
                <div className="flex max-h-[40px] gap-2">
                  <Image
                    src="/images/Audi_logo logo.png"
                    alt="GHT "
                    width={127}
                    height={40}
                  />
                  <Image
                    src="/images/Audi_logo logo.png"
                    alt="GHT "
                    width={127}
                    height={40}
                  />
                  <Image
                    src="/images/Audi_logo logo.png"
                    alt="GHT "
                    width={127}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24px]">
                  Công nghệ
                </p>
                <div className="flex gap-2 mt-1">
                  <Image
                    src="/svg/android.svg"
                    alt="java "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="GHT "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="next "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="react "
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24px]">
                  Hệ điều hành
                </p>
                <div className="flex gap-2 mt-1">
                  <Image
                    src="/svg/android.svg"
                    alt="java "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="GHT "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="next "
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/svg/android.svg"
                    alt="react "
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24px] ">
                  Thử thách
                </p>
                <p className="mt-1">
                  Một app trên blockchain BSC, app này sẽ cung cấp một dịch vụ
                  để người dùng xác minh ai đó / điều gì đó để xây dựng lòng
                  tin. Người dùng kết nối với 3 vai trò của ứng dụng: Người yêu
                  cầu / Người xác minh / Người xác minh
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl leading-[24px] ">
                  Giải pháp
                </p>
                <p className="mt-1">
                  Phát triển trên nền tảng iOS và Android native (Swift và
                  Kotlin), tích hợp công nghệ blockchain Polygon và ETH
                </p>
              </div>
              <div className="flex  justify-center items-end h-[42px]">
                <div className="flex tablet:gap-6 mobile:gap-3">
                  <Button>Tải proposal</Button>
                  <Button>Dự án sau</Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
};

export default App;
