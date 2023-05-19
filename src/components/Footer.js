import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Pi from '../Icons/Pi'
import MailMail from '../Icons/MailMail'




const Section = styled.section`
min-height: 100vh;
width: 100vw;
position: relative;
color: ${props => props.theme.text};

background-color: ${props => props.theme.body};

display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em){
    width: 90%;
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
    width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em){
    display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration: underline;
}

@media (max-width: 48em){
    flex-direction: column;
    width: 100%;

    span{
        margin-bottom: 1rem;
    }
}
`


const Footer = () => {

    const scrollTo = (id) => {

        let element = document.getElementById(id);
    
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    
    }


    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="https://www.instagram.com/sylvenshi/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
                            <Facebook /></a>

                            <a href="https://ko-fi.com/sylvenshi" target="_blank" rel="noopener noreferrer">
                            <Pi /></a>

                            <a href="https://twitter.com/sylvenshi" target="_blank" rel="noopener noreferrer">
                            <Twitter /></a>

                            <a href="mailto:sylvenshi@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailMail /></a>
                    </IconList>
                </Left>
                <MenuItems>
                <Item onClick={() => scrollTo('home')} >Home</Item>
                    <Item onClick={() => scrollTo('about')} >About</Item>
                    <Item onClick={() => scrollTo('roadmap')} >My Skills</Item>
                    <Item onClick={() => scrollTo('showcase')} >Slides</Item>
                    <Item onClick={() => scrollTo('team')} >Art Gallery</Item>
                    <Item onClick={() => scrollTo('faq')} >Biography</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Sylvenshi. All rights reserved.
                </span>
                <span>
                <a href="https://www.youtube.com/@itssFriction/featured" target="_blank" rel="noopener noreferrer">Created By Friction</a>
                </span>
            </Bottom>
        </Section>
    )
}

export default Footer