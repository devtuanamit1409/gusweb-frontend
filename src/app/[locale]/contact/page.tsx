"use client";
import BannerComponent from "@/components/BannerComponent";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import { fetchContactUsPage, postContactUser } from "@/utils/GlobalApi";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { message } from "antd";
import Link from "next/link";

interface HomeProps {
  params: { locale: "en" | "vi" | "ko" };
}

const Page = ({ params: { locale } }: HomeProps) => {
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const t = useTranslations();

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
  const localActive = useLocale();
  useEffect(() => {
    const getContactData = async () => {
      const data = await fetchContactUsPage(localActive);
      setContactData(data);
    };

    getContactData();
  }, [localActive]);

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
        await postContactUser(formData);
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
      setSubmitError(`${t("contactPage.error.submitError")}`);
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
      setNameError(`${t("contactPage.error.name")}`);
    } else if (!isValidName && value.length > 0) {
      setNameError(`${t("contactPage.error.name2")}`);
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
        setPhoneError(`${t("contactPage.error.phone")}`);
      } else if (sanitizedValue.length !== 10) {
        setPhoneError(`${t("contactPage.error.phone2")}`);
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
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
      setEmailError(`${t("contactPage.error.email")}`);
    }
  };
  const handleCompanyNameChange = (e: any) => setCompanyName(e.target.value);

  const handleContentChange = (e: any) => setContent(e.target.value);
  return (
    <div className="w-full flex flex-col ">
      <BannerComponent intro={contactData?.intro} />
      <div className="custom-contaier flex flex-col gap-10">
        <div className="laptop:h-[1058px] h-[1025px] mobile:py-20  flex flex-col justify-center items-center tablet:px-[162px] px-4 py-10 gap-6 bg-gradient-to-r from-[#FFFFFF42] to-[#3A7BD529] ">
          <div className="w-full laptop:max-w-[736px] laptop:max-h-[848px] tablet:max-w-[500px] tablet:h-[1000px] mobile:max-w-[328px] mobile:h-[988px] rounded-2xl border py-[40px] px-6 gap-4 flex flex-col tablet:justify-between bg-white">
            <div className="laptop:h-[68px] tablet:h-[112px]">
              <h1 className="laptop:text-[36px] font-bold font-montserrat leading-[44px] tablet:text-[36px]  text-[#1C1C1C] mobile:text-[32px]">
                {t("contactPage.ready")}
              </h1>
            </div>
            <div className="">
              <p className="text-base font-normal leading-6  text-[#363636]">
                {t("contactPage.support")}
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
                    {t("contactPage.name")}
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
                    {t("contactPage.phone")}
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
                  {t("contactPage.email")}
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
                  {t("contactPage.company")}
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
                  {t("contactPage.content")}
                </label>
              </div>

              <div className="laptop:max-w-[688px] tablet:max-w-[468px] mobile:max-w-[296px] w-full laptop:h-[136px] tablet:h-[136px] mobile:h-[160px] flex flex-col gap-14">
                <p className=""> {t("contactPage.budget")}</p>
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
                    name &&
                    phoneNumber &&
                    email &&
                    companyName &&
                    content &&
                    !nameError &&
                    !phoneError &&
                    !emailError
                      ? "bg-[#27B3E9]"
                      : "bg-gray-300"
                  } text-white`}
                  onClick={validateForm}
                >
                  {t("contactPage.send")}
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

        <div className="custom-container laptop:max-w-[1116px] laptop:h-[486px] tablet:h-[399px] mobile:h-[794px] flex tablet:flex-row laptop:flex-row  tablet:p-4 mobile:py-6 mobile:px-3 mobile:flex-col justify-center items-center gap-6 w-full">
          <div className=" laptop:h-[326px]  tablet:h-[338px] mobile:h-[361px] w-full">
            <iframe
              src={contactData?.map?.urlMap}
              className="w-full h-full border-none rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="laptop:max-w-[356px] laptop:h-[326px]  tablet:h-[338px] mobile:h-[361px]   rounded-lg border border-[#1FA9EC] flex flex-col p-6 gap-4 w-full">
            <div className="laptop:max-w-[308px]  h-[50px] flex justify-center items-center w-full">
              <div className="w-[156px]  h-[50px]">
                <Image
                  width={156}
                  height={50}
                  src={contactData?.map.url}
                  alt={contactData?.map.alt}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="laptop:max-w-[308px]  mobile:h-[104px] h-[80px] w-full flex flex-col gap-2">
              <div className="flex items-center">
                <Image
                  src="/images/Iconsoffice.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <h2 className="font-semibold font-bricolage text-[20px] leading-6 text-[#1C1C1C]">
                  {t("contactPage.ourOffice")}
                </h2>
              </div>
              <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                {contactData?.map?.address}
              </p>
            </div>

            <div className="laptop:max-w-[308px]  h-[56px] w-full flex flex-col gap-2">
              <div className="flex items-center">
                <Image
                  src="/images/phone-call.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <h2 className="text-xl font-semibold leading-6 text-[#1C1C1C] font-bricolage">
                  {t("contactPage.phone")}
                </h2>
              </div>
              <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                {contactData?.map?.phone}
              </p>
            </div>

            <div className="laptop:max-w-[308px]  h-[56px] w-full flex flex-col gap-2">
              <div className="flex items-center">
                <Image
                  src="/images/IconsClock.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <h2 className="text-xl font-semibold leading-6 text-[#1C1C1C] font-bricolage">
                  {t("contactPage.workingHours")}
                </h2>
              </div>
              <p className="font-normal text-[16px] leading-6 tracking-[0.5px]">
                {contactData?.map?.time}
              </p>
            </div>
          </div>
        </div>
        <div className="relative laptop:h-[291px] tablet:h-[291px] mobile:h-[443px]">
          <Image
            src={contactData?.folow?.url || "/images/BannerPromotion.png"}
            alt={contactData?.folow?.alt || "image banner contact"}
            fill
            className="absolute top-0 left-0 w-full laptop:h-[291px] tablet:h-[291px] mobile:h-[443px]"
          />
          <div className="custom-container laptop:px-[162px] px-4 flex laptop:justify-start  tablet:justify-start tablet:items-center mobile:justify-center mobile:items-start h-full">
            <div className="laptop:max-w-[542px] laptop:h-[131px]  tablet:h-[114px]  mobile:h-[164px] flex flex-col gap-6 justify-center tablet:items-start laptop:items-start mobile:items-center tablet:pt-[45px] w-full">
              <h3 className="laptop:text-[56px] laptop:leading-[67.2px] tablet:text-[42px] tablet:leading-[50.4px] mobile:text-[42px] mobile:leading-[50.4px] font-bold font-bricolage text-[#FEFEFE] text-center z-10">
                {t("contactPage.follow")}
              </h3>
              <div className="w-[104px] h-[40px] gap-6 flex flex-row z-20">
                {contactData?.folow?.icons &&
                  contactData?.folow?.icons.map((item: any, index: number) => {
                    return (
                      item.slug && (
                      <Link key={index} href={item.slug} target="_blank" rel="noopener noreferrer">
                        <Image
                        key={index}
                        src={item.url}
                        alt={item.alt}
                        width={40}
                        height={40}
                        />
                      </Link>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[455px] h-[291]px] hidden laptop:block ">
            <Image
              src="/images/OBJECTS2.png"
              alt="Overlay Image"
              width={455}
              height={291}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[234px] h-[222px] laptop:hidden mobile:block tablet:block">
            <Image
              src="/images/OBJECTS3.png"
              alt="Overlay Image"
              width={234}
              height={222}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
