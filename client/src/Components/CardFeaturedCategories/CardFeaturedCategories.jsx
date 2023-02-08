import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterProductsCategory } from "../../Redux/action";
import { Container, Button, Image } from "react-bootstrap";

export default function CardFeaturedCategories({ prop }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterProductsCategory(prop.name));
    navigate("/products");
  };

  return (
    <Container className="mt-3 mb-3">
      <Button
        onClick={handleClick}
        variant="outline-warning"
        style={{
          border: "var(--border)",
          backgroundImage: `url(${prop.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "var(--text-color)",
          borderRadius: "50%",
          height: "210px",
          width: "210px",
          boxShadow: "var(--box-shadow)",
        }}
      >
        <div style={{ backgroundColor: "var(--background-color)" }}>
          {prop.name}
        </div>
      </Button>
    </Container>
  );
}
