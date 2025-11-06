import Link from 'next/link';

import Logo from './Logo';

type MobileMenuProps = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpen: boolean;
};

const mobileMenuLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/about', label: 'הסיפור שלי' },
    { href: '/generate', label: 'הדמיית AI' },
    { href: '/faq', label: 'שאלות ותשובות' },
    { href: '/gallery/tattoos', label: 'קעקועים' },
    { href: '/gallery/piercing', label: 'פירסינג' },
    { href: '/#map', label: 'מיקום' }
];

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div
            className={`
                fixed inset-0 bg-slate-700 bg-opacity-50 transition-opacity md:hidden
                ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10 hidden'}
            `}
            onClick={() => setIsMenuOpen(false)}
        >
            <div
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setIsMenuOpen(false);
                    }
                }}
                className={`
                    fixed top-0 right-0 h-full w-full   shadow-xl text-center 
                    transform transition-transform duration-300 ease-in-out text-amber-400
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="h-full ">
                    <ul className='flex flex-col gap-6 w-full text-2xl items-center h-full justify-center'>
                        <div className='w-1/2'>
                            <Link href={'/'}>
                                <Logo />
                                <p className='tattoo text-3xl md:text-4xl'>Arik-Tattoo</p>
                            </Link>
                        </div>
                        {mobileMenuLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} onClick={handleLinkClick}
                                    className='hover:text-gray-500 transition-colors'>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;