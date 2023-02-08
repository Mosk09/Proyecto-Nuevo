import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Checkbox from "../CheckBox/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import s from "./CardFeaturesProductAlt.module.css";


export default function CardAlt({ prop, handleAddCart }) {
  // console.log(handleAddCart)

  const [oneProduct, setOneProduct] = useState(prop);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const discount = prop.price-(prop.price*prop.discount/100)

 
const handleDetail = (e) => {
  if(e){
dispatch(getDetail(e));
navigate(`/product/${e}`);
}
};
return (
    <div className={s.card} >
   <img onClick={()=>handleDetail(prop._id)}className={s.img} src={prop.image}/>
   <p className={s.title}>{prop.name.slice(0, 30)}</p>
   <div className={s.cardPrice}>

   <hr className={s.hr}></hr>
   {
    prop.discount>0?
    <div className={s.divDisc}>
      <span className={s.discount}>${prop.price}</span>
      <span className={s.price}>$ {Math.ceil(discount)}</span>
    </div>:
    <span className={s.price}>$ {prop.price}</span>
   }
   {
     handleAddCart?<i onClick={()=>handleAddCart()}className={`bi bi-cart-plus-fill ${s.addCart}`}></i>: <span className={s.desc}>%{prop.discount}</span>
   }
   </div>

   </div>
  );
}