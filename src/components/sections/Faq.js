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
                        My Biography
                    </Title>
                    <SubTitle>
                    Hey! My name is Sylvi, also known as Ruby, and Im an illustrator who specializes in digital art. Although I primarily work with digital mediums, I also enjoy using watercolors and other traditional materials on occasion. My artwork is heavily influenced by adorable anime aesthetics, and I have a passion for creating portraits of female, LGBTQ+, and femme characters.
                    </SubTitle>
                    <SubTitle>
                    I began honing my artistic skills during my high school years, and ever since then, Ive dedicated myself to improving my craft with each passing day. As of now, Im enrolled as an art student at GMU, where Im constantly learning new techniques and exploring different mediums. My goal is to push the boundaries of my art and experiment with unique styles.
                    </SubTitle>
                    <SubTitle>
                    In the future, I aspire to pursue freelance illustration and create a graphic novel. I believe that my passion for creating art and my ability to communicate through visuals can create a unique and impactful experience for my audience. With the power of the internet, I hope to reach out to more people and inspire them with my art.
                    </SubTitle>
                    <SubTextLight>
                    5+ Happy Clients, 40+ Artworks, 6+ Years of Experience
                    </SubTextLight>
                    <ButtonContainer>
                    <ThemeProvider theme={dark}>
                    <Button text="HIRE ME" link="sylvenshi@gmail.com" />
                    </ThemeProvider>
                    </ButtonContainer>
                     </Box>
            </Container>
        </Section>
    )
}

export default About