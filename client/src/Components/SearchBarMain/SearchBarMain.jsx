import React, { useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import searchBarName from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBarMain() {
  const dispatch = useDispatch();
  const [buscados, setBuscados] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setBuscados(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchBarName(buscados));
    navigate("/products");
  };

  return (
    <>
      <Container>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleChange}
              placeholder="¿Que estas buscando hoy?"
              style={{
                border: "var(--border)",
              }}
            />
            <Button
              variant="outline-warning"
              onClick={handleClick}
              style={{
                border: "var(--border)",
                color: "var(--text-color)",
              }}
            >
              <i className="bi bi-search "></i>
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
}
