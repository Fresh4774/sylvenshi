import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import Pic1 from '../assets/Nfts/1.png'
import Pic2 from '../assets/Nfts/2.png'
import Pic3 from '../assets/Nfts/3.png'
import Pic4 from '../assets/Nfts/4.png'
import Pic5 from '../assets/Nfts/5.png'
import Pic6 from '../assets/Nfts/6.png'
import Pic7 from '../assets/Nfts/7.png'
import Pic8 from '../assets/Nfts/8.png'
import Pic9 from '../assets/Nfts/9.png'
import Pic10 from '../assets/Nfts/10.png'
import Pic11 from '../assets/Nfts/11.png'
import Pic12 from '../assets/Nfts/12.png'
import Pic13 from '../assets/Nfts/13.png'
import Pic14 from '../assets/Nfts/14.png'
import Pic15 from '../assets/Nfts/15.png'

import Arrow from '../assets/Arrow.svg'


const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em) {
  height: 60vh;
}

@media (max-width: 64em) {
  height: 50vh;
  width: 30vw;
}

@media (max-width: 48em) {
  height: 50vh;
  width: 40vw;
}

@media (max-width: 30em) {
  height: 45vh;
  width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items:center ;

    img{
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }

}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }

}

.swiper-slide img {
    object-fit: contain;
    width: 107%;
    height: 111.6%;
  }
`


const Carousel = () => {
    return (
        <Container>
                  <Swiper
                  autoplay={{
                    delay:1500,
                    disableOnInteraction: false,

                  }}
                  pagination={{
                    type:'fraction',

                  }}
                  scrollbar={{
                    draggable:true,
                  }}
                  navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
                <SwiperSlide><img src={Pic1} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic2} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic3} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic4} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic5} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic6} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic7} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic8} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic9} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic10} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic11} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic12} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic13} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic14} alt="Sylvenshi" /></SwiperSlide>
                <SwiperSlide><img src={Pic15} alt="Sylvenshi" /></SwiperSlide>
      </Swiper>
        </Container>
    )
}

export default Carousel