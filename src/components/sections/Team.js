import React from "react";
import styled from "styled-components";

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
import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 1px solid ${(props) => props.theme.text};
  width: fit-content;

  @media screen and (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 64em) {
    width: 80%;
  }

  @media screen and (max-width: 64em) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    /* background-color: red; */
    transition: all 0.2s ease;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  color: ${(props) => props.theme.body};
  padding: 1rem 0;
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 5;
  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 2rem;

  &:hover {
    img {
      transform: translateY(-1.52rem) scale(1.2);
    }
  }

  @media screen and (max-width: 64em) {
    width: 70vw;
    margin: 2rem auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.founlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name, position }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="skyblae" position={"Founder"} />
        <MemberComponent img={img2} name="megnum" position={"co-founder"} />
        <MemberComponent img={img3} name="monkey king" position={"director"} />
        <MemberComponent img={img4} name="black panther" position={"manager"} />
        <MemberComponent img={img5} name="deathstroke" position={"artist"} />
        <MemberComponent
          img={img6}
          name="lazy kong"
          position={"social media manager"}
        />
        <MemberComponent
          img={img7}
          name="cyper punk"
          position={"blockchain specialist"}
        />
        <MemberComponent img={img8} name="monk" position={"web3 developer"} />
        <MemberComponent
          img={img9}
          name="banana"
          position={"graphic designer"}
        />
      </Container>
    </Section>
  );
};

export default Team;
