import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import WhatIs from "./components/WhatIs";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Alpha from "./components/Alpha";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Alpha />
      <WhatIs />
      <Partners />
      <Roadmap />
      <About />
    </>
  );
}

export default App;
