import React, { useEffect, useState } from "react";
import { Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { IProductProps, ISearchMenu } from "@/types/ProjectTypes";
import router from "next/router";
import axios from "axios";
import { GetServerSideProps } from "next";
import Product from "../Products/Product";
const SearchFilter = ({
  show,
  handleClose,
  products,
  handleFilter,
}: ISearchMenu) => {
  console.log("Products in SearchFilter:", products);
  const [searchedProduct, setSearchProducts] = useState<string>("");
  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchProducts(searchTerm);
    // handleFilter?.(searchTerm);
  };

  const submitSearchproducts = (e: any) => {
    e.preventDefault();
    router.push(
      `http://localhost:3000/searchProducts?category=${searchedProduct}`
    );
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={style.fullWidthOffcanvas}
      >
        <Offcanvas.Body className="color-black">
          <Form onSubmit={submitSearchproducts}>
            <Form.Group className="d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                onClick={handleClose}
                icon={faChevronLeft}
                style={{ color: "#c9cfd9", width: "20px" }}
                className="mr-2"
              />
              <Form.Control
                type="search"
                placeholder="Пребарувај..."
                value={searchedProduct}
                onChange={searchProducts}
                autoFocus
              />
            </Form.Group>
          </Form>
          {products &&
            products.map((item) => <Product key={item.id} {...item} />)}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SearchFilter;
