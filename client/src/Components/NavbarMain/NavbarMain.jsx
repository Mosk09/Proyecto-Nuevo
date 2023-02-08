import React, { useEffect } from "react";
import { getCategories } from "../../Redux/action";
import NavButton from "../NavButton/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarMain() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !category.length && dispatch(getCategories());
  }, []);

  return (
    <>
      <Container className="mt-3 ">
        <Navbar
          style={{
            backgroundColor: "var(--background-color)",
            backdropFilter: "blur(5px)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
          }}
          expand="lg"
          className="rounded-4 justify-content-center"
        >
          <Nav className="justify-content-center">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {category?.map((e, i) => (
                <div key={i}>
                  <NavButton prop={e} />
                </div>
              ))}
            </div>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
