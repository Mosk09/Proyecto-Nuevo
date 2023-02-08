import React from "react";
import Google from "../Google/Google";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import { Card, CardGroup, Modal } from "react-bootstrap";
import s from "./ModalSign.module.css"

export default function ModalSign({ show, handleClose }) {
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      //este estilo difumina el fondo detras del modal
      style={{
        backgroundColor: "var(--clr-9-025)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardGroup
         className={s.modal}
      >
        <Card
          style={{
            // backgroundColor: "var(--background-color)",
            backgroundColor: "var(--clr-9-025)",
            alignItems: "center",
          }}
        >
          <div>
            <ModalLogin handleClose={handleClose} />
          </div>
          <div>
            <ModalRegister handleClose={handleClose} />
          </div>
          <div>
            <Google handleClose={handleClose} />
          </div>
        </Card>
      </CardGroup>
    </Modal>
  );
}
