import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button';
import { dark } from '../../styles/Themes';


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em) {
    width: 85%;
}

@media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}

@media (max-width: 40em){

    &>*:last-child{
        width: 90%;
    }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content center;
align-items: center;

@media (max-width: 40em) {
    min-height: 50vh;
}
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 100%;
margin: 0 auto;

@media (max-width: 64em){
    width: 100%;
    text-align: center; 
}

@media (max-width: 40em){  
    font-size: ${props => props.theme.fontxl};
}

@media (max-width: 30em){
    font-size: ${props => props.theme.fontlg};
}
`

const SubTitle = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 100%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
}

@media (max-width: 40em){  
    font-size: ${props => props.theme.fontmd};
}

@media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};
}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 100%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
}

@media (max-width: 40em){  
    font-size: ${props => props.theme.fontsm};
}

@media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};
}
`

const ButtonContainer = styled.div`
width: 100%;
margin: 1rem auto;
align-self: flex-start;
display: flex;

@media (max-width: 64em){
    width: 100%;

    Button{
        margin: 0 auto;
    }
}
`

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box> <Carousel /> </Box>
                <Box> 
                    <Title>
                        Sylvenshi
                    </Title>
                    <SubTitle>
                    Hey! I'm Sylvenshi, also known as Sylvi, and I'm passionate about digital illustration. My art style draws inspiration from anime, and I have a particular fondness for creating artwork featuring female, LGBTQ+, and femme characters. I have a diverse range of artistic abilities, including abstract art, sketching, realism, and stylized art. Currently, I'm in my third year of a four-year Art and Visual Technology degree program, where my focus lies in the realm of drawing. This program is built upon the belief that art serves as a reflection of and an inspiration for a creative society. It encourages individuals to express themselves uniquely and fosters public interaction through the powerful medium of art.
                    </SubTitle>
                    <SubTitle>
                    If you're interested in commissioning a piece of artwork, I would be thrilled to discuss the details with you. Whether it's a personal project or a commercial endeavor, I'm here to bring your ideas to life through my illustrations. Don't hesitate to reach out to me for commission work!
                    </SubTitle>
                    <SubTextLight>
                    My Creations Bring Life To Captivating LGBTQ+, & Female Characters, Inspired By Anime with a taste of abstract art, sketching, realism, stylized art & illustrations.
                    </SubTextLight>
                    <ButtonContainer>
                    <ThemeProvider theme={dark}>
                    <Button text="HIRE ME" link="mailto:sylvenshi@gmail.com" />
                    </ThemeProvider>
                    </ButtonContainer>
                     </Box>
            </Container>
        </Section>
    )
}

export default About