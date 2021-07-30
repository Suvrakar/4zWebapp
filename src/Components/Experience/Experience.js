import React from 'react';
import * as ReactBootStrap from "react-bootstrap"
import "./Experience.css"
import CountUp from 'react-countup'

export default function Experience() {
    return (
        <div className="cover">

            <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div class="text-center text-light mt-5 p-5">
                            <h1 data-toggle="counterUp">
                                <CountUp start={0} end={25} duration={3} />
                            </h1>

                            <h3 >Years <br></br>
                                Experience
                            </h3>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <div class="text-center text-light mt-5 p-5">
                            <h1><CountUp start={0} end={328} duration={4} /></h1>
                            <h3>Projects <br></br>
                                Completed
                            </h3>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>


        </div>

    )
}
