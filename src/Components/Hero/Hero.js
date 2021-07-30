import React from 'react'
import HeroLogo from "../../images/BannerImage.png"
import "./Hero.css"
import * as ReactBootStrap from 'react-bootstrap';

export default function Hero() {
    return (
        <div className="Heroimg p-5">
            <ReactBootStrap.Container>
                {/* <img src={HeroLogo} alt="HeroLogo"></img> */}
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <h1 className="fw-bolder">Innovative <br></br>Construction <br>
                        </br>Solutions</h1>
                        <p className="fw-normal">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <ReactBootStrap.Button variant="primary rounded-pill">Let's talk</ReactBootStrap.Button>{' '}
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        {/* Blank grid 6 */}
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

            </ReactBootStrap.Container>

        </div>
    )
}
