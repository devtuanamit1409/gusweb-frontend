import Image from "next/image";
import React from "react";
import imageNotFound from "../../public/images/notfound.svg";
import { Button } from "antd";
import Link from "next/link";

const not_found = () => {
  return (
    <div className="relative pt-[76px]">
      <div className="PageNotFound ">
        <div className="PageNotFound-container">
          <h2 className="PageNotFound-title">Không tìm thấy trang</h2>
          <p className="PageNotFound-content">
            Chúng tôi rất tiếc phải xin lỗi. Vì trang mà bạn đang tìm kiếm không
            thể tìm thấy. Đừng quá lo lắng về điều này. Vui lòng quay lại trang
            chủ nhé!
          </p>
          <Link href="/">
            <Button className="PageNotFound-button">
              <span></span>
              <span className="btn-content">Quay về trang chủ</span>
              <div className="sketch-button-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default not_found;
