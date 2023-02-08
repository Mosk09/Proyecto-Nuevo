import { useForm } from "react-hook-form";
import { postProduct } from "../../Redux/action";
import { useDispatch } from "react-redux";
import stl from "./FormProducts.module.css";
import UploadImages from "../UploadImages/UploadImages";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function MyForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(postProduct(data));
    swal("Se ha creado el producto correctamente");
    navigate("/admin");
  };

  return (
    <>
      <Container fluid="xxl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={stl.title}></div>
          <div>
            <Form.Group className={stl.container} controlId="formBasicEmail">
              <div className={stl.item}>
                <Form.Label>
                  Nombre:
                  <Form.Control
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <p>se requiere nombre </p>
                  )}
                </Form.Label>
              </div>
              <div className={stl.item}>
                <UploadImages />
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Marca:
                  <Form.Control type="text" {...register("brand")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Precio:
                  <Form.Control
                    type="number"
                    step="0.01"
                    {...register("price", { required: true })}
                  />
                  {errors.price?.type === "required" && (
                    <p>se requiere precio </p>
                  )}
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Cantidad:
                  <Form.Control
                    type="number"
                    {...register("quantity", { required: true })}
                  />
                  {errors.quantity?.type === "required" && (
                    <p>se requiere cantidad </p>
                  )}
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Compatible:
                  <Form.Control type="text" {...register("compatible")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Favoritos:
                  <Form.Control type="text" {...register("favorites")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Calificación:
                  <Form.Control type="text" {...register("calification")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Comentarios:
                  <Form.Control type="text" {...register("comments")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Categorias:
                  <Form.Control type="text" {...register("categories")} />
                </Form.Label>
              </div>
              <div className={stl.item}>
                <Form.Label>
                  Descripción:
                  <Form.Control type="text" {...register("description")} />
                </Form.Label>
              </div>
              <div>
                <Button className="mt-3" variant="outline-danger" type="submit">
                  Crear
                </Button>
              </div>
            </Form.Group>
          </div>
        </form>
      </Container>
    </>
  );
}
