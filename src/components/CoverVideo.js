import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/HomeVideo.mp4'



const VideoContainer = styled.div`
width: 100%;

video{
    width: 70%;
    height: auto;
}

@media (max-width: 64em) {
    min-width: 40vh;
    align-self: center;
    text-align: center;
}
`


const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={GIF} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo