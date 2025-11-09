import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const showcaseArray = [
    {
        imgUrl: 'https://res.cloudinary.com/arikxl/image/upload/v1761830978/Ella2023/kvcctrsfjdsiokg8t0xp.jpg',
        title: 'קעקועים גדולים',
        href:'/gallery/tattoos-large'
    },
    {
        imgUrl: 'https://res.cloudinary.com/arikxl/image/upload/v1761831102/Ella2023/uo6c4mt2pgd2bfv3cfif.jpg',
        title: 'שרוולים',
        href:'/gallery/tattoos-sleeve'
    },
    {
        imgUrl: 'https://res.cloudinary.com/arikxl/image/upload/v1761831509/Ella2023/dewkxpxg1tlukvwm7dtb.jpg',
        href:'/gallery/tattoos-small',
        title: 'קעקועים קטנים'
    },
    {
        imgUrl: 'https://res.cloudinary.com/arikxl/image/upload/v1761823878/Ella2023/vg3mljdtl9ft22jrfpgt.webp',
        href:'/gallery/piercing',
        title: 'פירסינג'
    },
]

const HomeCaseShow = () => {
    return (
        <div className=' relative flex flex-col py-6 md:flex-row isolate '
            style={{ backgroundImage: 'url(https://res.cloudinary.com/arikxl/image/upload/v1761822503/Ella2023/octnniwqeafk0qqhi1vk.jpg)' }}
        >

            <div className='relative z-10 w-9/10 mx-auto '>
                <div className='flex gap-4 md:gap-8 items-center  justify-center py-2 md:py-4'>
                    <div className='bg-amber-400 w-full h-0.5'></div>
                    <h2 className='text-2xl md:text-6xl whitespace-nowrap'>תיק עבודות</h2>
                    <div className='bg-amber-400 w-full h-0.5'></div>
                </div>

                <div className='z-20 w-9/10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                    {
                        showcaseArray.map((item) => (
                            <Link key={item.title} href={item.href}
                                className='cursor-pointer group'
                            >
                                <figure 
                                    className="  rounded-lg overflow-hidden shadow-md flex flex-col"                            >
                                    <div className="relative w-full aspect-square overflow-hidden">
                                        <Image
                                            alt={item.title}
                                            src={item.imgUrl}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 will-change-transform" />
                                    </div>
                                    <figcaption className="mt-auto p-4 bg-black/50 text-xl xl:text-2xl font-semibold text-amber-400 text-center">
                                        <p>{item.title}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        ))
                    }
                </div>


                <Link href={'/gallery/all'} className='flex gap-4 md:gap-8 items-center justify-center md:py-4 group'>
                    <div className='bg-amber-400 w-full h-0.5'></div>
                    <h2 className='text-2xl md:text-6xl whitespace-nowrap '>
                        לגלריה המלאה
                    </h2>
                    <div className='bg-amber-400 w-full h-0.5'></div>
                </Link>
            </div>

        </div>
    )
}

export default HomeCaseShow