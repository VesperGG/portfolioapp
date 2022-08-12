import React from 'react';
//import icons
import time from '../img/time.svg';
import diagram from '../img/diagram.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';



const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality </span>services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt ="icon" src={time}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt ="icon"  src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt ="icon"  src={diagram}/>
                            <h3>Diafragma</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt ="icon"  src={money}/>
                            <h3>Money Affordabble</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img alt ="icon"  src={home2}/>
            </div>
        </div>
    )
}

export default ServicesSection;