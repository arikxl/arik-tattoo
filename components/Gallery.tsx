'use client'
import { useState, useEffect } from 'react';
import { getImagesByCategory } from '@/app/data/galleryData';
import type { GalleryImage } from '@/app/data/galleryData';
import Image from 'next/image';
import React from 'react';

interface GalleryProps {
    category: string;
}

interface PixabayImage {
    id: number;
    webformatURL: string;
    largeImageURL: string; // <-- המאפיין שאתה רוצה
    tags: string;
    // אתה יכול להוסיף כאן עוד מאפיינים מה-API אם תצטרך
    // (למשל: user, likes, downloads)
}

function Gallery({ category }: GalleryProps) {


    const imagesToShow: GalleryImage[] = getImagesByCategory(category);
    const [images, setImages] = useState<PixabayImage[]>([]);
    const [searchTerm, setSearchTerm] = useState(category === 'all' ? 'Tattoos piercing' : category);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchImages(searchTerm);
    }, [searchTerm]);

    const fetchImages = async (query: string) => {
        setLoading(true);
        try {
            // 1. פונים ל-API הפנימי שלנו (לא ל-Pixabay ישירות)
            const res = await fetch(`/api/images?q=${encodeURIComponent(query)}`);

            if (!res.ok) {
                throw new Error(`Error: ${res.statusText}`);
            }

            const data = await res.json();
            setImages(data.hits || []);

        } catch (error) {
            console.error("Failed to fetch images", error);
        } finally {
            setLoading(false);
        }
    };

    console.log(images)

    return (
        <div className='my-6'>
            {loading && <p>Loading...</p>}
            {images && images.length > 0 ? (
                <div className="image-grid">
                    {images?.map((image, index) => {

                        const itemClass = index % 5 === 0
                            ? "grid-item grid-item-large"
                            : "grid-item";

                        return (
                            // index < 19 && (

                                <div key={image?.id} className={itemClass}>
                                    <Image
                                        src={image?.largeImageURL}
                                        alt={category}
                                        fill={true}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            // )
                        );
                    })}
                </div>
            ) : (
                <p>לא נמצאו תמונות בקטגוריה זו.</p>
            )}
        </div>
    );
}

export default Gallery;