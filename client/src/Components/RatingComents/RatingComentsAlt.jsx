import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putCalificationRating, getDetail, getComents } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import swal from "sweetalert";
import s from "./RatingComents.module.css";

export default function RatingComentsAlt({ props }) {
  const pepe = props;
  const dispatch = useDispatch();

  const [rating, setRating] = useState();
  const [comen, setComen] = useState("");
  useEffect(() => {
    if (props._id) {
      setRating(pepe);
    }
   
    
  }, [props._id]);

  const handleComents = (e) => {
   setComen(e.target.value)
    setRating({
      ...rating,
      coments: e.target.value,
    });
    
  };
  const handleClick = (e) => {
    if (rating.coments === ""|| rating.coments === []) {
      swal("necesitas poner un comentario");
    } else {dispatch(putCalificationRating(rating));
      dispatch(getComents(rating._id))
      setComen("")
    swal("Gracias por dejar tu valoracion");}
  };
  return (
    <div className={s.containerMaster}>
      <h5>Califica este producto</h5>
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
          />
          1
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
          />
          2
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
          />
          3
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
          />
          4
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
          />
          5
        </div>
      </div>
      <input 
      type="text"
      className={s.inputComents}
      placeholder="Deja tus comentarios"
            value={comen}
      onChange={handleComents}></input>
      <button className={s.buton} onClick={handleClick}>
        Puntuar
      </button>
    </div>
  );
}
