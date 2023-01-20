import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import WhatIs from "./components/WhatIs";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import About from "./components/About";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <WhatIs />
      <Partners />
      <Roadmap />
      <About />
    </>
  );
}

export default App;
