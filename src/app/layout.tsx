import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import BrandValue from "@/components/BrandValue";
import "aos/dist/aos.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
// import { AntdRegistry } from '@ant-design/nextjs-registry';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSWEB",
  description: "day la gusweb",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = async ({ children, params: { locale } }) => {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader color="#08bed5" />
          {/* <Navbar /> */}
          <HeaderComponent />
          <main className="mt-[76px]"> {children}</main>
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
