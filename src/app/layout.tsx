// src/app/[locale]/layout.tsx
import Footer from "@/components/Footer";
import HeaderComponent from "@/components/HeaderComponent";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { routing } from "@/routing";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

// Hàm `generateStaticParams` để tạo đường dẫn tĩnh cho từng `locale`
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  // Đảm bảo sử dụng static rendering bằng `unstable_setRequestLocale`
  unstable_setRequestLocale(locale);

  // Lấy thông điệp dịch cho `locale` hiện tại
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader color="#08bed5" />
          <HeaderComponent />
          <main className="mt-[76px]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
