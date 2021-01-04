import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className ="hro-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--Large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--Large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
