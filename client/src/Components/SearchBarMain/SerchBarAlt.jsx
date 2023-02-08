import React, { useState } from "react";
import s from "./SerchBarAlt.module.css";
import searchBarName from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBarAlt() {
  const dispatch = useDispatch();
  const [buscados, setBuscados] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setBuscados(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchBarName(buscados));
    navigate("/products");
  };

  return (
    <div className={s.serch}>     
            <input className={s.input} type="text" onChange={handleChange} placeholder="Buscar Productos"/>
            <button className={s.buton} onClick={handleClick}>
             <i className={ `${s.icon} bi bi-search`}></i>
            </button>
   
    </div>
  );
}
