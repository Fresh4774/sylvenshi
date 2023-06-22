import React from 'react'
import styled from 'styled-components'

import Pic1 from '../../assets/Yes1.png'
import Pic2 from '../../assets/Yes2.png'
import Pic3 from '../../assets/Yes3.png'



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 92%;
margin: 4rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
    width: 80%;
}

@media (max-width: 48em) {
    width: 90%;
    justify-content: center;
}
`
const Item = styled.div`
width: calc(20rem -4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}
`

const ImageContainer = styled.div`
width: 17rem;
height: auto;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

img{
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 400;
`


const ArtworkComponent = ({img, name=" ", position=" ", position1=" ", position2=" ", position3=" ", position4=" "}) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <br/>
            <Position>{position}</Position>
            <br/>
            <Position>{position1}</Position>
            <br/>
            <Position>{position2}</Position>
            <br/>
            <Position>{position3}</Position>
            <br/>
            <Position>{position4}</Position>
        </Item>
    )
}


const Hire = () => {
    return (
        <Section id="hire">
            <Title>Hire Me</Title>

            <Container>
                <ArtworkComponent 
                img={Pic1} 
                name="Sketch" 
                position="Headshot: 10$"  
                position1="Bust-up: 12$" 
                position2="Full body: 18$" 
                position3="Extra Character: 5$ - 10$" />

                <ArtworkComponent 
                img={Pic2} 
                name="Colored Sketch" 
                position="Headshot: 10$"  
                position1="Bust-up: 16$" 
                position2="Full body: 20$" 
                position3="Extra Character: 7$ - 11$"
                position4="Extra Shading: 5$" />

                <ArtworkComponent
                img={Pic3} 
                name="Fully Rendered" 
                position="Headshot: 25$"  
                position1="Bust-up: 35$" 
                position2="Full body: 45$" 
                position3="Extra Character: 10$ - 20$" />
            </Container>
            
        </Section>
    )
}

export default Hire