import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, putUser } from "../../Redux/action";
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

const TableUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleAdmin = (id) => {
    swal({
      title: "Deshabilitaras",
      text: "Seguro que quieres habilitar al usuario?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const admin = {
          admin: true,
        };
        dispatch(putUser(id, admin));
      swal({ text: "Se ha habilitado como administrador correctamente", icon: "success", timer: 800 })
      // window.location.reload()
    }
      else return})
  };
  const disabledHandleAdmin = (id) => {
    swal({
      title: "Deshabilitaras",
      text: "Seguro que quieres deshabilitar al usuario?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const admin = {
          admin: false,
        };
        dispatch(putUser(id, admin));
      swal({ text: "Se ha deshabilitado como administrador correctamente", icon: "success", timer: 800 })
      // window.location.reload()
    }
      else return})
  };
  const deleteClick = (id) => {
    dispatch(deleteUser(id));
    swal("User eliminado");
    window.location.reload();
  };

  return (
    <Card decoration="top" decorationColor="teal">
      <Title>Lista de usuarios</Title>
      <Table marginTop="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Admin</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.status}</TableCell>
                <Toggle
                  defaultValue={item.admin === true || item.admin === false}
                  onValueChange={() =>
                    item.admin === false
                      ? handleAdmin(item._id)
                      : disabledHandleAdmin(item._id)
                  }
                  color="orange"
                >
                  <ToggleItem value={item.admin === true} text="SI" />
                  <ToggleItem value={item.admin === false} text="NO" />
                </Toggle>
                <Flex
                  justifyContent="justify-end"
                  spaceX="space-x-2"
                  marginTop="mt-3"
                >
                  <Button
                    size="xs"
                    onClick={() => deleteClick(item._id)}
                    variant="secondary"
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

export default TableUser;
