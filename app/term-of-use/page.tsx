// File: app/terms-of-use/page.jsx

import Header from '@/components/Header';
import Logo from '@/components/Logo';
import React from 'react';

const TermsOfUsePage = () => {
    return (


        <div>
            <Header />
            <div className='w-1/2 sm:w-1/9 mx-auto py-2'>
                <Logo />
            </div>
            <h1 className='text-2xl sm:text-6xl text-center '>תנאי שימוש</h1>
            <div className='w-8/10 mx-auto text-white my-6'>
                <p className="my-4 text-lg ">
                    עודכן לאחרונה: 1 בנובמבר 2025
                </p>

                <div className="space-y-8  leading-relaxed text-right" dir="rtl">
                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">1. כללי</h2>
                        <p><strong>1.1.</strong> ברוכים הבאים לאתר האינטרנט של סטודיו <strong>Arik-Tattoo</strong> (להלן: "האתר").</p>
                        <p><strong>1.2.</strong> השימוש והגלישה באתר, לרבות התכנים והשירותים המוצגים בו, כפופים לתנאי השימוש המפורטים במסמך זה (להלן: "התקנון").</p>
                        <p><strong>1.3.</strong> <strong className="text-red-600">עצם הגלישה והשימוש באתר מהווה הסכמה מצדך (להלן: "המשתמש") לכל תנאי התקנון.</strong> אם אינך מסכים לתנאים, כולם או חלקם, אינך רשאי לעשות שימוש באתר לכל מטרה.</p>
                        <p><strong>1.4.</strong> הנהלת האתר שומרת לעצמה את הזכות לעדכן את תנאי השימוש מעת לעת, לפי שיקול דעתה הבלעדי וללא צורך במסירת הודעה מראש.</p>
                        <p><strong>1.5.</strong> התקנון מנוסח בלשון זכר מטעמי נוחות בלבד, אך מתייחס לכל המגדרים.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">2. מטרת האתר והשירותים המוצעים</h2>
                        <p><strong>2.1.</strong> האתר משמש כאתר תדמית ופורטפוליו (תיק עבודות) דיגיטלי עבור סטודיו <strong>Arik-Tattoo</strong>. מטרתו להציג את עבודות האמנים, לספק מידע על הסטודיו ודרכי יצירת קשר.</p>
                        <p><strong>2.2.</strong> <strong>יודגש כי האתר אינו מאפשר קביעת תורים או ביצוע תשלומים מכל סוג שהוא.</strong> יצירת קשר עם הסטודיו דרך האתר נועדה לקבלת מידע ראשוני בלבד.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">3. הדמיית קעקועים (Gemini AI)</h2>
                        <p><strong>3.1.</strong> האתר מציע כלי ליצירת הדמיות ראשוניות של קעקועים באמצעות טכנולוגיית בינה מלאכותית (AI), כדוגמת Gemini (להלן: "הדמיית קעקוע").</p>
                        <p><strong>3.2.</strong> <strong className="text-red-600">מובהר בזאת כי הדמיית הקעקוע נועדה למטרות השראה, בידור וכיף בלבד.</strong> התמונות המופקות הן הדמיות ממוחשבות ואינן מהוות התחייבות כלשהי מצד הסטודיו או האמנים לתוצאה הסופית, לעיצוב, לצבעים או לביצוע.</p>
                        <p><strong>3.3.</strong> הנהלת האתר אינה נושאת באחריות כלשהי לתוצאות המתקבלות מהדמיית הקעקוע, לרמת הדיוק שלהן או להתאמתן לרעיון המקורי של המשתמש.</p>
                        <p><strong>3.4.</strong> העיצוב הסופי של כל קעקוע יבוצע באופן אישי ומקצועי בסטודיו, בתיאום מלא בין הלקוח לאמן, ועשוי להיות שונה מההדמיה שהופקה באתר.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">4. קניין רוחני וזכויות יוצרים</h2>
                        <p><strong>4.1.</strong> כל זכויות היוצרים והקניין הרוחני באתר, לרבות עיצוב האתר, קוד המקור, תמונות הקעקועים, סקיצות, לוגואים, טקסטים וכל חומר אחר המוצג בו, הינם רכושו הבלעדי של סטודיו <strong>Arik-Tattoo</strong> ו/או של צדדים שלישיים שהעניקו לסטודיו הרשאה להשתמש בהם.</p>
                        <p><strong>4.2.</strong> אין להעתיק, לשכפל, להפיץ, לפרסם או להשתמש בכל דרך אחרת בתכנים המופיעים באתר, ללא קבלת אישור מפורש מראש ובכתב מהנהלת האתר.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">5. הגבלת אחריות</h2>
                        <p><strong>5.1.</strong> המידע באתר מוצג "כפי שהוא" (As Is). הנהלת האתר אינה מתחייבת כי המידע יהיה מדויק, שלם או נקי משגיאות.</p>
                        <p><strong>5.2.</strong> שירותי הקעקועים בסטודיו מיועדים ל<strong>בני 18 ומעלה בלבד</strong>. הסטודיו שומר לעצמו את הזכות לדרוש הצגת תעודה מזהה.</p>
                        <p><strong>5.3.</strong> האתר עשוי להכיל קישורים (לינקים) לרשתות חברתיות ולאתרים חיצוניים. הנהלת האתר אינה אחראית לתוכן, לפרטיות או לפעילות של אתרים אלו. המעבר אליהם והשימוש בהם הינם באחריותו הבלעדית של המשתמש.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">6. דין וסמכות שיפוט</h2>
                        <p><strong>6.1.</strong> על תקנון זה ועל השימוש באתר יחולו <strong>דיני מדינת ישראל בלבד</strong>.</p>
                        <p><strong>6.2.</strong> סמכות השיפוט הבלעדית בכל סכסוך או מחלוקת הנוגעים לאתר ולשימוש בו נתונה לבתי המשפט המוסמכים ב<strong>מחוז באר שבע</strong>.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">7. יצירת קשר</h2>
                        <p>בכל שאלה או פנייה בנוגע לתנאי שימוש אלו, ניתן ליצור קשר בכתובת הדוא"ל: <a href="mailto:arikxl@gmail.com" className="text-blue-600 hover:underline">arikxl@gmail.com</a>.</p>
                    </section>
                </div>


            </div>
        </div>
    );
};

export default TermsOfUsePage;