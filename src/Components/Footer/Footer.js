import React from 'react'
import "./Footer.css";
import * as ReactBootStrap from 'react-bootstrap';
import whiteLogo from "../../images/4z Logo White.svg"

export default function Footer() {
    return (
        <div>
            <div className="Footer">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                            <img src={whiteLogo} alt="Logo"></img>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec arcu consectetur, aliquet</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <p class="text-white">
                                <h4>Navigation</h4>
                                <p>Home</p>
                                <p>Our Services</p>
                                <p>Projects</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                            </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                        <p class="text-white">
                                <h4>Our Contact</h4>
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
