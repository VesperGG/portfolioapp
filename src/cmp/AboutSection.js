import React from 'react';
import home1 from '../img/home1.jpg'
//Styled
import {About,Description,Image,Hide} from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography that you have. We happy to help.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera (HOME)"/>
            </Image>
        </About>
    )
}


export default AboutSection;