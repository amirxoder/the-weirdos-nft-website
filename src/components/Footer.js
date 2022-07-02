import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";

//icon
import Facebook from "../Icons/Facebook";
import LinkedIn from "../Icons/LinkedIn";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 70%;
  /* margin-top: 14rem; */
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 64em) {
    margin-top: 10rem;
    /* justify-content: center; */
    width: 100%;
    /* align-items: center; */
    /* background-color: blue; */
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 100%;
    /* background-color: red; */
    margin: 0 auto;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const MenuItem = styled.li`
  width: fit-content;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 64em) {
    display: none;
  }
`;

const Bottom = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 64em) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 1rem;
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://facebook.com" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
            <a href="https://linkedin.com" target={"_blank"} rel="noopener">
              <LinkedIn />
            </a>
            <a href="https://instagram.com" target={"_blank"} rel="noopener">
              <Instagram />
            </a>
            <a href="https://twitter.com" target={"_blank"} rel="noopener">
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("feq")}>Faq</MenuItem>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()} | Weirdos Club. All rights reserved
        </span>
        <span>
          Made with &#10084; by{" "}
          <span style={{ fontWeight: "bold" }}>AmirCodder</span>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
