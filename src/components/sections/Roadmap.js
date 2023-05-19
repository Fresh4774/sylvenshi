import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


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

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 70%;
height:200vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em) {
    width: 80%;
}

@media (max-width: 48em) {
    width: 90%;
}

@media (max-width: 48em) {
    width: 90%;
}   
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style:none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
    width: 90%;
}

&>*:nth-of-type(2n +1){
    justify-content: start;
    @media (max-width: 48em){
        justify-content: center;
    }

    div{
        border-radius: 50px 0 50px 0;
        text-align: right;

        @media (max-width: 48em){
            border-radius: 0 50px 0 50px;
            text-align: left;

            p{
                border-radius: 0 40px 0 40px;
            }
        }
    }
    p{
        border-radius: 40px 0 40px 0;
    }
}
&>*:nth-of-type(2n){
    justify-content: end;
    @media (max-width: 48em){
        justify-content: center;
    }

    div{
        border-radius: 0 50px 0 50px;
        text-align: left;
            }
    }
    p{
        border-radius: 0 40px 0 40px;
    }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em){
    justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em){
    width: 85%;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1rem;
position: relative;
border: 1px solid #7cd7ce;
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl}

@media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
    font-weight: 600;
}
`;
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm}

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxxs};
}
`;

const RoadMapItem = ({title, subtext, addToRef}) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}


const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
}

useLayoutEffect(() => {
    let t1 = gsap.timeline();
revealRefs.current.forEach((el, index) => {

    t1.fromTo(
        el.childNodes[0],
        {
            y: 0
        },
        {
            y:'-30%',
            scrollTrigger:{
                id: `section-${index + 1}`,
                trigger: el,
                start: 'top center+=200px',
                end:'bottom center',
                scrub:true,
                // markers:true,
            }
        }
    );

});

    return () => {
        
    };
}, [])

    return (
        <Section id="roadmap">
            <Title>Rates</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>

                    <Item>&nbsp;</Item>


                    <RoadMapItem
                    addToRefs={addToRefs}
                    title="Abstract Art" 
                    subtext="Abstract art uses shapes, colors, and forms to convey emotions and concepts without representing reality. Focuses on formal elements, not subject matter. Expresses inner world, challenges norms." 
                    />

                    <RoadMapItem
                    addToRefs={addToRefs}
                    title="Sketching" 
                    subtext="Sketch art captures ideas and impressions with minimal materials, allowing artists to express their creativity and plan their work. It's a versatile tool for capturing the essence of a subject." 
                    />

                    <RoadMapItem
                    addToRefs={addToRefs}
                    title="Digital Art" 
                    subtext="Digital art revolutionizes creativity, merging imagination and technology. It empowers artists to explore limitless possibilities on virtual canvases, shaping the future of visual storytelling." 
                    />

                    <RoadMapItem
                    addToRefs={addToRefs}
                    title="Realism Art" 
                    subtext="Realism art portrays reality objectively, emphasizing everyday life with natural details and techniques like perspective and chiaroscuro." 
                    />

                    <RoadMapItem
                    addToRefs={addToRefs}
                    title="Stylized Art" 
                    subtext="Stylized art prioritizes form, using exaggeration and distortion for a unique aesthetic. Bold lines, vibrant colors, and simplified shapes draw inspiration from cultural traditions. It conveys emotion, drama, and showcases personal creativity." 
                    />


                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap