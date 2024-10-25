"use client";
import { useEffect, useState } from "react";
import { IconMenu } from "@/components/Icons/IconMenu";
import Language from "@/components/language";
import Logo from "@/components/Logo";
import QuotationButton from "@/components/QuotationButton";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().replace(/^\/(en|ko)/, "");
  console.log("pathname", pathname);
  const t = useTranslations();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: t("header.items.0.slug"), label: t("header.items.0.title") },
    { href: t("header.items.1.slug"), label: t("header.items.1.title") },
    { href: t("header.items.2.slug"), label: t("header.items.2.title") },
    { href: t("header.items.4.slug"), label: t("header.items.4.title") },
    { href: t("header.items.5.slug"), label: t("header.items.5.title") },
  ];

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="custom-container">
        <div className="max-w-[1122px] flex justify-between items-center h-[76px] mx-auto px-4 ">
          {/* Logo Section */}
          <div>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center">
            <ul className="hidden laptop:flex flex-row space-x-4">
              {navItems.map((item, index: any) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`${
                      item.href === pathname
                        ? "text-[#08BED5]"
                        : "text-[#000000]"
                    } font-semibold text-base`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <div className="ml-4">
                <Language />
              </div>
              <div className="w-[106px] h-[36px] hidden tablet:block ml-4">
                <QuotationButton />
              </div>
            </div>
            <div className="flex laptop:hidden ml-4">
              <button onClick={toggleMenu}>
                <IconMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="laptop:hidden bg-white shadow-md">
          <ul className="flex flex-col justify-center items-center space-y-2 px-4 py-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`${
                    item.href === pathname ? "text-[#08BED5]" : "text-[#000000]"
                  } font-semibold text-base`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link href="/quick-quotes">
              <div className="w-[106px] h-[36px] hidden mobile:block tablet:hidden ml-4">
                <QuotationButton />
              </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
