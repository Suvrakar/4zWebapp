import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

export default function ContactUs() {
    return (
        <div>
            Map

            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div class=" mt-5 p-5">
                            <h4 className="pb-3" >Our Contact</h4>
                            <p>4z International Limited <br></br>
                                Flat 5B, House 54, Road 10, <br></br>
                                Block E, Banani <br></br>
                                Dhaka 1213, Bangladesh</p>

                            <p>+8802324354423 <br></br>
                                +8802324354423</p>

                            <p>contact@somemail.com</p>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class=" mt-5 p-5">
                            <h4 className="pb-3" >Get in Touch</h4>
                            <ReactBootStrap.Form>
                                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                                    <ReactBootStrap.Form.Control type="email" placeholder="Enter name" />
                                    <ReactBootStrap.Form.Text className="text-muted">
                                    </ReactBootStrap.Form.Text>
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                                    {/* <ReactBootStrap.Form.Control type="email" placeholder="Enter email" /> */}
                                    <ReactBootStrap.Form.Text className="text-muted">
                                    </ReactBootStrap.Form.Text>
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label> */}
                                    <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                                    <ReactBootStrap.Form.Text className="text-muted">
                                    </ReactBootStrap.Form.Text>
                                </ReactBootStrap.Form.Group>

                                <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicPassword">
                                    {/* <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label> */}
                                    {/* <ReactBootStrap.Form.Control type="password" placeholder="Password" /> */}
                                </ReactBootStrap.Form.Group>
                                {/* <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                                </ReactBootStrap.Form.Group> */}
                                <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <ReactBootStrap.Form.Label>Your Message</ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control as="textarea" rows={3} />
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Button variant="primary rounded-pill" type="submit">
                                    Send Message
                                </ReactBootStrap.Button>
                            </ReactBootStrap.Form>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>





        </div>
    )
}
