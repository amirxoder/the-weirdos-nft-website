import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead-10.svg";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 60vh;

  @media (max-width: 70em) {
    height: 64vh;
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

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    background-image: url(${Arrow});
    width: 4rem;
    background-position: center;
    background-size: cover;
    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }

    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    width: 4rem;
    background-position: center;
    background-size: cover;

    &::after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="nfts" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;