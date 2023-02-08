import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../Redux/action";
import { Form, Modal, Nav, Button } from "react-bootstrap";
import s from "./ModalLogin.module.css"


const ModalLogin = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const sign = {
      email: email,
      password: password,
    };
    dispatch(signIn(sign));
    setEmail("");
    setPassword("");
  };
  
  return (
    <Form
      fluid
      className={s.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Modal.Header >
        <Modal.Title
          style={{
            color: "var( --clr-10-G)",
          }}
        >
          <b>Inicia sesión</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      >
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <div>
            <Form.Label
           className={s.title}
            >
              Email
              <Form.Control
                type="email"
                {...register("name", { required: true })}
                onChange={emailChangeHandler}
                value={email}
                className={s.title}
              />
              {errors.name?.type === "required" && (
                <p
                className={s.title}
                >
                  No ingresaste tu email
                </p>
              )}
            </Form.Label>
          </div>
          <Form.Label
         className={s.title}
          >
            Contraseña
            <Form.Control
              type="password"
              {...register("password", { required: true })}
              onChange={passwordChangeHandler}
              value={password}
              className={s.title}
            />
            {errors.name?.type === "required" && (
              <p
              className={s.title}
              >
                No ingresaste tu contraseña
              </p>
            )}
          </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        // style={{
        //   backgroundColor: "var(--background-color)",
        //   backdropFilter: "blur(5px)",
        // }}
      >
        <Nav.Item>
          <Button
       
            variant="outline-warning"
            // className={s.title}
          
          >
            Olvidé mi contraseña
          </Button>
        </Nav.Item>
        <Button
          onClick={handleClose}
          type="submit"
          variant="btn btn-primary"
          // style={{
          //   border: "1px solid #ff3c00",
          //   color: "var(--clr-7-R)",
          //   width: "170px",
          // }}
          className="m-1"
        >
          Iniciar sesión
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default ModalLogin;