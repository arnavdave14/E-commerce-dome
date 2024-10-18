import React from 'react'
import './HeroStyle.js'
import './Hero.css'
import {HeroBody , HeroBodyLeft , HeroBodyRight , Handicon , HeroLatestbtn , HeroImage  } from './HeroStyle.js'
import { HiArrowRight } from "react-icons/hi";
import hand_icon from "../Assets/hand_icon.png"; 
import hero_image from "../Assets/hero_image.png"; 
import { Link } from "react-router-dom";

const Hero = () => {
return (
    <React.Fragment>
        <HeroBody>
            <HeroBodyLeft>
                <h2>NEW ARIVALS ONLY</h2>
                <div>
                    <Handicon>
                        <p>new</p>
                        <img src={hand_icon} width={50} height={50} alt='Hand Icon' />
                    </Handicon>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <HeroLatestbtn>
                    <p>Latest Collection</p>
                    <HiArrowRight size={26}/>
                </HeroLatestbtn>    
            </HeroBodyLeft>
            <HeroBodyRight>
                <HeroImage src={hero_image} alt="hero_image" />
            </HeroBodyRight>
        </HeroBody>
    </React.Fragment>
)
}

export default Hero