import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    // 1. קבלת פרמטר החיפוש (query) מהבקשה של הלקוח
    // לדוגמה: /api/images?q=cats
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    // בדיקה אם הלקוח בכלל שלח מילת חיפוש
    if (!query) {
        return NextResponse.json(
            { error: 'Search query (q) is required' },
            { status: 400 } // 400 = Bad Request
        );
    }

    // 2. קבלת מפתח ה-API הסודי ממשתני הסביבה (process.env)
    // המפתח הזה זמין רק בשרת.
    const API_KEY = process.env.PIXABAY_API_KEY;

    // בדיקה אם המפתח הוגדר בקובץ .env.local
    if (!API_KEY) {
        console.error('PIXABAY_API_KEY is not set in .env.local');
        return NextResponse.json(
            { error: 'Server configuration error' },
            { status: 500 } // 500 = Internal Server Error
        );
    }

    // 3. הרכבת ה-URL המלא לקריאה ל-Pixabay
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
        // 4. ביצוע קריאת ה-fetch האמיתית ל-Pixabay (מהשרת שלנו)
        const pixabayResponse = await fetch(URL, {
            next: { revalidate: 3600 } // אופציונלי: שמירת התוצאות ב-Cache לשעה
        });

        // 5. בדיקה אם הקריאה ל-Pixabay הצליחה
        if (!pixabayResponse.ok) {
            // אם Pixabay החזיר שגיאה (למשל מפתח לא נכון)
            return NextResponse.json(
                { error: `Error from Pixabay: ${pixabayResponse.statusText}` },
                { status: pixabayResponse.status }
            );
        }

        // 6. קבלת הנתונים בפורמט JSON
        const data = await pixabayResponse.json();

        // 7. החזרת הנתונים שקיבלנו מ-Pixabay חזרה ללקוח
        return NextResponse.json(data);

    } catch (error) {
        // טיפול בשגיאות רשת או שגיאות כלליות
        console.error('[API_ROUTE_ERROR]', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}