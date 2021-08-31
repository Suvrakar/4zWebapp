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
import AllPartners from './Pages/AllPartners';
import AllProjects from './Pages/AllProjects';
import BoardOfDirectors from './Pages/BoardOfDirectors';
import MessageofMD from "./Pages/MessageofMD"
import Form from "../src/Components/Form/Form"
import { Helmet } from 'react-helmet';
import BuildingName from './Pages/BuildingName';
import ServicesDetails from './Pages/ServicesDetails';



function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <title>4z International</title>
      </Helmet> */}



      <Navbaar></Navbaar>


      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/about" component={() => <AboutUs />} />
          <Route path="/messageofmd" component={() => <MessageofMD />} />
          <Route path="/bdirectors" component={() => <BoardOfDirectors />} />
          <Route path="/contact" component={() => <ContactUs />} />
          <Route path="/building/:id" component={() => <BuildingName />} />
          <Route path="/services" component={() => <OurServices />} />
          <Route path="/service/detail/:id" component={() => <ServicesDetails />} />
          <Route path="/allpartners" component={() => < AllPartners/>} />
          <Route path="/allprojects" component={() => < AllProjects/>} />
          {/* <Route path="/" component={() => <Projects />} /> */}
        </Switch>
      </BrowserRouter>


      <Footer></Footer>


    </div >
  );
}

export default App;
