import React from 'react'
import WhatsappHeaderButton from './buttons/WhatsappHeaderButton'

const Hero = () => {
    return (
        <section style={{ backgroundImage: 'url(https://res.cloudinary.com/arikxl/image/upload/v1761643604/Ella2023/jdq2cdlnz0fhvwaqn0hp.jpg)' }}
            className='  bg-cover bg-no-repeat bg-bottom w-full mx-auto h-[90dvh] '>
            <div className='bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col items-center justify-center'>


                <h1>LOGO</h1>
                <h2 className='text-4xl text-center w-3/4 font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, debitis?
                </h2>
                <div className='flex gap-4'>
                    <WhatsappHeaderButton />
                    <button
                        className="border-4 w-60 border-amber-400 p-1 text-xl font-bold bg-[rgba(0,0,0,0.3)]"
                    >
                        הדמיית קעקוע בAI
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero