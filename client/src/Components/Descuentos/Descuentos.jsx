import React from "react";
import { useSelector } from "react-redux";
import CardAlt from "../CardProducts/CardAlt"
import s from "./Descuentos.module.css"
export default function Descuento(){
    const products = useSelector(state=>state.allProducts)
    const descuentos= products.filter(e=> e.discount>0)

    
    return(
        <>
        <div className={s.divTitle}>
        <h2 className={s.h2}>Descuentos Irrecistibles</h2>

        </div>
        <div className={s.container}>
            {descuentos?.slice(0,4).map((e,i)=>(
                <CardAlt key={i} prop={e} />
                ))}
        </div>
                </>
    )
}