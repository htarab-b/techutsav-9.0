import React from 'react'
import hyperloopvid from '../../assets/Comp 1.mp4'
import '../../css/Header.css'

const HeroSection = () => {
    return (
        <>
            
            <div className='hero__video_bg'>
                <video autoPlay loop muted className='hero__video_loop'>
                    <source src={hyperloopvid} type='video/mp4' />
                </video>
            </div>

        </>
    )
}

export default HeroSection

