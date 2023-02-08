import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts, putProduct } from "../../Redux/action";
import {
  Button,
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import swal from "sweetalert";

const TableProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const productsDeleted = useSelector((state) => state.productDeleted);
const [prod, setProd] = useState([])
const [prodDeleted, setProdDeleted] = useState([])
const [inputDescuento, setInputDescuento] = useState()

  useEffect(() => {
  !products.length && dispatch(getProducts());
    setProd(products)
    setProdDeleted(productsDeleted)
  }, [products]);

  const noDisponible = (id) => {
    swal({
      title: "Deshabilitaras",
      text: "Seguro que quieres deshabilitar el producto?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
      const deleted = {deleted: true};
      dispatch(putProduct(id, deleted));
      swal({ text: "Producto deshabilitado", icon: "success", timer: 800 })
      // window.location.reload()
    }
      else return})
  };

  const disponible = (id) => {
    swal({
      title: "Habilitaras",
      text: "Seguro que quieres habilitar el producto?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
      const nodeleted = {deleted: false};
      dispatch(putProduct(id, nodeleted));
      swal({ text: "Producto habilitado", icon: "success", timer: 800 })
      // window.location.reload()
    }
      else return})
  };

  const createClick = () => {
    navigate("/form");
  };

  const editClick = (id) => {
    navigate(`/admin/editproduct/${id}`);
  };

  const deleteClick = (id) => {
    dispatch(deleteProduct(id));
    alert("Producto eliminado");
    window.location.reload();
  };
  const handleChangeInput=(e)=>{
    setInputDescuento(e.target.value)
  }
  const handleDescuento=(id)=>{
    swal({
      title: "Cambiar Descuento",
      text: "Seguro que quieres cambiar el 6 de Descuento??",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
      const desc = {discount:inputDescuento};
      dispatch(putProduct(id, desc));
      swal({ text: "Producto con nuevo Descuento", icon: "success", timer: 800 })
      console.log(desc)
    }
      else return})
  }
  return (
    <Card decoration="top" decorationColor="teal">
      <Title>Lista de productos</Title>
      <Button
        size="xs"
        onClick={createClick}
        variant="secondary"
        marginTop="mt-3"
        color="orange"
      >
        Crear producto
      </Button>
      <Table marginTop="mt-5">
        <TableHead>
          <TableRow>
          <TableHeaderCell>Imagen</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>% Descuento</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Disponible</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prod &&
            prod.map((item) => (
              <TableRow key={item._id}>
                 <TableCell><img src={item.image} style={{width:"50px"}}/></TableCell>
                <TableCell>{item.name.slice(0, 60)}</TableCell>
                <TableCell><input style={{width:"40px"}} onChange={handleChangeInput}type="number" placeholder={item.discount}/>
                <button onClick={()=>handleDescuento(item._id)}>Up</button>
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <Toggle
                  defaultValue={item.deleted === true || item.deleted === false}
                  onValueChange={() =>
                    item.deleted === true
                      ? disponible(item._id)
                      : noDisponible(item._id)
                  }
                  color="red"
                >
                  <ToggleItem value={item.deleted === false} text="SI" />
                  <ToggleItem value={item.deleted === true} text="NO" />
                </Toggle>
                <Flex
                  justifyContent="justify-end"
                  spaceX="space-x-2"
                  marginTop="mt-3"
                  vertical-align="middle"
                >
                  <Button
                    size="xs"
                    variant="secondary"
                    onClick={() => editClick(item._id)}
                    color="orange"
                  >
                    Editar
                  </Button>
                  <Button
                    size="xs"
                    variant="secondary"
                    onClick={() => deleteClick(item._id)}
                    color="orange"
                  >
                    Eliminar
                  </Button>
                </Flex>
              </TableRow>
            ))}
        </TableBody>
        <TableBody>
          {prodDeleted &&
            prodDeleted.map((item) => (
              <TableRow key={item._id} >
                 <TableCell><img src={item.image} alt="hola" style={{width:"50px",opacity:"0.5"}}/></TableCell>
                <TableCell >{item.name.slice(0, 60)}</TableCell>
                <TableCell>${item.price}</TableCell>
                <Toggle
                  defaultValue={item.deleted === true || item.deleted === false}
                  onValueChange={() =>
                    item.deleted === true
                      ? disponible(item._id)
                      : noDisponible(item._id)
                  }
                  color="red"
                >
                  <ToggleItem value={item.deleted === false} text="SI" />
                  <ToggleItem value={item.deleted === true} text="NO" />
                </Toggle>
                <Flex
                  justifyContent="justify-end"
                  spaceX="space-x-2"
                  marginTop="mt-3"
                  vertical-align="middle"
                >
                  <Button
                    size="xs"
                    variant="secondary"
                    onClick={() => editClick(item._id)}
                    color="orange"
                  >
                    Editar
                  </Button>
                  <Button
                    size="xs"
                    variant="secondary"
                    onClick={() => deleteClick(item._id)}
                    color="orange"
                  >
                    Eliminar
                  </Button>
                </Flex>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableProduct;
