//tomar comentarios de la base de datos y mostrarlos en el componente MostrarComentarios por cada producto por id

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComents } from "../../Redux/action";
import { Container, Row, Col } from "react-bootstrap";
import s from "./MostrarComentarios.module.css"
export default function MostrarComentarios( {props} ) {
    const dispatch = useDispatch();
    const coments1 = useSelector((state) => state.detail.coments);
    const [coments, setComents] = useState() 
    const promedio = useSelector((state) => state.detail.promedio); 


    useEffect(() => {
        !coments1 && dispatch(getComents(props._id));
        setComents(coments1)
    }, [coments, coments1?.length]);

    return (
        <Container
            style={{
              
                backgroundColor: " rgb(54, 54, 54)",
                backdropFilter: "blur(5px)",
                border: "1px solid #fff",
                boxShadow: "0 0 7px #fff",
                padding:"20px",
                margin:"20px"
            }}
            expand="lg"
            className="rounded-4"
        >
            <div className={s.titleComents}>
  
            <h5   style={{
               margin:"10px",
               color:"rgb(255, 0, 0)",
            }}>
                Comentarios
            </h5>
                </div>
            <Row className="justify-content-md-center">
                <Col>
                    {coments && coments?.map((coment, i) => (
                        <div className={s.divComents} key={i}>
                            <i className="bi bi-card-text">...</i>
                            <span className={s.p}>{coment}</span>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}


//mostrar comentarios