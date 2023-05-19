import React from 'react'
import styled from 'styled-components'
import LogoPic from './LogoPic'
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
margin-top:22px;
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (min-width: 64rem) {
    font-size: ${props => props.theme.fontxxl};    
}
`

const Logo = () => {
    return (
    <LogoText><Link to="/"><LogoPic/></Link></LogoText>
    )
}

export default Logo