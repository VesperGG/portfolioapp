import React from 'react';
import home1 from '../img/home1.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography that you have. We happy to help.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera (HOME)" srcset="" />
            </div>
        </div>
    )
}

export default AboutSection;