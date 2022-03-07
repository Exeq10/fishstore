import React from "react";
import imagen1 from "../assets/img/1.jpg";
import imagen2 from "../assets/img/2.jpg";
import imagen3 from "../assets/img/banner3.jpg";

import { Carousel } from "react-bootstrap";

function Contenedor() {
  return (
    <section className="contenedor">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Contenedor;
