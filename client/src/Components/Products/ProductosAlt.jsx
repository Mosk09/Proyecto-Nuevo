//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import { Container, Card, Button, Row, Image } from "react-bootstrap";
import CardAlt from "../CardProducts/CardAlt";

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState(products)
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(21);
  const [paginas, setPaginas] = useState([]);
  const cart = localStorage.getItem("cart");

  const [cartNew, setCartNew] = useState(JSON.parse(cart));
  let pages = [];

  useSelector((state) => state.getDetail);

  // useEffect(() => {
  //   // if(cart===null){
  //   //   setCartNew([])
  //   // localStorage.setItem("cart","[]")
  //   // }
  //   // setMaxPage(Math.ceil(products.length / 21));
  //   // if (maxPage > 1) {
  //   //   for (let i = 1; i < maxPage; i++) {
  //   //     pages.push(i);
  //   //   }
  //   //   setPaginas(pages);
  //   // } else setPaginas(pages);
  //   // setProduct(products)
  //   // setNum1(0)
  //   // setNum2(21)
  // }, [product, page, maxPage, num1, num2]);

  function handleNextPage() {
    if (num2 >= maxPage * 21) {
      return num1, num2;
    } else {
      setNum1(num1 + 21);
      setNum2(num2 + 21);
    }
  }

  function handlePrevPage() {
    if (num1 == 0) {
      return num1, num2;
    } else {
      setNum1(num1 - 21);
      setNum2(num2 - 21);
    }
  }

  const handleChangePagePerNum = (e) => {
    let n = e.target.value * 21;
    if (e.target.value == 1) {
      return setNum1(0), setNum2(21);
    } else setNum1(n);
    setNum2(n + 21);
  };
  return (
    <Container>
      {/* paginacion */}

      <Container className="m-3">
        {/* botones de paginacion bootstrap */}

        <Button
          onClick={handlePrevPage}
          variant="outline-warning"
          style={{ border: "var(--border)", color: "var(--text-color)", backdropFilter: "blur(825px)" }}
          className="m-1"
        >
          Anterior
        </Button>
        {paginas.length > 1 &&
          paginas.map((e, i) => (
            <Button
              key={i}
              value={e}
              onClick={handleChangePagePerNum}
              variant="outline-warning"
              style={{ border: "var(--border)", color: "var(--text-color)",backdropFilter: "blur(825px)" }}
              className="m-1"
            >
              {e}
            </Button>
          ))}
        <Button
          onClick={handleNextPage}
          variant="outline-warning"
          style={{ border: "var(--border)", color: "var(--text-color)",backdropFilter: "blur(825px)" }}
          className="m-1"
        >
          Siguiente
        </Button>
      </Container>

      {/* body de cards */}

      <Row>
        {/* mensaje de carga mientras se renderiza los productos */}

        {product?.length === 0 ? (
          <h1
            style={{
              color: "#ff3c00",
            }}
          >
            No hay productos con este Filtro
          </h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {/* card */}

        {product?.slice(num1, num2)?.map((product, i) => {
          return (
            <CardAlt key={i} prop={product} />
          );
        })}
      </Row>
    </Container>
  );
}
