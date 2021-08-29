import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { directors } from "../data";
import Fade from 'react-reveal/Fade';

export default function BoardOfDirectors() {
  directors.map((obj) => {
    return <h1>{obj.projectName}</h1>;
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <ReactBootStrap.Container>
        <ReactBootStrap.Row className="my-5">
          <ReactBootStrap.Col>
            <h1>
              Board of <br></br>
              Directors
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing
            </p>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <div class="text-center">
              <Carousel
                responsive={responsive}
                autoPlay="true"
                autoPlaySpeed="3000"
              >
                {directors.map((obj) => {
                  return (
                    <div>
                      <img src={obj.projectImg}></img>
                      <h5>{obj.projectName}</h5>
                    </div>
                  );
                })}
              </Carousel>
              ;
              <Fade bottom>
                <h1>React Reveal</h1>
              </Fade>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
