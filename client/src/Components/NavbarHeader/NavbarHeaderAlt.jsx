import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ModalSign from "../ModalSign/ModalSign";
import s from "./NavbarHeaderAlt.module.css";

export default function NavbarHeaderAlt() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const idLocalStorge = localStorage.getItem("id");
  const userLocalStorage = localStorage.getItem("admin");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const admin = JSON.parse(localStorage.getItem("admin"))
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const onClickAdmin = () => {
    navigate("/admin");
  };

  const onClickProfile = () => {
    navigate("/profile");
  };
  const handleAdmin =()=>{
    navigate("/admin")
  }
  return (
    <>
      {!idLocalStorge ? (
        <>
          <button className={s.user} onClick={handleShow}>
            <i className="bi bi-person-circle"></i>
          </button>
        </>
      ) : (
        <div className={s.contButon}>
          <button className={s.user} onClick={onClickProfile}>
            <i className="bi bi-person-check"></i>
          </button>
          {
        admin? <button className={s.butonA}onClick={handleAdmin}>Admin</button>:null
      }
          <button className={s.user} onClick={signOut}>
            <i className="bi bi-box-arrow-left"></i>
          </button>
        </div>
      )}

      <ModalSign show={show} handleClose={handleClose} />
    </>
  );
}
