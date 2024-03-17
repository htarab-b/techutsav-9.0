import React, { useRef, useEffect } from 'react';
import heroVideoMp4 from '../../assets/tu-bg.mp4';
import heroVideoWebm from '../../assets/tu-bg.webm';
import posterImage from '../../assets/tu-bg.jpg';
import '../../css/Header.css';

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin around the viewport
            threshold: 0.1 // When 10% of the video is visible, trigger loading
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Load the video when it becomes visible
                    entry.target.load();
                    observer.unobserve(entry.target); // Stop observing after loading
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // Start observing the video element
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); // Clean up observer on unmount
            }
        };
    }, []);

    return (
        <div className='hero__video_bg'>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className='hero__video_loop'
                poster={posterImage} >

                <source src={heroVideoMp4} type='video/mp4' />
                <source src={heroVideoWebm} type='video/webm' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default HeroSection;
