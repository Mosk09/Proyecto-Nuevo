import {
  Title,
  Text,
  TabList,
  Tab,
  ColGrid,
  Card,
  Block,
  Metric,
} from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableUser from "./TableUser";
import TableProduct from "./TableProduct";
import { useNavigate } from "react-router-dom";

const DashboardBase = () => {
  const [selectedView, setSelectedView] = useState(1);
  const navigate = useNavigate()
const handleHome =()=>{
  navigate("/")
}
  return (
    <Card>
      <Metric color="teal" marginTop="mt-10" text style >
      <Title marginTop="mt-10">
        <button onClick={handleHome}>Volver al Home</button>
        <img alt="logo" src="/Full_Stack__9_-removebg-preview.png" style={{ position:"absolute", top:"0px", right:"15px", width:"250px" }} />
      </Title>
        Perfil de Administrador
      </Metric>

      <TabList
        defaultValue={selectedView}
        onValueChange={(value) => setSelectedView(value)}
        marginTop="mt-6"
        color="orange"
      >
        <Tab value={1} text="Principal" />
        <Tab value={2} text="Usuarios" />
        <Tab value={3} text="Productos" />
      </TabList>

      {selectedView === 1 ? (
        <>
          <CardGridMap />

          <Block marginTop="mt-6">
            <ChartDonut />
          </Block>
        </>
      ) : (
        <></>
      )}

      {selectedView === 2 ? (
        <Block marginTop="mt-6">
          <TableUser />
        </Block>
      ) : (
        <></>
      )}

      {selectedView === 3 ? (
        <Block marginTop="mt-6">
          <TableProduct />
        </Block>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default DashboardBase;
