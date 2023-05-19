import React from 'react'
import styled from 'styled-components'
import PicBg from '../assets/BannerBG.png'



const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

display: flex;
justify-content: space-between;
align-items: center;

overflow: hidden;

@media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
}
`

const ImgContainer = styled.div`
height: 100px;
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.3;
background-repeat: no-repeat;

img{
width: 150rem;
height: auto;
}

@media (max-width: 48em) {
    img{
        width: 100rem;
        height: auto;
        }
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
align-items: start;
text-shadow: 1px 1px 2px ${props => props.theme.text};

@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
    width: 40%;
    text-align: center;
}

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
    padding:2   rem 0;
    width: 100%;
}
`

const BtnContainer = styled.div`
width: 20%;
justify-content: flex-end;
display: flex;
margin: 1rem auto;

@media (max-width: 48em) {
    width: 100%;
    justify-content: center;
}
`

const ContactBtn = styled.button`
display:inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline:none;
border:none;

font-size: ${props => props.theme.fontlg};
font-weight: 600;
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position:relative;

@media (max-width: 48em) {
    padding: 1rem 2rem;
}

@media (max-width: 30em) {
    padding: 0.5 2rem;
    font-size: ${props => props.theme.fontsm};
}

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width:100%;
    height:100%;
    border-radius:50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Banner = () => {
    return (
        <Section>
            <ImgContainer>
            <img src={PicBg} alt="Sylvenshi" />
            </ImgContainer>
            <Title>Sylvenshi</Title>
            <BtnContainer>
            <ContactBtn >
                Contact
            </ContactBtn>
            </BtnContainer>
        </Section>
    )
}

export default Banner