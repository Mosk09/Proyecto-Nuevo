import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Checkbox from "../CheckBox/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import { Card, ListGroup, Button } from "react-bootstrap";


export default function CardFeaturedProducts({ num }) {
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
const handleDetail = (e) => {
  if(e){
dispatch(getDetail(e));
navigate(`/product/${e}`);
}
};
return (
    <Card
      className="m-3"
      style={{
        width: "18rem",
        backgroundColor: "var(--background-color)",
        backdropFilter: "blur(5px)",
        border: "var(--border)",
        boxShadow: "var(--box-shadow)",
      }}
    >
      <Link to={`/product/${oneProduct._id}`}>
        <Card.Img
          variant="top"
          src={oneProduct.image}
          style={{
            objectFit: "contain",
            marginTop: "14px",
            width: "16rem",
            height: "16rem",
            border: "var(--border)",
            background: "#fff",
          }}
        />
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            textWeight: "bold",
          }}
        >
          Descuento: %7
        </Card.Title>
        <Card.Text
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            textWeight: "bold",
          }}
        >
          {oneProduct.name.slice(0, 30)}...
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            textAlign: "start",
          }}
        >
          $ regular: ${oneProduct.price}
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            fontSize: "17px",
            textAlign: "start",
          }}
        >
          $ con descuento: ${oneProduct.price - oneProduct.price * 0.07}
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            textAlign: "start",
          }}
        >
          $ de envio: $500
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
            textAlign: "start",
          }}
        >
          Disponibles: {oneProduct.quantity}
        </ListGroup.Item>
      </ListGroup>

      <Card.Body
        style={{
          color: "var(--text-color)",
        }}
      >
        <Link to={`/product/${oneProduct._id}`}>
          <Button
            variant="outline-warning"
            style={{ border: "var(--border)", color: "var(--text-color)" }}
            onClick={()=>handleDetail(oneProduct._id)}
          >
            Ver detalles
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}