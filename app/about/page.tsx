import WhatsappHeaderButton from '@/components/buttons/WhatsappHeaderButton'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            <div className='relative flex-1 bg-no-repeat bg-cover bg-bottom-right'
                style={{ backgroundImage: 'url(https://res.cloudinary.com/arikxl/image/upload/v1762159888/Ella2023/ekx7dl9cqysri12iid8e.webp)' }}
            >

                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className='relative z-10 flex flex-1 flex-col md:flex-row '>
                    <div className='flex-1 p-6 md:p-12 md:w-1/2 bg-linear-to-b from-black/50 to-transparent'>
                        <h1 className='text-amber-400 text-3xl md:text-5xl font-bold mb-6'>ברוכים הבאים, אני אריק.</h1>
                        <p className='mb-6 text-gray-100 text-xl font-semibold  '>
                            מאז שאני זוכר את עצמי, אמנות הייתה הדרך שלי לבטא את העולם. המסע שלי התחיל עם עיפרון ונייר, חקירה של קווים, צורות וסיפורים שניתן לספר ללא מילים. עם השנים, התשוקה הזו הובילה אותי באופן טבעי אל אמנות הקעקוע - המקום שבו יצירה פוגשת משמעות אישית והופכת לחלק ממך, לנצח.

                            הסטודיו הפרטי שלי בבאר שבע הוא המרחב שלי ליצור עבורכם. זהו מקום אינטימי ורגוע, שבו כל הרעיונות שלכם מקבלים קשב מלא. אני מאמין שתהליך הקעקוע הוא שיתוף פעולה. אנחנו בונים יחד את הסקיצה, מדייקים את הפרטים, ומוודאים שהתוצאה הסופית תהיה בדיוק מה שחלמתם עליו, ואף יותר.

                            הסגנון שלי מתמקד בקווים נקיים ועדינים, Blackwork ואני תמיד שמח לאתגר את עצמי עם רעיונות חדשים.

                            אני מזמין אתכם להסתכל בתיק העבודות שלי וליצור איתי קשר. בואו נהפוך את הסיפור שלכם ליצירת אמנות.
                        </p>

                        <div className='flex justify-center'>
                            <WhatsappHeaderButton />
                        </div>
                    </div>

                    <div className='flex-1 flex justify-center items-center pt-24 relative md:w-1/2 '>
                        <div className='w-2/3 '>
                            <Image alt={'Arik Alexandrov'}
                                src={'https://res.cloudinary.com/arikxl/image/upload/v1762160122/Ella2023/k9tcovi8nubkjctpiio9.png'}
                                width={1000}
                                height={1000}
                                className='shadow-xl rounded-xl -rotate-12 shadow-slate-700'
                            />
                        </div>


                        <div className='absolute w-48 top-4 left-4 md:w-64 md:top-24 md:left-96'>
                            <Logo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage