import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className='border-b'>
          <div className=' mx-auto px-6 py-6 flex'>
              <Link href='/home'>
              <div className='font-extrabold text-xl'>
                  Arik-Tattoo
              </div>
              </Link>
          </div>
      </header>
  )
}

export default Header