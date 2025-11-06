// הגדרת טיפוס (type) לתמונה
export interface GalleryImage {
    id: number;
    src: string; // הנתיב לקובץ התמונה (בתוך /public)
    alt: string;
    tags: string[]; // מערך של תגיות - זה המפתח!
}

// "בסיס הנתונים" של כל התמונות
export const allImages: GalleryImage[] = [
    // --- קעקועים ---
    { id: 1, src: "/images/tattoos/sleeve-1.jpg", alt: "שרוול מדהים", tags: ["tattoos", "sleeve"] },
    { id: 2, src: "/images/tattoos/small-1.jpg", alt: "קעקוע קטן", tags: ["tattoos", "small"] },
    { id: 3, src: "/images/tattoos/large-1.jpg", alt: "קעקוע גב גדול", tags: ["tattoos", "large"] },
    { id: 4, src: "/images/tattoos/small-2.jpg", alt: "עוד קעקוע קטן", tags: ["tattoos", "small"] },
    { id: 5, src: "/images/tattoos/sleeve-2.jpg", alt: "שרוול נוסף", tags: ["tattoos", "sleeve"] },

    // --- פירסינג ---
    { id: 6, src: "/images/piercing/piercing-1.jpg", alt: "פירסינג באף", tags: ["piercing"] },
    { id: 7, src: "/images/piercing/piercing-2.jpg", alt: "פירסינג באוזן", tags: ["piercing"] },
];

// פונקציית עזר שתסנן עבורנו את התמונות לפי תגית
export const getImagesByCategory = (categoryTag: string): GalleryImage[] => {
  
    if (categoryTag === 'all') {
        return allImages;
    }
    // אם התגית היא "tattoos", החזר הכל (גדולים, קטנים, שרוולים)
    if (categoryTag === 'tattoos') {
        return allImages.filter(image => image.tags.includes('tattoos'));
    }

    // לכל תגית אחרת (piercing, large-tattoos וכו'), החזר התאמה מדויקת
    return allImages.filter(image => image.tags.includes(categoryTag));
};