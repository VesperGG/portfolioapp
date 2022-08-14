import React from 'react';
import styled from 'styled-components';
import {About,Description,Image,Hide} from '../styles'
const FaqSection = () => {
    return (
        <Faq>
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>Hwo do i start?</h4>
                <div className="answer">
                    <p>Answer by me my brother</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio mollitia sapiente quis qui quaerat. A corporis, officia exercitationem ab ea aut nulla in omnis corrupti. Nisi officiis asperiores officia?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Diff payments ?</h4>
                <div className="answer">
                    <p>Answer by me my brother</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio mollitia sapiente quis qui quaerat. A corporis, officia exercitationem ab ea aut nulla in omnis corrupti. Nisi officiis asperiores officia?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What product do you offer?</h4>
                <div className="answer">
                    <p>Answer by me my brother</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio mollitia sapiente quis qui quaerat. A corporis, officia exercitationem ab ea aut nulla in omnis corrupti. Nisi officiis asperiores officia?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>From what do i start?</h4>
                <div className="answer">
                    <p>Answer by me my brother</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio mollitia sapiente quis qui quaerat. A corporis, officia exercitationem ab ea aut nulla in omnis corrupti. Nisi officiis asperiores officia?</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor:pointer;
    }
    .answer {
        padding: 2rem 0rem;
    }
    p {
        padding: 1rem 0rem;
    }
`

export default FaqSection;