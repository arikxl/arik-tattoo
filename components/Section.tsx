import React from 'react'

interface SectionProps {
    children: React.ReactNode;
}



const Section = ({ children}: SectionProps) => {
  return (
      <section 
           className=' w-screen mx-auto '>
          {children}
      </section>
  )
}

export default Section