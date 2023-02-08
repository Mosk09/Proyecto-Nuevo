import React, { useEffect } from "react";
import { cleanFilter, filterProductsCategory, getCategories } from "../../Redux/action";

import { useDispatch, useSelector } from "react-redux";
import s from "./NavbarMainAlt.module.css";
import { useNavigate } from "react-router-dom";

export default function NavbarMainAlt() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    !category?.length && dispatch(getCategories());
  }, []);
  const handleClick = (e) => {   
    dispatch(cleanFilter())
    dispatch(filterProductsCategory(e.name));
    navigate("/products");
  };
  return (
    <div className={s.conteiner}>
      {/* <span className={s.span}>Categories</span> */}
              {category?.slice(0,10).map((e, i) => (
                <button className={s.buton} onClick={()=>handleClick(e)}key={i}>
                     {e.name}
                </button>
              ))} 
    </div>
  );
}
