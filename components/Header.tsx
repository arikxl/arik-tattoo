'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import HamburgerBtn from './buttons/HamburgerBtn';
import MobileMenu from './MobileMenu';

export type NavLink = {
    href: string;
    label: string;
};

const navLinks: NavLink[] = [
    { href: '/', label: 'מי אני?' },
    { href: '/generate', label: 'הדמיית AI' },
    { href: '/faq', label: 'שאלות ותשובות' },
    { href: '/tattoos', label: 'קעקועים' },
    { href: '/piercings', label: 'פירסינג' },
];

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='border-b'>
            <div className='container mx-auto flex items-center justify-between px-4 py-4 sm:px-8 lg:px-12'>

                <ul className=' hidden md:flex items-center gap-6 font-semibold'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className='hover:text-gray-500 transition-colors'>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <HamburgerBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen } />



                <Link href='/' className='flex items-center gap-2'>
                    <Image
                        src='https://res.cloudinary.com/arikxl/image/upload/v1761648396/Ella2023/g3nonsrlkzjzahb2fdbd.png'
                        alt='Arik-Tattoo Logo'
                        width={50}
                        height={50}
                        className='h-12 w-12' />
                    <span className='text-2xl font-bold'>Arik-Tattoo</span>
                </Link>

                <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />

            </div>
        </nav>
    );
};

export default Header;