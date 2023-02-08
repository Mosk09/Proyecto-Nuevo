import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LightMode from "../LightMode/LightMode";
import s from "./HeaderAlt.module.css";
import SearchBarAlt from "../SearchBarMain/SerchBarAlt";
import NavbarHeaderAlt from "../NavbarHeader/NavbarHeaderAlt";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderAlt() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let num = useSelector((state) => state.num);

  useEffect(() => {}, [num]);
  const handleCart = () => {
    navigate("/cart");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={s.contenedor}>
        <img
          src="/Full_Stack__9_-removebg-preview.png"
          onClick={handleHome}
          className={s.logo}
        />
        <div className={s.contSerch}>
        <SearchBarAlt />
          <NavbarHeaderAlt />

          <div className={s.line} onClick={handleCart}></div>

          <button onClick={handleCart} className={s.buton}>
            <i className="bi bi-cart-check-fill">
            {num ? <span className={s.num}>{num}</span> : null}
            </i>
          </button>

          <div className={s.line} onClick={handleCart}></div>

          <LightMode />
        </div>
      </div>
    </>
  );
}
