import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Assets
import logo from '../logo-white-fullres.png';

const StyledNav = styled.nav`
    width: 20%;
    height: 100vh;
    background-color: #0E7C7B;
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden;

    img {
        padding: 20% 0;
        width: 80%;
    }

    a {
        text-decoration: none;
        font-size: 1.7rem;
        font-weight: 900;
        color: #FFFFFF;
        transition: 0.5s;
        &:hover{
            color: #94909B;
        }
    }

    div {
        padding: 2% 0;
    }
`

function Nav(props) {
    return(
        <StyledNav>
            <img src={logo} alt='Wunderlist Logo'></img>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/todo'>
                <div>Todo List</div>
            </Link>
            <Link to='/contact'>
                <div>Contact</div>
            </Link>
        </StyledNav>
    )
}

export default Nav