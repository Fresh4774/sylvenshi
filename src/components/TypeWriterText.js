import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';


const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Sora', cusrsive;
}
.text-1{
    color: #B5CA7C;
}
.text-2{
    color: #F3A7A0;
}
.text-3{
    color: #F7DB96;
}

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}

@media (max-width: 40em) {
    width: 200%;
}
`;

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
    width: 180%;
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
    width: 180%;
}

@media (max-width: 48em) {
    width: 180%;
}
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;


@media (max-width: 48em) {
    align-self: center;
    text-align: center;
    
    button{
        margin: 0, auto;
    }
}
`


const TypeWriterText = () => {
    return (
        <>
        <Title>
            Hi, I'm Sylvenshi & I'm a
            <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Digital Illustrator!</span>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<span class="text-2">Anime Artist!</span>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<span class="text-3">Constant Learner!</span>')
    .pauseFor(1000)
    .deleteAll()
    .start()
  }}
/>
            </Title>
    <SubTitle>Hey! I'm Sylvenshi a digital illustrator. My creations bring life to captivating LGBTQ+, & female characters, inspired by anime.</SubTitle>
    <ButtonContainer>
    <Button text="Hire Me" link="mailto:sylvenshi@gmail.com" />
    </ButtonContainer>
    </>
    )
}

export default TypeWriterText