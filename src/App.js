import './App.css';
import Navbaar from './Components/Navbar/Navbaar';
import Hero from "./Components/Hero/Hero"
import LatestProject from "./Components/LatestProject/LatestProject"
import * as ReactBootStrap from 'react-bootstrap';
import Footer from "../src/Components/Footer/Footer"
import Services from "../src/Components/Services/Services"
import Partners from "../src/Components/Partners/Partners"
import Experience from "../src/Components/Experience/Experience"
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Projects from './Pages/Projects';
import OurProjects from './Pages/OurProjects';
import OurServices from './Pages/OurServices';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">

      <Navbaar></Navbaar>

      {/* <Hero></Hero>
      <Services></Services>
      <LatestProject></LatestProject>
      <Experience></Experience>
      <Partners></Partners> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={()=><Home />} />
          <Route path="/about" component={() => <AboutUs />} />
          <Route path="/contact" component={() => <ContactUs />} />
          <Route path="/projects" component={() => <Projects />} />
          <Route path="/services" component={() => <OurServices />} />
          {/* <Route path="/" component={() => <Projects />} /> */}
        </Switch>
      </BrowserRouter>


      <Footer></Footer>


    </div >
  );
}

export default App;
