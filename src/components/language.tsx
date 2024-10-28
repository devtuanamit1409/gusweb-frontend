"use client";

import { Dropdown } from "antd";
import React, { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Language() {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();

  const [selectedLanguage, setSelectedLanguage] = useState(localActive);

  const languageOptions = [
    { key: "1", label: t("header.language"), abbreviation: "vi" },
    { key: "2", label: t("header.language1"), abbreviation: "en" },
    { key: "3", label: t("header.language2"), abbreviation: "ko" },
  ];

  const handleLanguageChange = (lang: string) => {
    if (localActive === lang) return;

    setSelectedLanguage(lang);
    startTransition(() => {
      window.location.href = `/${lang}` || "/";
    });
  };

  return (
    <div className="flex items-center relative group mr-4">
      <Dropdown
        menu={{
          items: languageOptions.map((item) => ({
            key: item.key,
            label: (
              <div onClick={() => handleLanguageChange(item.abbreviation)}>
                {item.label}
              </div>
            ),
          })),
        }}
        placement="bottom"
        arrow
      >
        <div className="flex items-center cursor-pointer uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          {selectedLanguage.toUpperCase()}
        </div>
      </Dropdown>
    </div>
  );
}