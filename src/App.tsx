import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import OwnYourTeam from "./components/OwnYourTeam";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Alpha from "./components/Alpha";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrailerVideo from "./components/TrailerVideo.";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Alpha />
      <OwnYourTeam />
        <TrailerVideo/>
        <Alpha/>
        <Roadmap/>
      <About />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
