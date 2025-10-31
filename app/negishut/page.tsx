import Header from '@/components/Header'
import Logo from '@/components/Logo'
import React from 'react'

const NegishutPage = () => {



    return (
        <div>
            <Header />
            <div className='w-9/10 sm:w-1/9 mx-auto py-2'>
                <Logo />
            </div>
            <h1 className='text-2xl sm:text-6xl text-center'>הצהרת נגישות</h1>
            <div className='w-8/10 mx-auto '>
                <p className='my-4 text-2xl'>
                    אני מאמין במתן הזדמנות שווה לכל אדם, ולכן פעלתי רבות כדי להנגיש אתר זה עבור אנשים עם מוגבלות. מטרתי היא לאפשר לכל הגולשים חווית שימוש נוחה, ברורה ופשוטה. אני מחויב להנגשת האתר ועושה מאמצים מתמשכים לשפר את הנגישות, כחלק מתפיסת השירות שלי ובהתאם לדרישות החוק.
                </p>

                <div className='mb-6'>
                    <h2 className="text-2xl font-bold mb-1 text-gray-200">
                        התאמות שבוצעו באתר:
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>האתר מותאם לדפדפנים הנפוצים.</li>
                        <li>האתר מותאם לשימוש בטלפון הסלולרי (רספונסיבי).</li>
                        <li>התכנים באתר כתובים בשפה פשוטה וברורה.</li>
                        <li>ניתן לנווט באתר באמצעות המקלדת בלבד.</li>
                        <li>האתר מותאם לשימוש בטכנולוגיות מסייעות כגון תוכנות להקראת מסך.</li>
                    </ul>
                </div>


                <div className='mb-6'>
                    <h2 className="text-2xl font-bold mb-1 text-gray-200">
                        דרכי פנייה לבקשות והצעות לשיפור:
                    </h2>
                    <p>
                        אני ממשיך במאמצים לשפר את נגישות האתר כחלק ממחויבותי לאפשר שימוש
                        בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות. אם נתקלת בבעיה או
                        בתקלה כלשהי בנושא הנגישות, אשמח לקבל ממך משוב.
                    </p>
                </div>


                <section className="space-y-4 text-white">
                    <h2 className="text-2xl font-bold mb-3 text-gray-200">
                        הסדרי נגישות מבנה
                    </h2>

                    <p className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md">
                        הסטודיו הוא סטודיו פרטי הממוקם בדירת מגורים בבניין משותף. ככזה, אין
                        באפשרותי לספק את כל התאמות הנגישות הנדרשות במבני ציבור. עם זאת,
                        חשוב לי לתת את מלוא המידע על תנאי הגישה למקום. אני ממליץ בחום
                        ללקוחות עם צרכי נגישות ליצור עמי קשר טלפוני לפני קביעת תור, כדי
                        שנוכל לוודא יחד שהביקור יתאפשר בצורה הנוחה והבטוחה ביותר.
                    </p>

                    <ul className="list-none space-y-3">
                        <li>
                            <strong>חניה:</strong> חניית הבניין מיועדת לדיירים בלבד. ניתן לחנות
                            ברחובות הסמוכים על בסיס מקום פנוי.
                        </li>
                        <li>
                            <strong>גישה לבניין:</strong> הגישה מהמדרכה לכניסה לבניין כוללת 4
                            מדרגות.
                        </li>
                        <li>
                            <strong>גישה לדירה:</strong> הסטודיו ממוקם בקומה השביעית. יש מעלית
                            בבניין.
                        </li>
                        <li>
                            <strong>נגישות פנים:</strong> המעברים בתוך הדירה הם ברוחב סטנדרטי.
                            חדר השירותים אינו מונגש ואינו מותאם לכיסאות גלגלים.
                        </li>
                    </ul>

                    <p className='mb-6'>
                        לכל שאלה או צורך בהתייעצות, אני זמין בטלפון{' '}
                        <a href={`tel:972506860169`} className="font-bold text-blue-600 hover:underline">
                            050-6860169
                        </a>
                        .
                    </p>
                </section>


                <div className='mb-6'>
                    <h2 className="text-2xl font-bold mb-1 text-gray-200">
                        פרטי רכז הנגישות:
                    </h2>
                    <div className="space-y-1">
                        <p>
                            <strong>שם:</strong> אריק אלכסנדרוב
                        </p>
                        <p>
                            <strong>טלפון:</strong> <a href={`tel:972506860169`} className="text-blue-600 hover:underline">050-6860169</a>
                        </p>
                        <p>
                            <strong>דוא"ל:</strong> <a href={`mailto:arikxl@gmail.com`} className="text-blue-600 hover:underline">arikxl@gmail.com</a>
                        </p>
                    </div>
                </div>


                <div className='mb-6'>
                    <p className="text-sm text-gray-200">
                        הצהרת הנגישות עודכנה לאחרונה בתאריך: 31/10/2025
                    </p>
                </div>
            </div>
        </div>

    )
}

export default NegishutPage