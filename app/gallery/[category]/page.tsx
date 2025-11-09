
// import { getImagesByCategory } from "@/app/data/galleryData";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeCaseShow from "@/components/HomeCaseShow";
// import Image from 'next/image';





const getGalleryTitle = (slug: string) => {
    if (slug === 'all') return 'הגלריה המלאה';
    if (slug === 'tattoos') return 'קעקועים';
    if (slug === 'piercing') return 'פירסינג';
    if (slug === 'large-tattoos') return 'קעקועים גדולים';
    if (slug === 'small-tattoos') return 'קעקועים קטנים';
    if (slug === 'sleeve-tattoos') return 'שרוולים';

    return `גלריית ${slug.replace('-', ' ')}`;
};



export default function GalleryPage({ params }: { params: { category: string } }) {

    const categorySlug = params.category;
    // const imagesToShow = getImagesByCategory(categorySlug);

    const pageTitle = getGalleryTitle(categorySlug);



    return (
        <div className="">
            <Header />
            <h1 className='py-6 text-2xl sm:text-6xl text-center'>{pageTitle} </h1>
            <div className='w-8/10 mx-auto '>



                <Gallery category={categorySlug} />


                {/* {imagesToShow.length > 0 ? (
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
            )} */}


                <HomeCaseShow />
            </div>
        </div>
    );
}


export async function generateMetadata({ params }: { params: { category: string } }) {
    const title = getGalleryTitle(params.category);
    return {
        title
    };
}