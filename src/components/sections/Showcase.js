import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import Pic1 from '../../assets/Nfts/11.png'
import Pic2 from '../../assets/Nfts/22.png'
import Pic3 from '../../assets/Nfts/33.png'
import Pic4 from '../../assets/Nfts/44.png'
import Pic5 from '../../assets/Nfts/55.png'
import Pic6 from '../../assets/Nfts/66.png'
import Pic7 from '../../assets/Nfts/77.png'
import Pic8 from '../../assets/Nfts/88.png'
import Pic9 from '../../assets/Nfts/99.png'
import Pic10 from '../../assets/Nfts/1010.png'
import Pic11 from '../../assets/Nfts/1212.png'
import Pic12 from '../../assets/Nfts/1313.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
    animation-duration: 20s;

    @media (max-width: 30em) {
        animation-duration: 15s;
    }
}
&>*:last-child{
    animation-duration: 15s;

    @media (max-width: 30em) {
        animation-duration: 10s;
    }
}
`

const move = keyframes`
0%{  transform: translateX(100%)  };
100%{  transform: translateX(-100%)  }
`

const Row = styled.div`
white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  
  animation: ${move} linear infinite ${props => props.direction};
`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.text};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em) {
    width: 12rem;
}

@media (max-width: 30em) {
    width: 10rem;
}

img{
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 20px;
}
`

const Details = styled.div`
display: flex;
justify-content: center;
padding: 0.8rem 1rem;
const ImgContainer = styled.div;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
    font-weight: 600;
    line-height: 1.5rem;

    @media (max-width: 30em) {
        font-size: ${props => props.theme.fontxs    };
        }
}

h1{
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
    font-size: ${props => props.theme.fontmd};
    }
}
`

const PicItem = ({img, heading, passRef}) => {

let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
}


    return (
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
        <img src={img} alt="Sylvenshi" />
        <Details>
            <div>
                <span>Art Gallery Slide Show</span> <br/>
                <h1>{heading}</h1>
            </div>
        </Details>
        </ImgContainer>
    )
}


const Showcase = () => {

    const Row1Ref = useRef(null)
    const Row2Ref = useRef(null)

    return (
        <Section id="showcase">

            <Row direction="none" ref={Row1Ref}>
                <PicItem img={Pic1} heading="Sylvenshi" passRef = {Row1Ref} />
                <PicItem img={Pic2} heading="Sylvenshi" passRef = {Row1Ref} />
                <PicItem img={Pic3} heading="Sylvenshi" passRef = {Row1Ref} />
                <PicItem img={Pic4} heading="Sylvenshi" passRef = {Row1Ref} />
                <PicItem img={Pic5} heading="Sylvenshi" passRef = {Row1Ref} />
                <PicItem img={Pic6} heading="Sylvenshi" passRef = {Row1Ref} />
            </Row>

            <Row direction="reverse" ref={Row2Ref}>
            <PicItem img={Pic7} heading="Sylvenshi" passRef = {Row2Ref} />
            <PicItem img={Pic8} heading="Sylvenshi" passRef = {Row2Ref} />
            <PicItem img={Pic9} heading="Sylvenshi" passRef = {Row2Ref} />
            <PicItem img={Pic10} heading="Sylvenshi" passRef = {Row2Ref} />
            <PicItem img={Pic11} heading="Sylvenshi" passRef = {Row2Ref} />
            <PicItem img={Pic12} heading="Sylvenshi" passRef = {Row2Ref} />
            </Row>


        </Section>
    )
}

export default Showcase