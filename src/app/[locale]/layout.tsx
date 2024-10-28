import Footer from "@/components/Footer";
import type { Metadata } from "next";
// import "../styles/globals.css";-
import HeaderComponent from "@/components/HeaderComponent";
import { getLocale, getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { routing } from "@/i18n/routing";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../../styles/globals.css";
import "aos/dist/aos.css";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  setRequestLocale(locale || "vi");

  const messages = await getMessages();
  return (
    <html lang={locale || "vi"}>
      <body>
        <NextIntlClientProvider locale={locale || "vi"} messages={messages}>
          <NextTopLoader color="#08bed5" />
          <HeaderComponent />
          <main className="mt-[76px]"> {children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

