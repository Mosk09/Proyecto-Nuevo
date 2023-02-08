import React from "react";

import Carousel from "../Carousel/Carousel";

import stl from "./PromoArea.module.css";
import Container from "react-bootstrap";

export default function PromoArea() {
  return (
    <>
      <Container>
        <Carousel />
        <div className={stl.container}></div>
      </Container>
    </>
  );
}
