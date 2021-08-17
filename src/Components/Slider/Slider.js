import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export default function Slider() {
    return (
        <div>
            <ReactBootStrap.Carousel>
                <ReactBootStrap.Carousel.Item interval={1200}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="First slide"
                    />
                    <ReactBootStrap.Carousel.Caption className="mb-5 text-left">

                        <h1>Innovative <br></br>Construction <br>
                        </br>Solutions</h1>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <ReactBootStrap.Button variant="primary rounded-pill blue ">See More</ReactBootStrap.Button>{' '}


                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Second slide"
                    />
                    <ReactBootStrap.Carousel.Caption>
                        <h1>Innovative <br></br>Construction <br>
                        </br>Solutions</h1>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <ReactBootStrap.Button variant="primary rounded-pill blue ">See More</ReactBootStrap.Button>{' '}
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
                        alt="Third slide"
                    />
                    <ReactBootStrap.Carousel.Caption className="padding-0 px-0">
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col  >
                                <h1 className="text-left">Innovative <br></br>Construction <br>
                                </br>Solutions</h1>
                                <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <ReactBootStrap.Button variant="primary rounded-pill blue ">See More</ReactBootStrap.Button>{' '}
                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col>
                                {/* Blank grid 6 */}
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>

        </div>
    )
}
