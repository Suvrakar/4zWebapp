import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

export default function Projects() {
    return (
        <div>
            <ReactBootStrap.Container className="my-5">
                <ReactBootStrap.Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Card>
                                <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" />
                                <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
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

        </div>
    )
}
