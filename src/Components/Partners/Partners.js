import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import BDarmy from "../../images/Bangladesh Army Logo.svg";
import Navy from "../../images/Bangladesh Navy Logo.svg";



export default function Partners() {
    return (
        <div>

            <ReactBootStrap.Container>
                <h1 class="text-center">Our Partners</h1>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={BDarmy} alt="" class="img-fluid" ></img>
                            <p class="text-center">Bangladdesh Army</p>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Navy} alt="" class="img-fluid" ></img>
                            <p class="text-center">Bangladdesh Navy</p>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <div class="text-center">
                    <ReactBootStrap.Button variant="primary">Primary</ReactBootStrap.Button>{' '}
                </div>
            </ReactBootStrap.Container>
        </div>
    )
}
