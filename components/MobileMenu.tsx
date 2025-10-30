import Link from 'next/link';
import { NavLink } from './Header';

type MobileMenuProps = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpen: boolean;
    navLinks: NavLink[]
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navLinks }: MobileMenuProps) => {
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div
            className={`
                fixed inset-0 bg-black bg-opacity-50 transition-opacity
                ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'}
            `}
            onClick={() => setIsMenuOpen(false)} 
        >
            <div
                onClick={(e) => e.stopPropagation()} 
                className={`
                    fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-8">תפריט</h2>
                    <ul className='flex flex-col gap-6 text-xl'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} onClick={handleLinkClick} className='hover:text-gray-500 transition-colors'>
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