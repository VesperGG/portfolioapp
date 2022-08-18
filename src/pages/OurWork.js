import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import greenbook from '../img/greenbook.png';
import dota2 from '../img/dota2.png';
import treasurepl from '../img/treasurepl.jpg';

const OurWork = () => {
    return(
        <Work>
       =    <Movie>
           <h2>The Gren Book</h2>
           <div className="line"></div>
           <Link to="/greenbook">
            <img src={greenbook} alt="greenbook"/>
            </Link>
            </Movie>
    
            <Movie>
            <h2>Dota2</h2>
            <div className="line"></div>
            <Link to="/dota2">
            <img src={dota2} alt="dota2"/>
            </Link>
            </Movie>

            <Movie>
            <h2>Treasure Planet</h2>
            <div className="line"></div>
            <Link to="/treasureplanet">
            <img src={treasurepl} alt="treasure planet"/>
            </Link> 
            </Movie>
        </Work>
    )
}

const Work = styled.div`
min-height: 100vh;
overflow:hidden;
padding: 5rem 10rem;

h2 {
    padding: 1rem 0rem;
}
`

const Movie = styled.div`
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
}
img {
    width: 100%;
    height: 70vh;
    object-fit:cover;
}

`

export default OurWork;