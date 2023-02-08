import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { putProduct } from "../../Redux/action";
import stl from "./FormProducts.module.css";
import UploadImages from "../UploadImages/UploadImages";
import { Container, Form, Button } from "react-bootstrap";

const EditProduct = () => {
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const product = products.filter((item) => item._id === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(putProduct(id, data));
    alert("Se ha modificado el producto correctamente");
    navigate("/admin");
  };

  return (
    <>
      {product &&
        product.map((item) => (
          <Container fluid="xxl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Form.Group
                  className="rounded-4"
                  style={{
                    marginTop: "21px",
                    marginBottom: "21px",
                    background: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "rgb(0 0 0 / 63%) 0px 20px 30px",
                    border: "rgba(15, 255, 195, 1)",
                    padding: "14px",
                  }}
                  controlId="formBasicEmail"
                >
                  <div className={stl.item}>
                    <Form.Label>
                      Nombre:
                      <Form.Control
                        type="text"
                        placeholder={item.name}
                        {...register("name", { required: true })}
                      />
                      {errors.name?.type === "required" && (
                        <p>se requiere el nombre</p>
                      )}
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <UploadImages />
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Marca:
                      <Form.Control
                        type="text"
                        placeholder={item.brand}
                        {...register("brand")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Precio:
                      <Form.Control
                        type="number"
                        step="0.01"
                        placeholder={item.price}
                        {...register("price", { required: true })}
                      />
                      {errors.price?.type === "required" && (
                        <p>se requiere el precio </p>
                      )}
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Cantidad:
                      <Form.Control
                        type="number"
                        placeholder={item.quantity}
                        {...register("quantity", { required: true })}
                      />
                      {errors.quantity?.type === "required" && (
                        <p>se requiere cantidad </p>
                      )}
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Descuento:
                      <Form.Control
                        type="number"
                        placeholder={item.discount}
                        {...register("discount")}
                      />
                     
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Compatible:
                      <Form.Control
                        type="text"
                        placeholder={item.compatible}
                        {...register("compatible")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Favoritos:
                      <Form.Control
                        type="text"
                        placeholder={item.favorites}
                        {...register("favorites")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Calificación:
                      <Form.Control
                        type="text"
                        placeholder={item.calification}
                        {...register("calification")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Comentarios:
                      <Form.Control
                        type="text"
                        placeholder={item.coments}
                        {...register("comments")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label>
                      Categorías:
                      <Form.Control
                        type="text"
                        placeholder={item.categories}
                        {...register("categories")}
                      />
                    </Form.Label>
                  </div>
                  <div className={stl.item}>
                    <Form.Label
                      style={{
                        border: "var(--border)",
                        color: "var(--text-color)",
                      }}
                    >
                      Descripción:
                      <Form.Control
                        type="text"
                        placeholder={item.description}
                        {...register("description")}
                      />
                    </Form.Label>
                  </div>
                  <div>
                    <Button
                      className="mt-3"
                      variant="outline-danger"
                      type="submit"
                    >
                      Editar
                    </Button>
                  </div>
                </Form.Group>
              </div>
            </form>
          </Container>
        ))}
    </>
  );
};

export default EditProduct;
