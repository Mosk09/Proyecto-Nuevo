import React from "react";
import s from "./FooterAlt.module.css"


export default function FooterAlt() {
  return (
    <div className={s.container}>
        <div>

        <h5 className={s.h3} >Contacto</h5>
       <ul className={s.ul} >
        <li className={s.li}>Av. Emilio Olmos 188, X5000 Córdoba</li>
        <li className={s.li}>0810 7777 349</li>
        <li className={s.li}><i className="bi bi-whatsapp"></i> 3493441986</li>
        <li className={s.li}><i className="bi bi-envelope-at"></i> leomosconi9@gmail.com</li>
       </ul>
        </div>
        <div>
        <ul className={s.ul}>
        <li className={s.li}>Cambios y Devoluciones</li>
        <li className={s.li}>Envios a todo el pais</li>
        <li className={s.li}>Reclamos</li>
        <li className={s.li}>Trabaja con nosotros</li>
        <li className={s.li}>Se parte de la evolucion</li>
       </ul>
        </div>   
        <img src="/Full_Stack__9_-removebg-preview.png" className={s.logo}/>
    </div>
  );
}
