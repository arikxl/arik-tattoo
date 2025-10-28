import Link from 'next/link'

import Logo from './Logo'
import WhatsappHeaderButton from './buttons/WhatsappHeaderButton'

const Hero = () => {
    return (
        <section
            style={{ backgroundImage: 'url(https://res.cloudinary.com/arikxl/image/upload/v1761643604/Ella2023/jdq2cdlnz0fhvwaqn0hp.jpg)' }}
            className='bg-cover bg-no-repeat bg-bottom w-full mx-auto h-[90dvh]'
        >
            <div className='bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col items-center justify-center p-4'>

                <div className='w-48 md:w-64 text-center mb-4'>
                    <Logo />
                </div>

                <h2 className='text-4xl md:text-5xl lg:text-6xl text-center w-full md:w-3/4 lg:w-1/2 font-bold mb-8 text-gray-200'>
                    קעקועים שהם יצירת מופת אישית מעוצבים במיוחד בשבילך
                </h2>

                <div className='flex flex-col md:flex-row gap-4 w-full sm:w-auto items-center'>
                    <WhatsappHeaderButton />
                    <Link
                        href='/generate'
                        className="text-center hover:bg-amber-400 cursor-pointer border-4 w-3/4 sm:w-60 border-amber-400 p-1 text-xl font-semibold flex items-center justify-center h-full"
                    >
                        הדמיית קעקוע בAI
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Hero