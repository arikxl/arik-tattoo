import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center py-6 text-white flex-col'>
      <p className="">
        Arik-Tattoo  ©  All Rights Reserved
      </p>

      <div className='text-center flex flex-col md:flex-row-reverse gap1 md:gap-2'>
        <p >
          This site is another custom piece by
        </p>
        <p >
          <Link href={'https://www.linkedin.com/in/arik-alexandrov/'} target='_blank' className='font-bold hover:underline'>
            Arik Alexandrov
          </Link>
          &nbsp;-&nbsp;
          <Link href={'https://github.com/arikxl'} target='_blank' className='font-bold hover:underline'>
            arikxl
          </Link>
          &nbsp;ISRAEL 2025
        </p>
      </div>
    </footer>
  )
}

export default Footer