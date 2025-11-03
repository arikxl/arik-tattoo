
import Logo from './Logo';
import WatermarkedImage from './WatermarkedImage';

interface ImgPreviewProps {
    img: string | null;
    error: string | null;
}

const ImgPreview = ({ img, error }: ImgPreviewProps) => {


    if (error) return <p className='text-red-500'>{error}</p>

    if (!img) return <div className=' w-full  md:w-1/2'>
       <Logo/>
    </div>

    return (
        <div className='rounded-2xl   w-full md:w-8/10 mx-auto'>
            <WatermarkedImage src={`data:image/png;base64,${img}`} />
        </div>

    )
}

export default ImgPreview