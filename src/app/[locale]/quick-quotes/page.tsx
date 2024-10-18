"use client";
import { fetchContactUsPage, postContactUser } from "@/utils/GlobalApi";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { message } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [contactData, setContactData] = useState<any>(null);
  const [companyName, setCompanyName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const getContactData = async () => {
      const data = await fetchContactUsPage("vi");
      setContactData(data);
    };

    getContactData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    validateForm();

    if (!nameError && !phoneError && !emailError) {
      const formData = {
        name,
        phoneNumber,
        email,
        companyName,
        content,
        value,
      };

      try {
        const response = await postContactUser(formData);
        message.success("Form submitted successfully!");

        setName("");
        setPhoneNumber("");
        setEmail("");
        setCompanyName("");
        setContent("");
      } catch (error) {
        console.error("Error submitting form:", error);
        setFormError("Error submitting the form. Please try again.");
      }
    } else {
      setFormError("Please fix the errors in the form.");
    }
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
      setIsFormValid(true);
    }
  };

  function formatBudget(value: number) {
    return `${value.toLocaleString()}`;
  }

  const [value, setValue] = React.useState<number[]>([20000, 80000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    //lay ra khoang gia tri
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
        setPhoneError("Số điện thoại bắt đầu bằng số 0.");
      } else if (sanitizedValue.length !== 10) {
        setPhoneError("Số điện thoại có đúng 10 chữ số.");
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
  const handleCompanyNameChange = (e: any) => setCompanyName(e.target.value);

  const handleContentChange = (e: any) => setContent(e.target.value);
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="custom-contaier flex flex-col gap-10">
        <div className="laptop:h-[1058px] h-[1025px] mobile:py-20  flex flex-col justify-center items-center px-6 py-10 gap-6 bg-gradient-to-r from-[#FFFFFF42] to-[#3A7BD529] ">
          <div className="w-full laptop:max-w-[736px] laptop:max-h-[848px] tablet:max-w-[500px] tablet:h-[1000px] mobile:max-w-[328px] mobile:h-[988px] rounded-2xl border py-[24px] px-4 gap-4 flex flex-col tablet:justify-between bg-white">
            <div className="laptop:h-[68px] tablet:h-[112px] pb-6 ">
              <h1 className="laptop:text-[36px] font-bold font-montserrat leading-[44px] tablet:text-[36px]  text-[#1C1C1C] mobile:text-[32px]">
                Chúng tôi sẵn sàng giúp bạn
              </h1>
            </div>
            <div className="h-[24px] mobile:h-12 gap-4">
              <p className="text-base font-normal leading-6  text-[#363636]">
                GUSWEB có thể hỗ trợ bạn trong lĩnh vực gì?
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div
                className={`${
                  nameError || phoneError
                    ? "laptop:max-h-[77px]"
                    : "laptop:max-h-[56px]"
                } laptop:gap-6 tablet:gap-4 mobile:gap-4 flex mb-4 laptop:flex-row  laptop:max-w-[686px] flex-col    w-full`}
              >
                <div className="relative laptop:max-w-[427px] tablet:max-w-[468px] mobile:max-w-[296px] w-full">
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    className={`laptop:max-w-[427px] tablet:max-w-[468px] mobile:max-w-[296px] w-full h-[56px]  p-2   border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                      nameError ? "focus:border-red-500" : ""
                    }`}
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`${
                      nameError ? "peer-focus:text-red-500 text-sm" : ""
                    } absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm `}
                  >
                    Họ và tên
                  </label>
                  {nameError && (
                    <span className="text-red-500 text-sm">{nameError}</span>
                  )}
                </div>

                <div className="relative laptop:max-w-[237px]  tablet:max-w-[468px] mobile:max-w-[296px]   w-full">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    className={`laptop:max-w-[237px] tablet:max-w-[468px] mobile:max-w-[296px] w-full h-[56px]  p-2  border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                      phoneError ? "focus:border-red-500" : ""
                    }`}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                  />
                  <label
                    htmlFor="phone"
                    className={`${
                      phoneError ? "peer-focus:text-red-500 text-sm" : ""
                    } absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm `}
                  >
                    Số điện thoại
                  </label>
                  {phoneError && (
                    <span className="text-red-500 text-sm">{phoneError}</span>
                  )}
                </div>
              </div>
              <div className="relative mb-4 laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px]  w-full ">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className={`laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full  h-[56px] p-2  border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer ${
                    emailError ? "focus:border-red-500" : ""
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <label
                  htmlFor="email"
                  className={`${
                    emailError ? "peer-focus:text-red-500 text-sm" : ""
                  } absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm `}
                >
                  Địa chỉ email
                </label>
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>

              <div className="relative mb-4 laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full">
                <input
                  type="text"
                  id="companyName"
                  placeholder=" "
                  className="laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full  h-[56px] p-2  border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer"
                  required
                  value={companyName}
                  onChange={handleCompanyNameChange}
                />
                <label
                  htmlFor="companyName"
                  className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm "
                >
                  Tên công ty
                </label>
              </div>

              <div className="relative mb-4 laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full">
                <textarea
                  id="content"
                  placeholder=""
                  className="laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full  h-[176px] p-2 border border-gray-300 rounded focus:border-[#08BED5] focus:outline-none peer"
                  rows={4}
                  value={content}
                  onChange={handleContentChange}
                  required
                ></textarea>
                <label
                  htmlFor="content"
                  className="absolute left-3 -top-3.5 bg-white px-1 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm "
                >
                  Nội dung
                </label>
              </div>

              <div className="laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full laptop:h-[136px] tablet:h-[136px] mobile:h-[160px] flex flex-col gap-14">
                <p className="">Ngân sách tài chính cho dự án muốn đầu tư</p>
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
                  <div className="flex justify-between text-sm">
                    <span>$0</span>
                    <span>$100,000</span>
                  </div>
                </Box>
              </div>

              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className={`flex justify-center items-center w-[139px] h-[42px] px-4 py-2 rounded transition-colors ${
                    isFormValid ? "bg-[#27B3E9]" : "bg-gray-300"
                  } text-white`}
                  onClick={validateForm}
                >
                  Gửi yêu cầu
                </button>
              </div>
              {submitError && (
                <span className="text-red-500 text-sm mt-2 ">
                  {submitError}
                </span>
              )}
              {formError && (
                <span className="text-red-500 text-sm mt-2">{formError}</span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
