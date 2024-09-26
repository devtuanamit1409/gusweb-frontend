<<<<<<< HEAD

import Navbar from "@/components/Navbar";
=======
>>>>>>> parent of ce6ff5d (26/9/2024)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
<<<<<<< HEAD
import DesignGusweb from "@/components/DesignGusweb";
=======
import Navbar from "@/components/Navbar";
import NavbarTest from "@/components/NavbarTest";
import Footer from "@/components/Footer";

import Homepage from "@/components/Homepage";
import HooksTest from "@/test/HooksTest";

import ImgBody from "@/components/ImgBody";
import BodyAMITGROUP from "@/components/BodyAMITGROUP";
>>>>>>> parent of ce6ff5d (26/9/2024)

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
<<<<<<< HEAD

=======
      <body>
        <Navbar />
        <BodyAMITGROUP />
        <Homepage />
        <ImgBody />
        <Footer />
        {/* {children} */}
>>>>>>> parent of ce6ff5d (26/9/2024)
      </body>
    </html>
  );
}
