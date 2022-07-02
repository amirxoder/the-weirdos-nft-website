import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  z-index: 99;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .moblie {
    display: none;
  }

  @media screen and (max-width: 65em) {
    .desktop {
      display: none;
    }

    .moblie {
      display: inline-block;
      font-size: 1rem;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 65em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `clac(100vh - ${props.theme.navHeight})`};
    z-index: 10;
    flex-direction: column;
    transition: all 0.3s ease;

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};

    background-color: ${(props) => `rgba(${props.theme.bodyRgba},.8)`};
    backdrop-filter: blur(6px);
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
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

  @media screen and (max-width: 65em) {
    &::after {
      display: none;
    }
  }
`;

const HambergerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem " : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(00deg)"};
  transition: all 0.4s ease;

  display: none;

  @media screen and (max-width: 65em) {
    /* 1024 */
    display: flex;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem " : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-3px " : "0")};
    background-color: ${(props) => props.theme.text};
    position: absolute;
  }

  &:after {
    top: ${(props) => (props.click ? ".3rem " : ".5rem")};
    transform: ${(props) =>
      props.click ? " rotate(-40deg)" : " rotate(00deg)"};
  }

  &::before {
    bottom: ${(props) => (props.click ? ".3rem " : ".5rem")};
    transform: ${(props) =>
      props.click ? " rotate(40deg)" : " rotate(00deg)"};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(false);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />

        <div onClick={() => setClick(!click)}>
          <HambergerMenu
            onClick={() => setClick(!click)}
            click={click}
          ></HambergerMenu>
        </div>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("feq")}>Faq</MenuItem>
          <MenuItem>
            <div className="moblie">
              <Button text={"Connect Wallet"} link="https://google.com" />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text={"Connect Wallet"} link="https://google.com" />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
