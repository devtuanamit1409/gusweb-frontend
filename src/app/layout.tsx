import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import NavbarTest from "@/components/NavbarTest";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { AntdRegistry } from '@ant-design/nextjs-registry';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "amitgroup",
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

        {/* <Header /> */}
        {/* <NavbarTest /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
