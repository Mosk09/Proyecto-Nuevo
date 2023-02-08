import React, { useEffect, useState } from "react";
import HeaderAlt from "../Header/HeaderAlt";
import NavbarMainAlt from "../NavbarMain/NavbarMainAlt";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RatingComents from "../RatingComents/RatingComents";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import MostrarComentarios from "../MostrarComentarios/MostrarComentarios";
import { add, getDetail } from "../../Redux/action";
import Promobar from "../Promobar/Promobar";
import s from "./ProductDetails.module.css";
import RatingComentsAlt from "../RatingComents/RatingComentsAlt";
import FooterAlt from "../Footer/FooterAlt"
const ProductDetailAlt = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const cart = localStorage.getItem("cart") || "[]";
  const [cartNew, setCartNew] = useState(JSON.parse(cart));
  const coments1 = useSelector((state) => state.detail.coments);
  const cart1 = useSelector((state) => state.cart);
  const idUser = localStorage.getItem("id")
  useEffect(() => {
    // details._id===undefined && dispatch(getDetail(id));
  }, [details, id,coments1?.length]);

  const handleAddCart = (product) => {
    dispatch(add(cartNew.length));
    let itemInCart = cartNew.find((ele) => ele._id === product._id);
    let pepe = cartNew;
    if (itemInCart) {
      pepe?.map((item) =>
        item._id === product._id ? { ...item, qty: (item.qty += 1) } : item
      );
      setCartNew(pepe);
      localStorage.setItem("cart", JSON.stringify(pepe));
    } else {
      product.qty = 1;
      pepe = [...pepe, product];
      setCartNew(pepe);
      localStorage.setItem("cart", JSON.stringify(pepe));
    }
  };
  return (
    <>
      <Promobar />
      <HeaderAlt />
      <NavbarMainAlt />
      {details && (
        <div className={s.container0}>
          <div className={s.container}>
            <div className={s.container2}>
            <div className={s.containerImg}>

              <img src={details.image} className={s.img} />
            </div>
              <div className={s.containerTxt}>
                <h4 className={s.h4}>{details.name}</h4>
                <div className={s.container3}>
                  {details.promedio && (
                    <div>
                      <span className={s.rating}>
                        {Math.ceil(details.promedio)}{" "}
                      </span>
                      <i className={`"bi bi-star-fill ${s.rating}`}></i>
              </div>
              )}
                      <h4 className={s.h4}>
              ${" "}
              {details.discount > 0
                ? Math.ceil(details.price - (details.price * details.discount) / 100)
                : details.price}
            </h4>
                  <button
                    className={s.buton}
                    onClick={() => handleAddCart(details)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
            <div className={s.containerTxt1}>
            <h2>Descripcion</h2>
            <p>Marca: {details.brand}</p>
            <p>{details.description}</p>
            <p>Unidades disponibles: {details.quantity}</p>

        
          </div>
          </div>
          <div className={s.container4}>
            {
              idUser?
              <RatingComentsAlt props={details} />: null
            }
     
            <MostrarComentarios props={details} />
          </div>
        </div>
      )}
      <FooterAlt/>
    </>
  );
};

export default ProductDetailAlt;
