import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../../Redux/action";
import { Form, Modal, Button } from "react-bootstrap";
import s from "../ModalLogin/ModalLogin.module.css"

const ModalRegister = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

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
      name: name,
      email: email,
      password: password,
    };
    dispatch(signUp(sign));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form
    className={s.container}
      onSubmit={handleSubmit(onSubmit)}

    >
      <Modal.Header
        style={{
      
          backdropFilter: "blur(5px)",
        }}
      >
        <Modal.Title
          style={{
            color: "#198754",
          }}
        >
          <b>Registrate</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          // backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <div>
            <Form.Label
          className={s.title}
            >
              Nombre
              <Form.Control
                type="name"
                {...register("name", { required: true })}
                onChange={nameChangeHandler}
                value={name}
                className={s.title}
              />
              {errors.name?.type === "required" && (
                <p>No ingresaste tu nombre</p>
              )}
            </Form.Label>
          </div>
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
                <p>No ingresaste tu email </p>
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
              <p>No ingresaste tu contraseña </p>
            )}
          </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        style={{
          // backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Button
          onClick={handleClose}
          type="submit"
          variant="btn btn-success"
          // style={{
          //   border: "1px solid #198754",
          //   color: "#198754",
          //   width: "170px",
          // }}
          className="m-1"
        >
          Registrarse
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default ModalRegister;