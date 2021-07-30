import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import "./LatestProject.css";
import building1 from "../../images/building 1.png"
import building2 from "../../images/building 2.png"
import building3 from "../../images/building 3.png"
import building4 from "../../images/building 4.png"
import building5 from "../../images/building 5.png"
import building6 from "../../images/building 6.png"


export default function LatestProject() {
    return (
        <div className="padding-0">
            <ReactBootStrap.Container fluid>
                <h1 class="text-center fw-bolder py-3 mt-5">Our Latest Projects</h1>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg ">
                            <img src={building1} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg">
                            <img src={building2} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg">
                            <img src={building3} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
<br></br>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg">
                            <img src={building4} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg">
                            <img src={building5} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4}>
                        <div className="ProjectImg">
                            <img src={building6} alt="Img1"></img>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <div class="text-center p-4">
                    <ReactBootStrap.Button variant="primary rounded-pill">All Projects ></ReactBootStrap.Button>{' '}
                </div>

            </ReactBootStrap.Container>


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
