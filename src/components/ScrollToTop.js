import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import useWindowScroll from "react-use/lib/useWindowScroll";

const goUp = keyframes`
  0%{
    transform:translateY(-3px)
  }
  50%{
    transform:translateY(+3px)
  }
  100%{
    transform:translateY(-3px)
  }
`;

const show = keyframes`
  from{
    transform:translateY(-20px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
`;

const hide = keyframes`
  from{
    transform:translateY(0)
  }
  to{
    transform:translateY(-10px)
  }
`;

const Up = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;
  animation: ${(props) => props.show} 0.2s ease;
  z-index: 50;

  &:active {
    transform: scale(0.7);
  }

  span {
    animation: ${goUp} 0.8s ease infinite;
    user-select: none;
  }
`;

const ScrollToTop = () => {
  const ref = useRef(null);

  const { y } = useWindowScroll();
  const [showUp, setShowUp] = useState(false);

  useLayoutEffect(() => {
    if (y >= 200) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  }, [y]);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      {showUp && (
        <Up show={showUp ? show : hide} onClick={() => scrollTo("navigation")}>
          <span>&#x2191;</span>
        </Up>
      )}
    </>
  );
};

export default ScrollToTop;
