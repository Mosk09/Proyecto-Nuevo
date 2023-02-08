import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import s from "./CardFeaturesProducts.module.css"

export default function CardFeaturedProductAlt({ num }) {
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = (e) => {
    if (e) {
      dispatch(getDetail(e));
      navigate(`/product/${e}`);
    }
  };
  return (
   <div className={s.cardPadre}>
        <div className={s.card} key={oneProduct._id} onClick={()=>handleDetail(oneProduct._id)}>
          <img className={s.img} src={oneProduct.image} />
        </div>
   <h5 className={s.h5}>{oneProduct.name.split(" ").slice(0,1)}</h5>
   </div>

  );
}
