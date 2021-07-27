import React from 'react'
import "./NavBar.css"
import * as ReactBootStrap from 'react-bootstrap';
import { default as logo } from "../../images/4z Logo Blue.svg"

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
              <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">Our Services</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">Projects</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="About Us" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav.Link href="#pricing">Contact Us</ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              {/* <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

    </div>
  )
}
