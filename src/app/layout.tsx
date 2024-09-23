import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import NavbarTest from "@/components/NavbarTest";
import Footer from "@/components/Footer";

import Homepage from "@/components/Homepage";
import HooksTest from "@/test/HooksTest";

import ImgBody from "@/components/ImgBody";
import BodyAMITGROUP from "@/components/BodyAMITGROUP";

// import { AntdRegistry } from '@ant-design/nextjs-registry';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang Chủ - AMIT GROUP",
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
        <Navbar />
        <BodyAMITGROUP />
        <Homepage />
        <ImgBody />
        <Footer />
        {/* {children} */}
      </body>
    </html>
  );
}
