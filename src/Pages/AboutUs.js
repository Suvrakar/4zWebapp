import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

export default function AboutUs() {
    return (
        <div>
            <ReactBootStrap.Container>
                <ReactBootStrap.Row className="my-5">
                    <ReactBootStrap.Col>
                        <h1>Our History <br>
                        </br>
                            Mission & Vision
                        </h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                      Image
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>
    )
}