import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Construction from "../../images/construction icon.svg";
import Supply from "../../images/supply icon.svg";
import Development from "../../images/development icon.svg";
import Consultancy from "../../images/consultancy icon.svg";


export default function Services() {
    return (
        <div>

            <ReactBootStrap.Container>
                <h1 class="text-center">Our Services</h1>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Construction} alt="" class="img-fluid" ></img>
                            <p class="text-center">Construction</p>
                        </div>

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Supply} alt="" class="img-fluid"></img>
                            <p class="text-center">Supply</p>
                        </div>

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Development} alt="" class="img-fluid"></img>
                            <p class="text-center">Development</p>
                        </div>

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center">
                            <img src={Consultancy} alt="" class="img-fluid"></img>
                            <p class="text-center">Consultancy</p>
                        </div>

                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </div>
    )
}
