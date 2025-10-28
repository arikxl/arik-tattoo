import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

const Header = () => {
    return (
        <nav className='border-b '>
            <div className='justify-between mx-auto px-24 py-4 flex items-center'>

                <ul className='flex gap-6 font-semibold'>

                    <li>
                        <Link href={'/' }>
                            מי אני?
                        </Link>
                    </li>
                    <li>
                        <Link href={'/' }>
                            מיקום
                        </Link>
                    </li>
                    <li>
                        <Link href={'/' }>
                            שאלות ותשובות
                        </Link>
                    </li>
                    <li>
                        <Link href={'/' }>
                            קעקועים
                        </Link>
                    </li>
                    <li>
                        <Link href={'/' }>
                            פירסינג
                        </Link>
                    </li>
                </ul>



                <Link href='/' className='flex gap-2 items-center'>
                    <div className='   text-3xl'>
                        Arik-Tattoo
                    </div>

                    <Image
                        src='https://res.cloudinary.com/arikxl/image/upload/v1761648396/Ella2023/g3nonsrlkzjzahb2fdbd.png'
                        alt='Arik-Tattoo'
                        width={100}
                        height={100}
                        className='w-1/5'

                    />

                </Link>
            </div>
        </nav>
    )
}

export default Header