import React from 'react';

const Map = () => {

    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4823.475731237574!2d34.767916248900185!3d31.25638405970468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150265def3f474b7%3A0x5756e7db7f21edb6!2sRahvat%20HaShala%2015%2C%20Beersheba!5e0!3m2!1sen!2sil!4v1761943974332!5m2!1sen!2sil";

    return (

        <section
            className='w-screen py-6'>
            
            <iframe
                src={mapSrc}
                title='מפה'
                width="80%" 
                height="400"
                style={{ border: 0 }} 
                allowFullScreen={true}   
                loading="lazy"
                className='mx-auto'
                referrerPolicy="no-referrer-when-downgrade" 
            >
            </iframe>
        </section>
    );
}

export default Map;
