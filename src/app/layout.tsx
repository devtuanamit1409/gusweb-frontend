import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import BrandValue from "@/components/BrandValue";

// import { AntdRegistry } from '@ant-design/nextjs-registry';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUSWEB",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <HeaderComponent />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
