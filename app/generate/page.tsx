/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'


import Header from '@/components/Header'
import IdeaForm from '@/components/IdeaForm'
import ImgPreview from '@/components/ImgPreview'
import TattooLoader from '@/components/TattooLoader'
import React, { useState } from 'react'
import { FaLanguage, FaDownload } from 'react-icons/fa';

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

      <h1 className='py-6 text-2xl sm:text-6xl text-center '>
         הדמיית סקיצות - AI
      </h1>

      <div className='relative z-10 flex flex-1 flex-col md:flex-row '>

        <div className='flex-1 px-6 md:p-12 md:w-1/2 '>
          <p className="text-sm md:text-base leading-relaxed">
            <strong>חשוב לדעת:</strong> הכלי הזה נועד למשחק, בידור וקבלת השראה בלבד. זוהי הדמיה שנוצרת על ידי בינה מלאכותית (Gemini) ואינה מהווה סקיצה סופית ומחייבת.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-3">
            התוצאה היא רעיון התחלתי נהדר, אבל אני לא יכול להתחייב שניתן יהיה לקעקע אותה בדיוק כפי שהיא במציאות. את הסקיצה האמיתית, שתתאים לגוף שלך ולסגנון שלי, אכין לך באופן אישי בסטודיו.
          </p>

          <div className="space-y-4 my-4">

            {/* טיפ 1 - שימוש ב-flex ליישור אייקון וטקסט */}
            <div className="flex items-start gap-x-3">
              <FaLanguage className="text-amber-400 text-xl md:text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-neutral-100">טיפ לתוצאה טובה</h4>
                <p className="text-sm md:text-base">
                  לקבלת תוצאות מדויקות ומגוונות יותר, מומלץ לכתוב את תיאור הרעיון (הפרומפט) <strong>באנגלית</strong>.
                </p>
              </div>
            </div>

            {/* טיפ 2 */}
            <div className="flex items-start gap-x-3">
              <FaDownload className="text-amber-400 text-xl md:text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-neutral-100">אהבת את הרעיון?</h4>
                <p className="text-sm md:text-base">
                  לאחר שהתמונה נוצרת, אפשר <strong>ללחוץ עליה</strong> כדי להוריד אותה ישירות למכשיר.
                </p>
              </div>
            </div>

          </div>


          <IdeaForm handleGenerate={handleGenerate} />
        </div>


        <div className=' flex-1 flex items-center justify-center p-6 w-full md:p-12   '>
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