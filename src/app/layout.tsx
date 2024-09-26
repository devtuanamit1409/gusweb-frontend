
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../styles/globals.css";
import DesignGusweb from "@/components/DesignGusweb";

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

      </body>
    </html>
  );
}
