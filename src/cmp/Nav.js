import React from 'react'
import styled from 'styled-components';



const Nav = () => {
    return (
        <StyledNav>
            <h1><a id = "logo" href="#">Capture</a></h1>
            <ul>
                <li><a href="#">1. About us</a></li>
                <li><a href="#">2. Desc us</a></li>
                <li><a href="#">3. Besty us</a></li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.div`
min-height: 10vh;
display:flex;
margin:auto;
justify-content: space-between;
align-items:center;
padding: 1rem 10rem;
background-color: #282828;
a {
    color:white;
    text-decoration:none;
}
ul {
    display:flex;
    list-style:none;
}
#logo {
    font-family:roboto;
    font-size:1.5rem;
    font-weight:lighter;
}
li {
    padding-left: 10rem;
    position:relative;
}
`
export default Nav;