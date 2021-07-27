import './App.css';
import Navbaar from './Components/Navbar/Navbaar';
import Hero from "./Components/Hero/Hero"
import LatestProject from "./Components/LatestProject/LatestProject"
import * as ReactBootStrap from 'react-bootstrap';
import Footer from "../src/Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      

        <Navbaar></Navbaar>
        <Hero></Hero>
        <LatestProject></LatestProject>
        <Footer></Footer>
 

    </div>
  );
}

export default App;
