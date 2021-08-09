import React from 'react'
import "./NavBar.css"
import * as ReactBootStrap from 'react-bootstrap';
import { default as logo } from "../../images/4zLogo.svg"

export default function Navbaar() {
  return (
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <div className="MainLogo">
              <img src={logo} alt="Logo" />
            </div>
          </ReactBootStrap.Navbar.Brand>
          <div class="">
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto ">
                <ReactBootStrap.Nav.Link href="/" className="fw-bolder mynav ">
                  <div class="a">
                    <div class="stripe">

                    </div>
                    Home
                  </div>


                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="services" className="fw-bolder">Our Services</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="projects" className="fw-bolder">Projects</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="About Us" className="fw-bolder" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="about" className="fw-bolder" >Our History, <br></br> Mission & Vision</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4" className="fw-bolder" >A Message from Our<br></br> Managing Director</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.Nav.Link href="contact" className="fw-bolder" >Contact Us</ReactBootStrap.Nav.Link>

              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                {/* <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link> */}
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>


          </div>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  )
}
