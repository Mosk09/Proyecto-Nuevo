import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
  cleanFilter,
  filterProductsPrice,
} from "../../Redux/action";
import FooterAlt from "../Footer/FooterAlt";
import Productos from "../Products/Productos";
import Promobar from "../Promobar/Promobar"

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import HeaderAlt from "../Header/HeaderAlt";
import NavbarMainAlt from "../NavbarMain/NavbarMainAlt";

export default function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [selectedSort, setSelectedSort] = useState("Price");
  const [brand, setBrand] = useState();

  const getBrand = () => {
    const marcas = AllProducts.map((e) => e.brand).sort(function (a, b) {
      if (a < b) return -1;
      else return 1;
    });
    const uniqueBrands = [...new Set(marcas)];
    setBrand(uniqueBrands);
  };

  const getCategories = () => {
    const categories = AllProducts.reduce((acc, product) => {
      acc[product.categories] = true;
      return acc;
    }, {});
    const uniqueCategories = Object.keys(categories);
    setCategory(uniqueCategories);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AllProducts.length) dispatch(getProducts());
    getCategories();
    getBrand();
  }, [dispatch, Products]);

  const handleChangeCategory = (value) => {
    setSelectedCategory(value);
    dispatch(filterProductsCategory(value));
  };
  const handleChangeBrand = (e) => {
    console.log(e.target.value)
    setSelectedBrand(e.target.value);
    dispatch(filterProductsBrand(e.target.value));
  };
  //filtro por precio usando filterProductsPrice de action.js
  const handleChangePrice = (value) => {
    setSelectedSort(value);
    dispatch(filterProductsPrice(value));
  };
  const handleCleanFilter = () => {
    setSelectedCategory("Categoria");
    setSelectedBrand("Marca");
    dispatch(filterProductsPrice("Price"));
    dispatch(cleanFilter());
  };

  return (
    <>
      <div>
      <Promobar/>
        <HeaderAlt />
        <NavbarMainAlt />
        <Container className="mt-5">
          <Row>
            <Col>
              <Card
                style={{
                  backgroundColor: "var(--background-color)",
                  backdropFilter: "blur(5px)",
                  border: "var(--border)",
                  boxShadow: "var(--box-shadow)",
                  borderRadius:"1px"
                }}
                className="rounded-4"
              >
                <Card.Header>
                  <h4
                    className="mt-3"
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    Filtros
                  </h4>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "var(--text-color)",
                      }}
                      className="mb-3"
                    >
                      Categoria
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedCategory}
                      onChange={(e) => handleChangeCategory(e.target.value)}
                      style={{
                        border: "var(--border)",
                      }}
                    >
                      <option>Categoria</option>
                      {category &&
                        category.filter(e=>e.length>2).map((e, i) => <option key={i}>{e}</option>)}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "var(--text-color)",
                      }}
                      className="mt-3 mb-3"
                    >
                      Marca
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedBrand}
                      onChange={handleChangeBrand}
                      style={{
                        border: "var(--border)",
                      }}
                    >
                      <option>Marca</option>
                      {brand &&
                        brand.map((e, i) => <option key={i}>{e}</option>)}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "var(--text-color)",
                      }}
                      className="mt-3 mb-3"
                    >
                      Precio
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => handleChangePrice(e.target.value)}
                      style={{
                        border: "var(--border)",
                      }}
                    >
                      <option value="Mayor">Mayor a menor</option>
                      <option value="Menor">Menor a mayor</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    className="mt-5"
                    variant="outline-warning"
                    onClick={() => handleCleanFilter()}
                    style={{
                      border: "var(--border)",
                      color: "var(--text-color)",
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <div className="col-9">
              <div className="row">
                <Productos />
              </div>
            </div>
          </Row>
        </Container>
        <FooterAlt />
      </div>
    </>
  );
}
