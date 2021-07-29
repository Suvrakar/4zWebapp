import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import "./LatestProject.css";
import building1 from "../../images/building 1.png"


export default function LatestProject() {
    return (
        <div className="">
            <h1 class="text-center">Our Latest Projects</h1>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <div class="text-center">
                    <ReactBootStrap.Button variant="primary">Primary</ReactBootStrap.Button>{' '}
                </div>
             

                {/* <div className="d-flex flex-row">
                    <div className="p-2">
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="ProjectImg">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </div>
                </div> */}

       

        </div >
    )
}
