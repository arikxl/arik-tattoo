// app/api/generate-image/route.ts

import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_KEY,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image",
            contents: `Create a unique tattoo design based on this idea: ${prompt}.
            The tattoo style must be clean, high-contrast and suitable for body ink.
            Prefer black and white with detailed line art and shading. Avoid text and backgrounds.
            `,
        });
        console.log(response)
            
        const parts = response.candidates?.[0]?.content?.parts ?? [];

        // 'parts' הוא עכשיו או המערך שחיפשת, או מערך ריק.
        // הלולאה בטוחה לחלוטין.
        for (const part of parts) {
            if (part.inlineData) {
                // במקום לשמור לקובץ, אנחנו מחזירים את המידע כ-base64 לדפדפן
                const imageData = part.inlineData.data;
                return NextResponse.json({ imageData });
            }
        }


        // אם לא נמצאה תמונה בתשובה
        return NextResponse.json(
            { error: "Image data not found in response" },
            { status: 500 }
        );

    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json(
            { error: "Failed to generate image" },
            { status: 500 }
        );
    }
}