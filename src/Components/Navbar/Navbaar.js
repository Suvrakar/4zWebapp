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
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features"></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="/" className="fw-bolder mynav ">

                <div class="a">

                  <div class="stripe">

                  </div>
                  Home
                </div>


              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="services" className="fw-bolder mynav">
                <div class="">

                  <div class="stripe2">

                  </div>
                  Our Services
                </div>

              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="projects" className="fw-bolder mynav">
                <div class="">

                  <div class="stripe3">

                  </div>
                  Projects
                </div>
              </ReactBootStrap.Nav.Link>


              <ReactBootStrap.NavDropdown title="About Us" className="fw-bolder mynav" id="collasible-nav-dropdown">

                <ReactBootStrap.NavDropdown.Item href="about" className="fw-bolder" >Our History, <br></br> Mission & Vision</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4" className="fw-bolder" >A Message from Our<br></br> Managing Director</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>





              <ReactBootStrap.Nav.Link href="contact" className="fw-bolder mynav" >
                <div class="">

                  <div class="stripe5">

                  </div>
                  Contact Us
                </div>
              </ReactBootStrap.Nav.Link>
              {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootStrap.Nav.Link> */}

            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>





    </div>
  )
}
