import { getImagesByCategory } from "@/app/data/galleryData";
import Header from "@/components/Header";
import Image from 'next/image'; 


const getGalleryTitle = (slug: string) => {
    if (slug === 'all') return 'הגלריה המלאה';
    if (slug === 'tattoos') return 'גלריית קעקועים';
    if (slug === 'piercing') return 'גלריית פירסינג';
    if (slug === 'large') return 'קעקועים גדולים';
    if (slug === 'small') return 'קעקועים קטנים';
    if (slug === 'sleeve') return 'קעקועים שרוול';

    return `גלריית ${slug.replace('-', ' ')}`;
};



// הקומפוננטה מקבלת 'params' - זה מגיע מהשם של התיקייה [category]
export default function GalleryPage({ params }: { params: { category: string } }) {

    const categorySlug = params.category; 
    const imagesToShow = getImagesByCategory(categorySlug);

    const pageTitle = getGalleryTitle(categorySlug);


    return (
        <div>
            <Header />
            <h1>{pageTitle}</h1>

            {imagesToShow.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {imagesToShow.map(image => (
                        <div key={image.id} style={{ width: '300px' }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={300}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>לא נמצאו תמונות בקטגוריה זו.</p>
            )}
        </div>
    );
}


export async function generateMetadata({ params }: { params: { category: string } }) {
    const title = getGalleryTitle(params.category);
    return {
        title
    };
}