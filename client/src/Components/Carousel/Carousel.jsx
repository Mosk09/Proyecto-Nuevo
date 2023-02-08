import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./carrusel.module.css"

export default function CarouselMain() {
  return (
    <div className={s.carrusel}>
      <Link to="/products">
        <Container
          className="mt-5 p-2"
          style={{
            // backgroundColor: "var(--background-color)",
            // backdropFilter: "blur(5px)",
            // border: "var(--border)",
            // boxShadow: "var(--box-shadow)",
          }}
        >
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="./image/carousel (1).png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="./image/carousel (2).png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="./image/carousel (3).png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Link>
    </div>
  );
}
