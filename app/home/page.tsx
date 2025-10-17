import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className='text-center'>
                <h1 className='text-xl md:text-5xl font-extrabold tracking-tight leading-tight'>
                    AI Tattoo Generator
                </h1>
                <p className='mt-4 text-lg text-gray-300'>
                    Type an idea and get a clean, black-ink tattoo design. No backgrounds, high contrast, ideal for skin art.
                </p>

            </div>


            <div className='mt-8 text-center'>
                <Link href={'/generate'}>
                <button className='cursor-pointer bg-amber-700 hover:bg-amber-800 font-semibold px-6 py-3 rounded-xl shadow-md'>
                    Generate a Tattoo🔥
                </button>
                </Link>
            </div>



            <div className='aspect-[4/2] mt-8 rounded-xl bg-gradient-to-br from-indigo-200 to-pink-200 grid place-items-center'>
                <div className='text-center'>
                    <div className='text-7xl mb-3'>
                        ✒
                    </div>
                    <p className='mt-10 text-gray-600'>Your AI-Designed tattoo will look like this</p>
                </div>
            </div>
        </>
    )
}

export default Home