import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, putUser, remove } from "../../Redux/action";
import Paypal from "../Paypal/Papypal";
import s from "./CartAlt.module.css";
import swal from "sweetalert";
import Promobar from "../Promobar/Promobar";
import HeaderAlt from "../Header/HeaderAlt";
import NavbarMainAlt from "../NavbarMain/NavbarMainAlt";

export default function CartAlt() {
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
    dispatch(add(cart.length))
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
        dispatch(remove(cart.length))
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
        dispatch(remove(1))
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
    <div >
      <Promobar />
      <HeaderAlt />
      <NavbarMainAlt />
      {cart==="[]" || !cart?.length ? (
        <div className={s.divTitle}>
          <h1 className={s.h1}>El carrito esta vacio</h1>
        </div>
      ) : (
        <div className={s.container}>
        <table className={s.table}>
          <thead>
            <tr className={s.tdTitle}>
              <td>Borrar</td>
              <td>Imagen</td>
              <td>Producto</td>
              <td>Precio</td>
              <td>Cantidad</td>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {cart?.map((e, i) => (
              <tr key={i}>
                <td value="1">
                  <button className={s.buton3} onClick={() => deleteProduct(e)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
                <td value="2">
                  <img src={e.image} className={s.img} />
                </td>
                <td>
                  <p>{e.name.split(",", 2)}</p>
                </td>
                <td>
                  <button
                    className={s.buton1}
                    onClick={() => restOneProduct(e)}
                  >
                    <i className="bi bi-dash-circle-dotted"></i>
                  </button>
                  <span className={s.span}> {e.qty} </span>
                  <button className={s.buton1} onClick={() => addOneProduct(e)}>
                    <i className="bi bi-plus-circle-dotted"></i>
                  </button>
                </td>
                <td>
                  <h5 className={s.h5}>$ {e.price}</h5>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <h2 className={s.h2}>Total: ${total}</h2>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      )}
      <div className={s.backbuton}>
        <button onClick={handlePageProducts} className={s.back1}>
          Volver a productos
        </button>
        <button onClick={cleanCart} className={s.back}>
          Limpiar carrito
        </button>
        {!idLocal ? (
          <button onClick={HandleBack} className={s.back2}>
            COMPRAR
          </button>
        ) : (
          <Paypal className={s.paypal} price={total} />
        )}
      </div>
    </div>
  );
}
