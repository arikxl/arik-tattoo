// components/WatermarkedImageDownloader.tsx

import React, { useRef } from 'react';

// 1. הגדרת ממשק (interface) עבור ה-props שהקומפוננטה מקבלת
interface WatermarkedImageDownloaderProps {
    imageUrl: string;
    watermarkText: string;
}

const WatermarkedImageDownloader = ({ imageUrl, watermarkText }: WatermarkedImageDownloaderProps) => {
    // 2. הגדרת הטיפוס של הרפרנס - הוא יצביע על אלמנט קנבס
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const image = new Image();
        image.crossOrigin = 'Anonymous';

        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;

            context.drawImage(image, 0, 0);

            const lines = watermarkText.split('\n');

            const fontSize = Math.floor(image.width / 8);
            const lineHeight = fontSize * 1.2;
            context.font = `bold ${fontSize}px Arial`;
            context.fillStyle = 'rgba(255, 255, 255, 0.7)';
            context.textAlign = 'center';
            context.textBaseline = 'middle';

            const x = canvas.width / 2;
            const y_center = canvas.height / 2;
            const totalLines = lines.length;

            lines.forEach((line, index) => {
                // חישוב הסטה (offset) אנכית מהמרכז עבור כל שורה
                const yOffset = (index - (totalLines - 1) / 2) * lineHeight;
                const y = y_center + yOffset;

                context.fillText(line, x, y);
            });

            const link = document.createElement('a');
            link.download = 'arik-tattoo.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        image.src = imageUrl;
    };

    return (
        <div style={{backgroundColor:'red'}}>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <button onClick={handleDownload}>
                Download
            </button>
            
        </div>
    );
};

export default WatermarkedImageDownloader;