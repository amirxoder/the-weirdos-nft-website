import React from "react";
import styled from "styled-components";

//video
import Gif from "../assets/Home Video.mp4";

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 64em) {
    min-width: 40vw;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={Gif} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
