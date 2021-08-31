import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./LatestProject.css";
import building1 from "../../images/building 1.png";
import building2 from "../../images/building 2.png";
import building3 from "../../images/building 3.png";
import building4 from "../../images/building 4.png";
import building5 from "../../images/building 5.png";
import building6 from "../../images/building 6.png";
import { projects } from "../../data";

export default function LatestProject() {
  let list = [
    [projects[0], projects[1], projects[2]],
    [projects[3], projects[4], projects[5]],
  ];
  return (
    <div className="padding-0 px-0">
      <ReactBootStrap.Container fluid>
        <h1 class="text-center fw-bolder py-3 mt-5">Our Latest Projects</h1>
        {list.map((y) => (
          <ReactBootStrap.Row>
            {y.map((x) => (
              <ReactBootStrap.Col className="padding-0 px-0">
                <div className="ProjectImg ourPrjct c">
                  <img src={x.projectImg} alt="Img1" class="image px-0"></img>
                  <div class="middle">
                    <div class="text">
                        <h4>{x.projectName}</h4>
                        {/* <p style={{overflow:"hidden"}}>{x.shortDes}</p> */}
                        </div>
                  </div>
                </div>
              </ReactBootStrap.Col>
            ))}
          </ReactBootStrap.Row>
        ))}

        <div class="text-center p-4">
          <ReactBootStrap.Button variant="primary rounded-pill blue ">
            All Projects
          </ReactBootStrap.Button>{" "}
        </div>
      </ReactBootStrap.Container>
    </div>
  );
}
