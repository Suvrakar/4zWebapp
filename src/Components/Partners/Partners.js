import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import BDarmy from "../../images/Bangladesh Army Logo.svg";
import Navy from "../../images/Bangladesh Navy Logo.svg";
import "./Partners.css"



export default function Partners() {
    return (
        <div>

            <ReactBootStrap.Container>
                <h1 class="text-center fw-bolder pt-5">Our Partners</h1>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={BDarmy} alt="" class="img-fluid" ></img>
                            <p class="text-center fw-bolder pt-3">Bangladesh Army</p>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Navy} alt="" class="img-fluid" ></img>
                            <p class="text-center fw-bolder pt-3">Bangladesh Navy</p>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <div class="text-center py-4">
                    <ReactBootStrap.Button variant="primary rounded-pill colorBlue">All Partners</ReactBootStrap.Button>{' '}
                </div>
            </ReactBootStrap.Container>
        </div>
    )
}
