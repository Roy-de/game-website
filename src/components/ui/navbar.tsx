// src/components/ui/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className=" fixed top-0 left-0 right-0 p-4 backdrop-blur-lg z-50 ">
            <ul className="flex space-x-10 justify-center">
                <li>
                    <Link href="/" className=" [font-family:'Conthrax-SemiBold',Helvetica] font-semibold text-[#000b33] text-[20px] leading-[42px] hover:text-[22px] duration-200">
                        Main Page
                    </Link>
                </li>
                <li>
                    <Link href="/blog-detail" className="[font-family:'Conthrax-SemiBold',Helvetica] font-semibold text-[#000b33] text-[20px] leading-[42px] hover:text-[22px] duration-200">
                        Blog Detail
                    </Link>
                </li>
                <li>
                    <Link href="/games" className="[font-family:'Conthrax-SemiBold',Helvetica] font-semibold text-[#000b33] text-[20px] leading-[42px] hover:text-[22px] duration-200">
                        Games
                    </Link>
                </li>
            </ul>
        </nav>
    );
}