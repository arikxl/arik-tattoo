import React, { useRef } from 'react';
import Image from 'next/image';

interface WatermarkedImageProps {
    src: string;
}


const WatermarkedImage = ({ src }: WatermarkedImageProps) => {
    const watermarkText = `Arik - Tattoo\n050-6860169`;

    const canvasRef = useRef<HTMLCanvasElement>(null);




    const startDownloadProcess = (withWatermark: boolean) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.error("Canvas ref is not attached.");
            return;
        }

        const context = canvas.getContext('2d');
        if (!context) {
            console.error("Could not get 2D context from canvas.");
            return;
        }

        const image = new window.Image();
        image.crossOrigin = 'Anonymous';

        image.onload = () => {
            canvas.width = image.naturalWidth || image.width;
            canvas.height = image.naturalHeight || image.height;

            // 1. צייר את התמונה המקורית
            context.drawImage(image, 0, 0);

            // 2. הוסף סימן מים - רק אם נדרש!
            if (withWatermark) {
                const lines = watermarkText.split('\n');

                const fontSize = Math.floor(canvas.width / 10);
                const lineHeight = fontSize * 1.2;
                context.font = `bold ${fontSize}px Arial`;
                context.fillStyle = 'rgba(251, 191, 36, 0.8)';
                context.textAlign = 'center';
                context.textBaseline = 'middle';

                const x = canvas.width / 2;
                const y_center = canvas.height / 2;
                const totalLines = lines.length;

                lines.forEach((line, index) => {
                    const yOffset = (index - (totalLines - 1) / 2) * lineHeight;
                    const y = y_center + yOffset;
                    context.fillText(line, x, y);
                });
            } 

            const link = document.createElement('a');
            link.download = withWatermark ? 'arik-tattoo.png' : 'arik-tattoo-XL.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        image.onerror = () => {
            console.error("Failed to load image for canvas. Check CORS policy on the image server.");
        }

        image.src = src;
    };

    // --- טיפול בלחיצות ---

    // לחיצה בודדת (עם בדיקת מקש Q)
    const handleSingleClick = () => {
        // הורד עם סימן מים, אלא אם Q לחוץ
        startDownloadProcess(true);
    };

    // לחיצה כפולה (תמיד בלי סימן מים)
    const handleDoubleClick = () => {
        startDownloadProcess(false); // false = ללא סימן מים
    };

    return (
        <div className="relative inline-block">
            <Image
                src={src}
                alt='arikxl'
                width={500}
                height={500}
                className='rounded-xl shadow-lg object-cover w-full h-auto cursor-pointer'
                onClick={handleSingleClick} // שונה ל-handleSingleClick
                onDoubleClick={handleDoubleClick} // הוספנו onDoubleClick
                priority
            />

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          font-bold rounded-md text-amber-600/50 text-6xl w-full 
                          pointer-events-none whitespace-pre-line text-center">
                {watermarkText}
            </p>

            <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
    );
};

export default WatermarkedImage;

