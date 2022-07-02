import React from "react";
import styled, { keyframes } from "styled-components";

//images
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img1 from "../../assets/Nfts/bighead-1.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
import img10 from "../../assets/Nfts/bighead-10.svg";

import ETH from "../../assets/icons8-ethereum-48.png";
import { useRef } from "react";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:first-child {
    animation-duration: 20s;

    @media screen and (max-width: 30em) {
      animation-duration: 15s;
    }
  }

  & > *:last-child {
    animation-duration: 15s;

    @media screen and (max-width: 30em) {
      animation-duration: 10s;
    }

    @media screen and (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
  0%{
    transform:translateX(100%)
  }
  100%{
    transform :translateX(-100%)
  }
`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media screen and (max-width: 48em) {
    width: 12rem;
  }

  @media screen and (max-width: 48em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-radius: 0 0 20px 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media screen and (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number, price, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span>
          <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ether" />
            <h1>{Number(price.toFixed(1))}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1 = useRef(null);
  const Row2 = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1}>
        <NftItem number={12} price={1.2} img={img1} passRef={Row1} />
        <NftItem number={534} price={1.5} img={img2} passRef={Row1} />
        <NftItem number={15} price={1} img={img3} passRef={Row1} />
        <NftItem number={78} price={5.2} img={img4} passRef={Row1} />
        <NftItem number={36} price={7.2} img={img5} passRef={Row1} />
      </Row>

      <Row direction="reverse" ref={Row2}>
        <NftItem number={458} price={0.1} img={img6} passRef={Row2} />
        <NftItem number={245} price={3.6} img={img7} passRef={Row2} />
        <NftItem number={48} price={23.2} img={img8} passRef={Row2} />
        <NftItem number={96} price={4.2} img={img9} passRef={Row2} />
        <NftItem number={25} price={1} img={img10} passRef={Row2} />
      </Row>
    </Section>
  );
};

export default Showcase;
