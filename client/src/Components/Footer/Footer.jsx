import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "var(--clr-1-R)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
          borderRadius:"15px"
        }}
        expand="lg"
      >
        <Navbar className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="/"
                style={{
                  color: "var(--text-color)",
                }}
              >
                ¿Cómo comprar?
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <h5 style={{ color: "var(--text-color)" }}>2023 The Fullstack Store</h5>
      </Container>
    </>
  );
}
