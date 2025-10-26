import React from 'react'

interface SectionProps {
    color: string ;
}



const Section = ({color}: SectionProps) => {
  return (
      <section style={{backgroundColor:color}}
           className=' w-[100vw] mx-auto h-[90dvh] flex flex-col items-center justify-center'>
          SECTION
      </section>
  )
}

export default Section