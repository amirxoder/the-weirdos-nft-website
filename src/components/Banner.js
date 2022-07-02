import React from "react";
import styled from "styled-components";

//images
import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  height: 35rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }

  @media screen and (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  z-index: 10;
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  width: 35%;

  @media (max-width: 64em) {
    width: 40%;
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    text-align: center;
  }
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 48em) {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="banner" />
        <img src={img2} alt="banner" />
        <img src={img3} alt="banner" />
        <img src={img4} alt="banner" />
        <img src={img5} alt="banner" />
        <img src={img6} alt="banner" />
      </ImgContainer>
      <Title>
        Join the <br /> weirdos club
      </Title>
      <BtnContainer>
        <Button text="join now" link={"#"} />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
