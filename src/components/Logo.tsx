import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/images/logo.png" alt="Logo" width={166} height={44} />
        </Link>
    );
}
