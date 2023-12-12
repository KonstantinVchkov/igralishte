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
const SearchFilter = ({ show, handleClose,products }: ISearchMenu) => {
  console.log('this are the products',products)
  const [searchedProduct, setSearchProducts] = useState<string>("");
  // const [products, setProducts] = useState<IProductProps[]>([]);
  // console.log(products);
  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProducts(e.target.value);
  };

  const submitSearchproducts = (e: any) => {
    e.preventDefault();
    router.push(
      `http://localhost:3000/searchProducts?category=${searchedProduct}`
    );
  };
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/products");

  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={style.fullWidthOffcanvas}
      >
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SearchFilter;

export const getServerSideProps:GetServerSideProps = async () => {
  return{
    props:{
      
    }
  }
}