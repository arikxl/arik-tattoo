import React from 'react'

interface SectionProps {
    color: string | null;
    children: React.ReactNode;
}



const Section = ({color, children}: SectionProps) => {
  return (
      <section style={{backgroundColor:color||''}}
           className=' w-[100vw] mx-auto h-[70dvh] '>
          {children}
      </section>
  )
}

export default Section