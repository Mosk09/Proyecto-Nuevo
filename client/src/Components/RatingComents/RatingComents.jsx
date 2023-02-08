import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putCalificationRating } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import swal from "sweetalert";
import s from "./RatingComents.module.css";

export default function RatingComents({ props }) {
  const pepe = props;
  const dispatch = useDispatch();

  const [rating, setRating] = useState();
  useEffect(() => {
    if (props._id) {
      setRating(pepe);
    }
  }, [props._id]);

  const handleChangeRating = (e) => {
    setRating({
      ...rating,
      calification: parseInt(e.target.value),
    });
  };
  const handleComents = (e) => {
    setRating({
      ...rating,
      coments: e.target.value,
    });
  };
  const handleClick = (e) => {
    if (rating.coments === "") {
      swal("necesitas poner un comentario");
    } else dispatch(putCalificationRating(rating));
    setRating({});
    swal("Gracias por dejar tu valoracion");
  };
  return (
    <Container 
      style={
        {
          // backgroundColor: "var(--background-color)",
          // backdropFilter: "blur(5px)",
          // border: "var(--border)",
          // boxShadow: "var(--box-shadow)",
        }
      }
      expand="lg"
      className="rounded-4 mb-xxl-5 mt-xxl-5 "
    >
      <h5
        style={{
          color: "var(--text-color)",
        }}
        className="mt-3"
      >
        Califica este producto
      </h5>
      <Row className="justify-content-md-center">
        <Col>
          <div className={s.container}>
            <div className={s.starWidget}>
              <input
                type="radio"
                onClick={() =>
                  setRating({
                    ...rating,
                    calification: 1,
                  })
                }
                className={s.input}
                name="rate"
              />1

              <input
                type="radio"
                onClick={() =>
                  setRating({
                    ...rating,
                    calification: 2,
                  })
                }
                className={s.input}
                name="rate"
              />2

              <input
                type="radio"
                onClick={() =>
                  setRating({
                    ...rating,
                    calification: 3,
                  })
                }
                className={s.input}
                name="rate"
              />3

              <input
                type="radio"
                onClick={() =>
                  setRating({
                    ...rating,
                    calification: 4,
                  })
                }
                className={s.input}
                name="rate"
              />4

              <input
                type="radio"
                onClick={() =>
                  setRating({
                    ...rating,
                    calification: 5,
                  })
                }
                name="rate"
                className={s.input}
              />5
            </div>
          </div>
          {/* 
          <Form.Check type="radio" value="1" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "var(--text-color)",
              fontSize: "21px",
            }}
          >
            1
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="2" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "var(--text-color)",
              fontSize: "21px",
            }}
          >
            2
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="3" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "var(--text-color)",
              fontSize: "21px",
            }}
          >
            3
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="4" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "var(--text-color)",
              fontSize: "21px",
            }}
          >
            4
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="5" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "var(--text-color)",
              fontSize: "21px",
            }}
          >
            5
          </Form.Text> */}
        </Col>
        <Col xs={6}>
          <InputGroup>
            <Form.Control
              placeholder="Deja tus comentarios"
              style={{
                // border: "var(--border)",
                borderRadius: "1px",
              }}
              onChange={handleComents}
            ></Form.Control>
          </InputGroup>
        </Col>
        <Col>
          <button className={s.buton} onClick={handleClick}>
            Puntuar
          </button>
        </Col>
      </Row>
    </Container>
  );
}
