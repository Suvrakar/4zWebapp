import React from 'react'
import "./OurServices.css"
import * as ReactBootStrap from 'react-bootstrap';

export default function OurServices() {
    return (
        <div>
            <div className="head d-flex justify-content-center align-items-center text-light">
                <h1>Our Services</h1>
            </div>
            <br></br>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Card>
                                <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" />
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title>Card</ReactBootStrap.Card.Title>
                                    <ReactBootStrap.Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </ReactBootStrap.Card.Text>
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>
                    ))}
                </ReactBootStrap.Row>

            </ReactBootStrap.Container>

            <br></br>

        </div>
    )
}