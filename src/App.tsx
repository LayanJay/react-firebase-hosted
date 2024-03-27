import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import OwnYourTeam from './components/OwnYourTeam';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrailerVideo from './components/TrailerVideo.';
import 'react-tooltip/dist/react-tooltip.css';
import ReactGA from 'react-ga4';
import Alpha from './components/Alpha';
import OurTeam from './components/OurTeam';
// Import the StakePage component
import Stake from './components/Stake'; // Adjust the path as necessary
import StakeSidebar from "./components/StakeSidebar";
import StakeNavBar from "./components/StakeNavBar";

function App() {

    const TRACKING_ID = "G-KTXP8LDPVT";
    ReactGA.initialize(TRACKING_ID);

    return (
        <Router>
            <div className={"App"}>
                <Routes>
                    {/* Define the route for the StakePage */}
                    <Route path="/stake" element={
                      <>
                      <StakeNavBar/>
                      <div className='stakePageLayout'>
                      <StakeSidebar/>
                      <Stake/>
                      </div>
                      </>
                    } />
                    {/* Default route */}
                    <Route path="/" element={
                      <>
                        <NavigationBar/>
                        <Hero/>
                        <Alpha/>
                        <TrailerVideo/>
                        <OwnYourTeam/>
                        <Roadmap/>
                        <About/>
                        <OurTeam/>
                        <Partners/>
                        <Contact/>
                        <Footer/>
                      </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
