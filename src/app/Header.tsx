"use client";
import Link from 'next/link';
import "../styles/globals.css";
export default function Header() {
  return (
    <header className="bg-white py-6 text-center">
      <nav>
        <ul className="list-none flex justify-center gap-8 p-0 m-0">
          <li>
            <Link href="/" className="text-[#000000] font-bold text-lg underline-animation">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Case-studies" className="text-[#000000] font-bold text-lg underline-animation">
              Case studies
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#000000] font-bold text-lg underline-animation">
             Về chúng tôi
            </Link>
          </li>
          <li>
            <Link href="/tuyen-dung" className="text-[#000000] font-bold text-lg underline-animation">
              Tuyển dụng
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[#000000] font-bold text-lg underline-animation">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/lien-he" className="text-[#000000] font-bold text-lg underline-animation">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
