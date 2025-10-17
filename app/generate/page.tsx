/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'


import IdeaForm from '@/components/IdeaForm'
import ImgPreview from '@/components/ImgPreview'
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
    <div>
      <IdeaForm handleGenerate={handleGenerate} />

      {isLoading
        ? (<mark>LOADING...</mark>)
        : (<ImgPreview img={img} error={error} />)
      }


    </div>
  )
}

export default GenerateTattooPage