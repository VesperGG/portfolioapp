import React from 'react';
//import icons
import time from '../img/time.svg';
import diagram from '../img/diagram.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';
import styled from 'styled-components';
//Styles
import {About,Description,Image,Hide} from '../styles'


const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality </span>services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt ="icon" src={time}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt ="icon"  src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt ="icon"  src={diagram}/>
                            <h3>Diafragma</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt ="icon"  src={money}/>
                            <h3>Money Affordabble</h3>
                        </div>
                        <p>Lorem Lorem Lorem Lorem</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img alt ="icon"  src={home2}/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}
p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}

`
const Cards = styled.div`
display:flex;
flex-wrap:wrap;
`
const Card = styled.div`
flex-basis:20rem;
.icon {
    display:flex;
    align-items:center;
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
}
`

export default ServicesSection;