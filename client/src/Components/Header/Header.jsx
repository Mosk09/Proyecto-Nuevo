import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Image, Row, Col, Button } from "react-bootstrap";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import LightMode from "../LightMode/LightMode";
import s from "./Header.module.css"
import SearchBarAlt from "../SearchBarMain/SerchBarAlt";

export default function Header() {

  const navigate = useNavigate();

  const handleCart = () => {
       navigate("/cart");
  };
  const handleHome = () => {
    navigate("/");
};

  return (
    <>
      <Container className="mt-3">
        <Navbar
          style={{
            backgroundColor: "var(--clr-1-R)",
            backdropFilter: "blur(5px)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            zIndex:"1",
          }}
          expand="lg"
          className="rounded-4"
        >
          <Container>
            <Col xs={2} className="p-3">
              <Navbar.Brand onClick={handleHome} style={{
           cursor:"pointer"
          }}>
                <Image fluid alt="logo" src="/Full_Stack__2_-removebg-preview.png" width="150" />
              </Navbar.Brand>
            </Col>
            <Col xs={8}>
              <Row className="mt-1">
                <SearchBarAlt />
              </Row>
              <Row>
                <NavbarHeader />
              </Row>
            </Col>
            <Col xs={2}>
              <div className={s.lightmodeAndCart}>
              <Button
             
                variant="outline-warning"
                onClick={handleCart}
                style={{
                  width:"auto",
                  height:"auto",
                  border: "none",
                  color: "var(--text-color)",
                  fontSize: "27px",          
                }}
                ><i className="bi bi-cart2"></i>
              </Button>
              <LightMode />
                </div>
            </Col>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
