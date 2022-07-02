import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roudmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Feq from "./components/sections/Feq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Navigation />
        <Home />
        <About />
        <Roudmap />
        <Showcase />
        <Team />
        <Feq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
