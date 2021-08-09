import React from 'react'
import HeroLogo from "../../images/BannerImage.png"
import "./Hero.css"
import * as ReactBootStrap from 'react-bootstrap';

export default function Hero() {
    return (
        <div className="Heroimg">
            <div class="wrap">
                <ReactBootStrap.Container>
                    {/* <img src={HeroLogo} alt="HeroLogo"></img> */}
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                            <div className="allText">
                            <h1 className="fw-bolder">Innovative <br></br>Construction <br>
                            </br>Solutions</h1>
                            <p className="fw-normal">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <ReactBootStrap.Button variant="primary rounded-pill blue">Let's talk</ReactBootStrap.Button>{' '}
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            {/* Blank grid 6 */}
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>


                <div class="bg"></div>
            </div>

        </div>
    )
}
