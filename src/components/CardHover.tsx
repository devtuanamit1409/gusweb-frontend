"use client";
import Image from "next/image";
import { useState } from "react";

const CardHover = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white home-service-item__box">
            <div className="">
                <Image src={"/images/Desktop/flow=1, Name=AS@2x.png"} width={100} height={100} alt=""></Image>
            </div>
            <h2 className="font-semibold text-xl mb-1 px-8">Phát Triển Phần Mềm Theo Yêu Cầu</h2>
            <div className="hidden">
                <p className="text-gray-700 text-base">
                    Với hơn 15 năm kinh nghiệm, AMIT luôn nổ lực hết mình để mang đến các giải pháp phát triển phần mềm chất lượng cao, tối ưu hoá thời gian và chi phí, giúp thúc đẩy quá trình chuyển đổi số của khách hàng diễn ra nhanh chóng và hiệu quả hơn.
                </p>
                <a href="/">Xem thêm
                    <span role="img" aria-label="arrow-right" className="anticon anticon-arrow-right">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z">
                            </path>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default CardHover;
