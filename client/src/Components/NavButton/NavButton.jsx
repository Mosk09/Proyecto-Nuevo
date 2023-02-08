import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterProductsCategory } from "../../Redux/action";
import { Container, FormText, Nav } from "react-bootstrap";
import { Button} from "react-bootstrap";
export default function NavButton({ prop }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterProductsCategory(prop.name));
    navigate("/products");
  };

  return (
    <Container>
      <Button onClick={handleClick} variant="outline-warning"    
      style={{
                    border: "none",
                    color: "var(--text-color)",

                  }}>
        {prop.name}
      </Button>
    </Container>
  );
}
