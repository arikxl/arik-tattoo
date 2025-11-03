
import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo';

const HomeMeSection = () => {
    return (
        <div className='flex flex-col h-full md:flex-row  md:min-h-full'>

            <div className='flex-1  relative overflow-hidden'>
                <div
                    className='absolute  inset-0 bg-cover bg-center grayscale'
                    style={{ backgroundImage: 'url(https://res.cloudinary.com/arikxl/image/upload/v1761813709/Ella2023/mmm69b1faz8wp8ybfw1p.png)' }}
                ></div>

                <div className='relative flex  flex-col justify-center bg-white/70 w-full h-full items-start px-6 sm:px-8 py-12 md:py-10 gap-10 md:gap-14 z-10'>
                    <h2 className='text-4xl lg:text-6xl text-black'>
                        מחובר לשורשים ולמסורת, ראש פתוח לחדשנות ולאומנות אישית.
                    </h2>

                    <p className='text-lg lg:text-xl text-black'>
                        בסטודיו שלי אנחנו שואבים השראה מההיסטוריה של אמנות הקעקוע, אבל גם דואגים לשלב טאץ&apos; מודרני, כדי שכל לקוח יקבל חוויה באמת מיוחדת וקעקוע שאין לאף אחד אחר. המטרה שלי היא לקחת את האמנות הזו צעד קדימה, עם קעקועים שנתפרים אישית בשבילכם.
                    </p>

                    <Link
                        href={'/about'}
                        className='hover:bg-amber-400 hover:text-black transition-colors bg-black text-amber-400 w-full text-center md:w-auto md:px-12 font-semibold text-2xl p-3 md:p-2'
                    >
                        הסיפור שלי
                    </Link>
                </div>
            </div>

            <div className='flex-1 flex flex-col md:flex-row'>

                <div className='flex-1 relative h-80 md:h-auto'>
                    <Image
                        alt={"Arik Alexandrov"}
                        src="https://res.cloudinary.com/arikxl/image/upload/v1761816740/Ella2023/vku4ff74zjiunzv0b8ks.png"
                        fill
                        className='object-cover'
                    />
                </div>

                <div className='flex-1 flex flex-col items-center text-center justify-center gap-8 px-6 py-12 md:px-8 lg:px-12 bg-slate-700'>
                    <div className='w-1/3 md:w-1/2'>
                        <Logo />
                    </div>

                    <h3 className='text-5xl sm:text-6xl lg:text-8xl tattoo'>
                        Arik Tattoo
                    </h3>

                    <p className='w-full sm:w-4/5'>
                        סטודיו XL שהוקם על ידי בשנת 2019 בבאר שבע, הוא בית לאמנות גוף באווירה מקצועית ואישית. הסטודיו מתמחה בקעקועים מקוריים ובמגוון רחב של פירסינגים, מתוך אמונה שלכל יצירה יש סיפור, ואני כאן כדי לעזור לכם לספר את שלכם.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeMeSection;
