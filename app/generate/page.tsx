/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'


import Header from '@/components/Header'
import IdeaForm from '@/components/IdeaForm'
import ImgPreview from '@/components/ImgPreview'
import TattooLoader from '@/components/TattooLoader'
import React, { useState } from 'react'

const GenerateTattooPage = () => {


  const [img, setImg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  const handleGenerate = async (idea: string) => {
    setIsLoading(true);
    setError('');
    setImg(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: idea }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      setImg(data.imageData);


    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className=''>
      <Header />

      <div className='relative z-10 flex flex-1 flex-col md:flex-row '>
        <div className='flex-1 p-6 md:p-12 md:w-1/2 '>
          <IdeaForm handleGenerate={handleGenerate} />
        </div>


        <div className='flex-1 flex items-center justify-center p-6 w-full md:p-12   '>
          {isLoading
            ? (<TattooLoader />)
            : (<ImgPreview img={img} error={error} />)
          }
        
        </div>
      </div>





    </div>
  )
}

export default GenerateTattooPage