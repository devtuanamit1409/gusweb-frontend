"use client";
import BannerComponent from "@/components/BannerComponent";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import { fetchContactUsPage } from "@/utils/GlobalApi";

const page = () => {
  // const data = {
  //   premble: "LIÊN HỆ",
  //   title: "",
  //   description:
  //     "GUSWEB luôn sẵn sàng lắng nghe những yêu cầu, ý tưởng cũng như vấn đề về hiện diện kỹ thuật số của Doanh nghiệp. Chúng tôi sẽ trao đổi và tìm cách đưa ra những giải pháp tối ưu cho khách hàng.",
  // };

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const getContactData = async () => {
      const data = await fetchContactUsPage("vi");
      setContactData(data);
    };

    getContactData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nameError ||
      phoneError ||
      emailError ||
      !name ||
      !phoneNumber ||
      !email
    ) {
      setFormError("Vui lòng điền đúng theo yêu cầu.");
      return;
    }

    setFormError("");
  };

  const validateForm = () => {
    if (
      nameError ||
      phoneError ||
      emailError ||
      !name ||
      !phoneNumber ||
      !email
    ) {
      setSubmitError(
        "Hãy nhập đúng các yêu cầu ở trên trước khi gửi thông tin."
      );
    } else {
      setSubmitError("");
    }
  };

  function formatBudget(value: number) {
    return `${value.toLocaleString()}`;
  }

  const [value, setValue] = React.useState<number[]>([20000, 80000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidName = /^[A-Za-z\s]+$/.test(value);
    if (!value) {
      setNameError("Họ và tên không được để trống.");
    } else if (!isValidName && value.length > 0) {
      setNameError("Họ và tên chỉ được chứa các chữ cái.");
    } else {
      setNameError("");
    }

    setName(value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const sanitizedValue = value.replace(/[^0-9]/g, "");

    if (sanitizedValue.length > 0) {
      if (sanitizedValue[0] !== "0") {
        setPhoneError("Số điện thoại phải bắt đầu bằng số 0.");
      } else if (sanitizedValue.length !== 10) {
        setPhoneError("Số điện thoại phải có đúng 10 chữ số.");
      } else {
        setPhoneError("");
      }
    }

    setPhoneNumber(sanitizedValue);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(value)) {
      setEmailError("");
    } else {
      setEmailError(
        "Vui lòng nhập đúng định dạng email, VD: example@gmail.com"
      );
    }
  };


  return (
    <div className="w-full">
      <BannerComponent intro={contactData?.intro} />
      <div className="custom-contaier flex flex-col gap-10">
        <div className="laptop:h-[1058px] tablet:h-[1025px]  flex justify-center items-center px-6 py-10 gap-6 bg-gradient-to-r from-[#FFFFFF42] to-[#3A7BD529]">
          <div className="w-full laptop:max-w-[736px] laptop:h-[806px] tablet:max-w-[500px] tablet:h-[898px] mobile:max-w-[328px] mobile:h-[946px] rounded-2xl border px-[24px] gap-4 flex flex-col tablet:justify-between bg-white">
            <div className="laptop:h-[68px] tablet:h-[112px] gap-2 pb-6 pt-6">
              <h1 className="text-4xl font-bold font-montserrat leading-[44px] text-[#1C1C1C]">
                Chúng tôi sẵn sàng giúp bạn
              </h1>
            </div>
            <div className="h-[24px] gap-4">
              <p className="text-base font-normal leading-6  text-[#363636]">
                GUSWEB có thể hỗ trợ bạn trong lĩnh vực gì?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="gap-4 flex">
              <div className="gap-6 flex laptop:flex-row laptop:h-[56px] laptop:max-w-[686px] tablet:flex-col tablet:max-w-[468px] tablet:h-[136px] w-full">
                <div className="relative laptop:max-w-[437px] flex w-full">
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    className={`w-[427px] latop:h-[56px] border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                      nameError ? "border-red-500" : ""
                    }`}
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#08BED5]"
                  >
                    Họ và tên
                  </label>
                  {nameError && (
                    <span className="text-red-500 text-sm">{nameError}</span>
                  )}
                </div>

                <div className="relative laptop:max-w-[237px]  w-full">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    className={`w-[237px] laptop:h-[56px] border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                      phoneError ? "border-red-500" : ""
                    }`}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#08BED5]"
                  >
                    Số điện thoại
                  </label>
                  {phoneError && (
                    <span className="text-red-500 text-sm">{phoneError}</span>
                  )}
                </div>
              </div>
              <div className="relative ">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className={`w-full h-[56px] p-2 pt-5 border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                    emailError ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#08BED5]"
                >
                  Địa chỉ email
                </label>
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>

              <div className="relative ">
                <input
                  type="text"
                  id="companyName"
                  placeholder=" "
                  className="w-full h-[56px] p-2 pt-5 border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer"
                  required
                />
                <label
                  htmlFor="companyName"
                  className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#08BED5]"
                >
                  Tên công ty
                </label>
              </div>

              <div className="relative ">
                <textarea
                  id="content"
                  placeholder=" "
                  className="w-full h-[176px] p-2 border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer"
                  rows={4}
                  required
                ></textarea>
                <label
                  htmlFor="content"
                  className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#08BED5]"
                >
                  Nội dung
                </label>
              </div>

              <div className="w-full h-[136px] gap-4">
                <p className="mb-2">
                  Ngân sách tài chính cho dự án muốn đầu tư
                </p>
                <Box sx={{ width: "100%" }}>
                  <Slider
                    getAriaLabel={() => "Ngân sách"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    valueLabelFormat={formatBudget}
                    min={0}
                    max={100000}
                    step={1000}
                    sx={{
                      color: "#08BED5",
                      height: 8,
                      "& .MuiSlider-thumb": {
                        height: 24,
                        width: 24,
                        backgroundColor: "#fff",
                        border: "2px solid currentColor",
                        "&:focus, &:hover, &.Mui-active": {
                          boxShadow: "inherit",
                        },
                      },
                      "& .MuiSlider-track": {
                        borderRadius: 4,
                        backgroundColor: "#D1E9FE",
                      },
                      "& .MuiSlider-rail": {
                        borderRadius: 4,
                        backgroundColor: "#DDDDDD",
                      },
                      "& .MuiSlider-valueLabel": {
                        backgroundColor: "#D1E9FE",
                        color: "#000",
                      },
                    }}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>$0</span>
                    <span>$100,000</span>
                  </div>
                </Box>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white flex justify-center items-center w-[139px] h-[42px] px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  onClick={validateForm} // Kiểm tra form khi bấm nút
                >
                  Gửi yêu cầu
                </button>
              </div>
              {submitError && (
                <span className="text-red-500 text-sm mt-2">{submitError}</span>
              )}
              {formError && (
                <span className="text-red-500 text-sm mt-2">{formError}</span>
              )}
            </form>
          </div>
        </div>

        {/* <div className="h-[486px] flex flex-row py-[80px] px-[162px] justify-center">
          <div className="w-[736px] h-[326px] pr-4 overflow-hidden">
            <iframe
              src={contactData?.map?.urlMap}
              className="w-full h-full border-none rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-[356px] h-[326px] rounded-lg border border-[#1FA9EC] p-6 gap-4 ">
            <div className="w-[156px] h-[50px] gap-2 flex justify-center items-center mx-auto  ">
              <Image
                width={156}
                height={50}
                src={contactData?.map.url}
                alt={contactData?.map.alt}
                className="object-cover w-[160px]"
              />
            </div>

            <div className="w-[308px] h-[80px] gap-2 ">
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                    src="/images/Iconsoffice.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <h2 className="font-semibold font-bricolage text-[20px] leading-6 text-[#1C1C1C]">
                    Văn phòng của chúng tôi
                  </h2>
                </div>
                <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                  {contactData?.map?.address}
                </p>
              </div>
            </div>

            <div className="w-[308px] h-[56px] gap-2 flex">
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                    src="/images/phone-call.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <h2 className="text-xl font-semibold leading-6 text-[#1C1C1C] font-bricolage">
                    Số điện thoại
                  </h2>
                </div>
                <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                  {contactData?.map?.phone}
                </p>
              </div>
            </div>

            <div className="w-[308px] h-[56px] gap-2 ">
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                    src="/images/IconsClock.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <h2 className="text-xl font-semibold leading-6 text-[#1C1C1C] font-bricolage">
                    Giờ làm việc
                  </h2>
                </div>
                <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                  {contactData?.map?.time}
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="relative justify-center items-center flex ">
          <Image
            width={1440}
            height={291}
            src={contactData?.folow?.url || "/images/BannerPromotion.png"}
            alt={contactData?.folow?.alt || "image banner contact"}
            className="w-full"
            quality={100}
          />
          <div className="w-[542px] h-[131px] top-[80px] left-[404px]  gap-6  absolute justify-center items-center mx-auto">
            <h1 className="h-[67px] font-bricolage font-bold text-[56px] leading-[67.2px] text-[#FEFEFE]">
              Theo dõi GUSWEB tại
            </h1>
            <div className="w-[104px] h-[40px] gap-6 flex flex-row absolute bottom-0">
              {contactData?.folow?.icons &&
                contactData?.folow?.icons.map((item: any, index: number) => {
                  return (
                    <Image
                      key={index}
                      src={item.url}
                      alt={item.alt}
                      width={40}
                      height={40}
                    />
                  );
                })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
