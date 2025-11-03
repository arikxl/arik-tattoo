import Header from '@/components/Header'
import Logo from '@/components/Logo'
import React from 'react'

const PrivacyPage = () => {
    return (
        <>
            <div>
                <Header />
                <div className='w-1/2 sm:w-1/9 mx-auto py-2'>
                    <Logo />
                </div>
                <h1 className='text-2xl sm:text-6xl text-center '>מדיניות פרטיות</h1>
                <div className='w-8/10 mx-auto text-white my-6'>

                    <p className="mb-6 text-sm text-gray-200">
                        <strong>עדכון אחרון: 31/10/2025</strong>
                    </p>

                    <div className="space-y-4 ">
                        <p>
                            ברוכים הבאים לאתר הבית של Arik-Tattoo. אנו מכבדים את פרטיותכם
                            ומחויבים להגן עליה. מאחר והאתר שלנו נועד להצגת עבודות ויצירת קשר
                            ראשוני בלבד, מדיניות זו פשוטה ושקופה.
                        </p>

                        <h3 className="text-xl font-semibold pt-4">1. איזה מידע נאסף באתר?</h3>
                        <p>האתר עצמו <strong>אינו אוסף מידע אישי מזהה</strong> באופן פעיל.</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>יצירת קשר באמצעות WhatsApp:</strong> האתר מכיל כפתור המאפשר
                                לכם לשלוח אלי הודעה ישירה דרך אפליקציית WhatsApp. לחיצה על הכפתור
                                תעביר אתכם לאפליקציית WhatsApp. מרגע זה, כל התקשורת והמידע שתמסרו
                                לי (שמכם, מספר הטלפון, תוכן ההודעה וכו&apos;) מתנהלים ישירות מולי דרך
                                WhatsApp וכפופים גם למדיניות הפרטיות של WhatsApp. אני לא שומר את
                                פרטי ההתקשרות שלכם במאגר מידע באתר.
                            </li>
                            <li>
                                <strong>מידע טכני אנונימי (לא מזהה):</strong> בדומה לרוב האתרים,
                                השרתים של האתר עשויים לאסוף באופן אוטומטי מידע טכני שאינו מזהה אתכם
                                אישית, כגון כתובת IP, סוג הדפדפן ומערכת ההפעלה שלכם. מידע זה משמש
                                 למטרות סטטיסטיות, לאבטחת האתר ולשיפור חווית הגלישה.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold pt-4">
                            2. שימוש בקובצי &quot;עוגיות&quot; (Cookies)
                        </h3>
                        <p>
                            האתר עשוי להשתמש בקובצי &quot;עוגיות&quot; חיוניים לצורך תפעולו התקין. קבצים
                            אלו אינם משמשים למעקב אחר הפעילות שלכם או לאיסוף מידע אישי.
                            באפשרותכם לחסום שימוש ב&quot;עוגיות&quot; דרך הגדרות הדפדפן שלכם, אך הדבר עלול
                            להשפיע על תפקוד האתר.
                        </p>

                        <h3 className="text-xl font-semibold pt-4">3.    איזה שימוש יש במידע?</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>מידע טכני:</strong> לניתוח סטטיסטי אנונימי ולשיפור חווית המשתמש והאבטחה.</li>
                            <li><strong>מידע שתמסרו ב-WhatsApp:</strong> אך ורק כדי לתקשר אתכם, לענות על שאלותיכם, לתאם פגישות ייעוץ ולספק לכם את השירות שביקשתם.</li>
                        </ul>

                        <h3 className="text-xl font-semibold pt-4">4. מסירת מידע לצדדים שלישיים</h3>
                        <p>
                            אני לא מוכר, משכיר או מעביר מידע אישי כלשהו לצדדים שלישיים,
                            מכיוון שמידע כזה כמעט ואיננו נאסף דרך האתר.
                        </p>

                        <h3 className="text-xl font-semibold pt-4">5. קטינים</h3>
                        <p>
                            שירותי הקעקועים בסטודיו ניתנים <strong>לגילאי 16 ומעלה בלבד</strong>,
                            בהצגת תעודת זהות ובהתאם להוראות החוק. לא יבוצעו קעקועים מתחת לגיל 16,
                            גם לא באישור הורים.
                        </p>

                        <h3 className="text-xl font-semibold pt-4">6. זכויותיכם</h3>
                        <p>
                            מאחר שאינני שומר מאגר מידע של פניות מהאתר, אין לי מידע אישי עליכם
                            שמקורו באתר. כל המידע נמצא בהתכתבות הפרטית בינינו ב-WhatsApp, ושם
                            תוכלו לנהל אותו.
                        </p>

                        <h3 className="text-xl font-semibold pt-4">7. יצירת קשר</h3>
                        <p>
                            לכל שאלה בנושא פרטיות, ניתן לפנות אלי ישירות ב-WhatsApp.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPage