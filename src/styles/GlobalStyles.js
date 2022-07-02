import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

// font-family: "Akaya Telivigala", cursive;
// font-family: "Sora", sans-serif;

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin:0;
    padding:0;
  }

  html{
    overflow-x:hidden;
  }

  .animate__delay{
    animation-delay:.5s;
  }

  body{
    font-family: "Sora", sans-serif;
    overflow-x:hidden;
  }

  h1, h2 , h3 , h4  , h5 ,h6{
     margin:0;
     padding:0;
  }

  a{
    color:inherit;
    text-decoration: none;
    
  }
`;
