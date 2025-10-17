'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface ImgPreviewProps {
    img: string | null;
    error: string | null;
}

const ImgPreview = ({ img, error }: ImgPreviewProps) => {
  
    if (error) return <p className='text-red-500'>{error}</p>
  
    if (!img) return <div className='h-64 text-gray-500 bg-white border rounded-2xl grid place-items-center mt-10'>Waiting for your ideas...</div>

    return (
        <div className='bg-white border rounded-2xl p-4 shadow-sm mt-10 w-full md:w-1/3 mx-auto'>
            <Image src={`data:image/png;base64,${img}`} alt='arikxl' width={100} height={100}
                className='rounded-xl shadow-lg object-cover w-full'
            />

            <div>
                <a href={`data:image/png;base64,${img}`}
                    download={'Arik-Tattoo.png'}
                className='text-black'>
                    Download
                </a>
            </div>
    </div>
    
  )
}

export default ImgPreview