import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putUser } from "../../Redux/action";
import Paypal from "../Paypal/Papypal";
import s from "./Cart.module.css";
import swal from "sweetalert";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Promobar from "../Promobar/Promobar";
import HeaderAlt from "../Header/HeaderAlt";
import NavbarMainAlt from "../NavbarMain/NavbarMainAlt";

export default function Cart() {
  const cart1 = useSelector((state) => state.cart);
  const newCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(newCart));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const idLocal = localStorage.getItem("id");

  const addOneProduct = (product) => {
    setCount(count + 1);
    let pepe = cart;
    pepe?.map((item) =>
      item._id === product._id ? { ...item, qty: (item.qty += 1) } : item
    );
    setCart(pepe);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const restOneProduct = (product) => {
    setCount(count - 1);
    let pepe = cart;
    if (product.qty === 1) return;
    else {
      pepe?.map((item) =>
        item._id === product._id ? { ...item, qty: (item.qty -= 1) } : item
      );
      setCart(pepe);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (product) => {
    swal({
      title: "Eliminaras",
      text: "Seguro que quieres eliminar el producto?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        let pepe = cart.filter((ele) => ele._id !== product._id);
        if (pepe?.length === 0) setTotal(0);
        setCart(pepe);
        localStorage.setItem("cart", JSON.stringify(pepe));
        swal({ text: "Producto eliminado", icon: "success", timer: 800 });
      } else return;
    });
  };

  const cleanCart = () => {
    swal({
      title: "Eliminaras todo de tu carrito",
      text: "Seguro que quieres eliminar TODO?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        setTotal(0);
        swal({ text: "Carrito limpio", icon: "success", timer: 800 });
      } else return;
    });
  };

  const handlePageProducts = () => {
    navigate("/products");
  };
  const totalApagar = () => {
    let prod = cart.map((ele) => ele.price * ele.qty);
    prod = prod.reduce((acc, curr) => {
      acc += curr;
      return acc;
    });
    setTotal(prod);
  };
  const HandleBack = () => {
    if (!idLocal) {
      return swal({
        title: "Oooh!",
        text: "Debes loguearte",
        icon: "warning",
        button: "ok",
      });
    } else {
      dispatch(putUser(idLocal, cart));
    }
  };
  useEffect(() => {
    cart?.length < cart1.length && setCart(cart1);
    cart?.length && totalApagar();
  }, [cart, newCart, count, total]);

  return (
    <div>
      <Promobar />
      <HeaderAlt />
      <NavbarMainAlt />
      {cart?.items?.length === 0 ? (
        <div className={s.divTitle}>
          <h1 className={s.h1}>El carrito esta vacio</h1>
        </div>
      ) : (
        <div>
          <div className={s.divContainer}>
            {cart?.map((e, i) => (
              <div
                key={i}
                className={s.divCard}
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                }}
              >
                <img
                  src={e.image}
                  className={s.img}
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                />
                <div
                  className={s.title}
                  style={{
             
                    color: "var(--text-color)",
                  }}
                >
                  <h5
                    style={{
               
                      color: "var(--text-color)",
                    }}
                  >
                    {e.name.split(",", 2)}
                  </h5>
                </div>
                <div className={s.price}>
                  <div>
                    <button
                      style={{
                        border: "var(--border)",
                        color: "var(--text-color)",
                      }}
                      className={s.buton1}
                      onClick={() => restOneProduct(e)}
                    >
                      -
                    </button>
                    <span
                      style={{
                        border: "var(--border)",
                        color: "var(--text-color)",
                      }}
                      className={s.span}
                    > {e.qty} </span>
                    <button
                      style={{
                        border: "var(--border)",
                        color: "var(--text-color)",
                      }}
                      className={s.buton1}
                      onClick={() => addOneProduct(e)}
                    >
                      +
                    </button>
                  </div>
                  <h5
                    style={{
                      color: "var(--text-color)",
                    }}
                    className={s.h5}
                  >
                    $ {e.price}
                  </h5>
                </div>
                <button
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                  className={s.buton3}
                  onClick={() => deleteProduct(e)}
                >
                  X
                </button>
              </div>
            ))}
            <h2
              style={{
                border: "var(--border)",
                color: "var(--text-color)",
              }}
              className={s.h2}
            >
              Total: ${total}
            </h2>
          </div>
        </div>
      )}
      <div className={s.backbuton}>
        <Button
          onClick={handlePageProducts}
          variant="outline-warning"
          style={{
            height: "40px",
            border: "var(--border)",
            color: "var(--text-color)",
            backdropFilter: "blur(205px)",
          }}
          className="m-1"
        >
          Volver a productos
        </Button>
        <Button
          onClick={cleanCart}
          variant="outline-warning"
          style={{
            height: "40px",
            border: "var(--border)",
            color: "var(--text-color)",
            backdropFilter: "blur(205px)",
          }}
          className="m-1"
        >
          Limpiar carrito
        </Button>
        {!idLocal ? (
          <Button
            onClick={HandleBack}
            variant="outline-warning"
            style={{
              height: "40px",
              border: "var(--border)",
              color: "var(--text-color)",
              backdropFilter: "blur(205px)",
            }}
            className="m-1"
          >
            COMPRAR
          </Button>
        ) : (
          <Paypal className={s.paypal} price={total} />
        )}
      </div>
    </div>
  );
}
