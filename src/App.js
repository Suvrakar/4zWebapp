import './App.css';
import Navbaar from './Components/Navbar/Navbaar';
import Hero from "./Components/Hero/Hero"
import LatestProject from "./Components/LatestProject/LatestProject"
import * as ReactBootStrap from 'react-bootstrap';
import Footer from "../src/Components/Footer/Footer"
import Services from "../src/Components/Services/Services"
import Partners from "../src/Components/Partners/Partners"
import Experience from "../src/Components/Experience/Experience"

function App() {
  return (
    <div className="App">
      

        <Navbaar></Navbaar>
        <Hero></Hero>
        <Services></Services>
        <LatestProject></LatestProject>
        <Experience></Experience>
        <Partners></Partners>
        <Footer></Footer>
 

    </div>
  );
}

export default App;
