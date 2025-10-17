'use client'


import IdeaForm from '@/components/IdeaForm'
import ImgPreview from '@/components/ImgPreview'
import React from 'react'

const GenerateTattooPage = () => {

  const handleGenerate = (prompt) => {
    console.log(prompt)
    
  }


  return (
    <div>
      <IdeaForm handleGenerate={handleGenerate} />
      <ImgPreview />
      
    </div>
  )
}

export default GenerateTattooPage