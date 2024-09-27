
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import Inflation from "@/components/Inflation";
import GUSWEB from "@/components/GUSWEB";
import WebsiteCard from "@/components/WebsiteCard";
import Footer from "@/components/Footer";
import About from "@/components/About";
import DesignGusweb from "@/components/DesignGusweb";


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
        <Navbar />
        <Inflation />
        <GUSWEB />
        <WebsiteCard />
        <About />
        <DesignGusweb />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
