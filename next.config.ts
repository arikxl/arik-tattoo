import type { NextConfig } from "next";

const nextConfig: NextConfig = { // הוספתי את הטיפוס NextConfig גם פה לבהירות
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '', // השאר ריק אם אין פורט ספציפי
        pathname: '/**',
      },
      { // זה החלק שתוקן
        protocol: 'https', // בדרך כלל משתמשים ב-https עבור Cloudinary
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // או תצורת נתיב ספציפית אם יש לך
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', 
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;