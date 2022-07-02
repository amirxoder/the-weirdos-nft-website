import React from "react";
import styled, { keyframes } from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWritter from "../TypeWritter";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import RoundTextWhite from "../../assets/Rounded-Text-White.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 70vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 64em) {
    width: 85%;
  }

  @media screen and (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  100%{
    transform:rotate(1turn);
  }
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media screen and (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media screen and (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media screen and (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWritter />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
