import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "./Button";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text__1 {
    color: blue;
  }
  .text__2 {
    color: orange;
  }
  .text__3 {
    color: red;
  }

  @media screen and (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media screen and (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media screen and (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media screen and (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
  }

  @media screen and (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media screen and (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWritter = () => {
  return (
    <>
      <Title>
        Discaver a new area fo cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class='text__1'>NFTs.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text__2'>Collectible Items.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text__3'>Ape Killer.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apps? Try something new</SubTitle>
      <ButtonContainer>
        <Button text={"Explore"} link="#about"></Button>
      </ButtonContainer>
    </>
  );
};

export default TypeWritter;
