import React from 'react'
import "./Footer.css";
import * as ReactBootStrap from 'react-bootstrap';
import whiteLogo from "../../images/4z Logo White.svg"

export default function Footer() {
    return (
        <div>
            <div className="Footer py-5">
                <ReactBootStrap.Container className="d-flex justify-content-center">
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col className="d-flex align-items-center flex-column">
                            <img src={whiteLogo} alt="Logo" class=""></img>
                            <p class="text-white pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec arcu consectetur, aliquet</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="d-flex align-items-center flex-column">
                        <p class="text-white">
                                <h4 className="pb-3 ">Navigation</h4>
                                <p>Home</p>
                                <p>Our Services</p>
                                <p>Projects</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                            </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="d-flex align-items-center flex-column">
                        <p class="text-white">
                                <h4 className="pb-3" >Our Contact</h4>
                                <p>4z International Limited <br></br>
                               Flat 5B, House 54, Road 10, <br></br>
                               Block E, Banani <br></br>
                                Dhaka 1213, Bangladesh</p>

                                <p>+8802324354423 <br></br>
                                +8802324354423</p>

                                <p>contact@somemail.com</p>
                               
                            </p>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        </div>
    )
}
