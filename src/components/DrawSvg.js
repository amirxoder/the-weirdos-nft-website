import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Vector from "../Icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const Bounce = keyframes`
  from{ transform: translateX(-50%) scale(.5)}
  to{ transform: translateX(-50%) scale(1)}
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  animation: ${Bounce} 0.5s linear infinite alternate;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];

    const lenght = svg.getTotalLength();

    svg.style.strokeDasharray = lenght;

    svg.style.storkeDashoffset = lenght;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = lenght * self.progress;

          svg.style.strokeDashoffset = lenght - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            // console.log("Scrolling is active");
            ballRef.current.style.display = "none";
          } else {
            // console.log("Scrolling is not active");
            ballRef.current.style.display = "inline-block";
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
