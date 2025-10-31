import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa"; import Link from 'next/link'
import React from 'react'

const SocialBar = () => {
  return (
      <section className='bg-amber-400 py-12 text-black'>
          <div>
              <ul className=' flex gap-6 justify-center items-center text-2xl mb-4'>
                  <Link href={''} aria-label="Follow me on Instagram"
                      className="hover:text-white hover:scale-110 transition-all duration-300">
                      <FaInstagram />
                  </Link>
                  <Link href={''} aria-label="Lets be friends on Facebook"
                      className="hover:text-white hover:scale-110 transition-all duration-300">
                      <FaFacebook />
                  </Link>
                  <Link href={''} aria-label="Subscribe to my Youtube channel"
                      className="hover:text-white hover:scale-110 transition-all duration-300">
                      <FaYoutube />
                  </Link>
                  <Link href={''} aria-label="Follow me on Tiktok"
                      className="hover:text-white hover:scale-110 transition-all duration-300"> 
                      <FaTiktok />
                  </Link>
                  <Link href={''} aria-label="Message me on Whatsapp"
                      className="hover:text-white hover:scale-110 transition-all duration-300">
                      <FaWhatsapp />
                  </Link>
              </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center text-xl ">
              <Link href={'/negishut'} className="underline" >
                  הצהרת נגישות
              </Link>
              <Link href={''} className="underline">
                  מדיניות פרטיות
              </Link>
              <Link href={''} className="underline">
                  תנאי שימוש
              </Link>
          </div>
    </section>
  )
}

export default SocialBar