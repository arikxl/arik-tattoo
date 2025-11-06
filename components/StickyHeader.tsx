'use client';

import { useState, useEffect } from 'react';

import Header from './Header';

export default function StickyHeader() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.9; 
            if (window.scrollY > heroHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = `
    w-full bg-slate-900
    transition-all duration-300 ease-in-out
    ${isSticky
            ? 'fixed top-0 left-0 z-50 text-slate-700 bg-white shadow-md animate-fade-down'
            : 'relative'
        }
  `;

    return (
        <header className={headerClasses}>
            <Header />
        </header>
    );
}