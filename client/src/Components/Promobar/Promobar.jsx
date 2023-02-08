
import React from "react";
import s from "./Promobar.module.css"

export default function Promobar() {
  return (
    <>
      <div className={s.container} >
      <i className={`bi bi-bag-check-fill ${s.icon}`}></i>
        <h3 className={s.h3}> Black Friday</h3>
        <span className={s.span}> 10% DESCUENTO</span>
      </div>
    </>
  );
}