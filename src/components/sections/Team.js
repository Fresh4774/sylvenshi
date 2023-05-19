import React from 'react'
import styled from 'styled-components'

import Pic1 from '../../assets/Artworks/1.png'
import Pic2 from '../../assets/Artworks/2.png'
import Pic3 from '../../assets/Artworks/3.png'
import Pic4 from '../../assets/Artworks/4.png'
import Pic5 from '../../assets/Artworks/5.png'
import Pic6 from '../../assets/Artworks/6.png'
import Pic7 from '../../assets/Artworks/7.png'
import Pic8 from '../../assets/Artworks/8.png'
import Pic9 from '../../assets/Artworks/9.png'
import Pic10 from '../../assets/Artworks/10.png'
import Pic11 from '../../assets/Artworks/11.png'
import Pic12 from '../../assets/Artworks/12.png'
import Pic13 from '../../assets/Artworks/13.png'
import Pic14 from '../../assets/Artworks/14.png'
import Pic15 from '../../assets/Artworks/15.png'



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
width: 15rem;
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


const ArtworkComponent = ({img, name=" ", position=" "}) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}


const Team = () => {
    return (
        <Section id="team">
            <Title>Art Gallery</Title>

            <Container>
                <ArtworkComponent img={Pic1} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic2} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic3} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic4} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic5} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic6} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic7} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic8} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic9} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic10} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic11} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic12} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic13} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic14} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
                <ArtworkComponent img={Pic15} name="Sylvenshi" position="Sylvenshi's Art Gallery" />
            </Container>
            
        </Section>
    )
}

export default Team