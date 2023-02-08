import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from "./CardPubli.module.css"

function CardPubli() {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("/products")
    }
  return (
    <div className={s.conteiner}>
    <div className={s.card}>
        <img className={s.img}src='https://cdn.shopify.com/s/files/1/0482/6126/7617/articles/M314_1080x.jpg?v=1633105598'/>
        <div div className={s.text}>
            <h3 className={s.h3}>Tecnología para llevar tu setup a otro nivel</h3>
            <p className={s.p}>Los mejores teclados TKL, mouse y los periféricos gamers que necesitás para llevar tu compu gamer a otro nivel, están acá.</p>
            <button onClick={handleClick} className={s.buton}>Ver Más</button>
        </div>
    </div>
        <div className={s.card}>
        <img className={s.img}src='https://d500.epimg.net/cincodias/imagenes/2020/12/02/gadgets/1606892606_250718_1606892726_sumario_normal.jpg'/>
        <div className={s.text}>
            <h3 className={s.h3}>El nuevo robot de cocina llegó a Argentina</h3>
            <p className={s.p}>Revolucioná tu cocina con la mejor ayudante y prepará las comidas más ricas de manera práctica; gracias a sus 30 funciones y miles de recetas vas a hacer una fiesta de sabores en cada plato.</p>
            <button className={s.buton} onClick={handleClick}>Conoce Más</button>
        </div>
    </div>
    </div>
  )
}

export default CardPubli