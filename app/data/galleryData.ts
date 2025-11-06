


export interface GalleryImage {
    id: number;
    src: string; 
    alt: string;
    tags: string[]; 

}

export const allImages: GalleryImage[] = [
    { id: 1, src: "/images/tattoos/sleeve-1.jpg",  alt: "שרוול מדהים", tags: ["tattoos", "sleeve"] },
    { id: 2, src: "https://res.cloudinary.com/arikxl/image/upload/v1761831509/Ella2023/dewkxpxg1tlukvwm7dtb.jpg",  alt: "קעקוע קטן", tags: ["tattoos", "small"] },
    { id: 3, src: "/images/tattoos/large-1.jpg", alt: "קעקוע גב גדול", tags: ["tattoos", "large"] },
    { id: 4, src: "https://res.cloudinary.com/arikxl/image/upload/v1761831509/Ella2023/dewkxpxg1tlukvwm7dtb.jpg", alt: "עוד קעקוע קטן", tags: ["tattoos", "small"] },
    { id: 5, src: "/images/tattoos/sleeve-2.jpg",  alt: "שרוול נוסף", tags: ["tattoos", "sleeve"] },

    { id: 6, src: "/images/piercing/piercing-1.jpg",  alt: "פירסינג באף", tags: ["piercing"] },
    { id: 7, src: "/images/piercing/piercing-2.jpg",  alt: "פירסינג באוזן", tags: ["piercing"] },
];



export const getImagesByCategory = (categoryTag: string): GalleryImage[] => {
  
    if (categoryTag === 'all') {
        return allImages;
    }
    if (categoryTag === 'tattoos') {
        return allImages.filter(image => image.tags.includes('tattoos'));
    }

    return allImages.filter(image => image.tags.includes(categoryTag));
};