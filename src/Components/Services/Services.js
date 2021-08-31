import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Construction from "../../images/construction icon.svg";
import Supply from "../../images/supply icon.svg";
import Development from "../../images/development icon.svg";
import Consultancy from "../../images/consultancy icon.svg";
import "./Services.css";
import { Helmet } from 'react-helmet';


export default function Services() {

        return (
            <div>
                <ReactBootStrap.Container>
                    <h1 class="text-center pb-4 fw-bolder">Our Services</h1>
                    <ReactBootStrap.Row>

                        <ReactBootStrap.Col>
                            <div class="text-center p-3 effect rounded" id="">
                                <img src={Construction} alt="" class="img-fluid pt-3" ></img>
                                <p class="text-center fw-bolder pt-3">Construction</p>
                            </div>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col>
                            <div class="text-center p-3 effect rounded ">
                                <img src={Supply} alt="" class="img-fluid pt-3"></img>
                                <p class="text-center fw-bolder pt-3">Supply</p>
                            </div>

                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col>
                            <div class="text-center p-3 effect rounded">
                                <img src={Development} alt="" class="img-fluid pt-3"></img>
                                <p class="text-center fw-bolder pt-3">Development</p>
                            </div>

                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col>
                            <div class="text-center p-3 effect rounded ">
                                <img src={Consultancy} alt="" class="img-fluid pt-3"></img>
                                <p class="text-center fw-bolder pt-3">Consultancy</p>
                            </div>

                        </ReactBootStrap.Col>

                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        )
    }
