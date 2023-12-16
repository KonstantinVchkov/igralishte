import React, { useEffect, useState } from "react";
import { Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { IProductProps, ISearchMenu } from "@/types/ProjectTypes";
import axios from "axios";

import Product from "../Products/Product";
import Pagination from "../Pagination/Pagination";
import { getPaginatedProducts } from "@/utils/paginationFunction";
import Link from "next/link";
const SearchFilter = ({ show, handleClose }: ISearchMenu) => {
  const [searchedProduct, setSearchProducts] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const paginatedProducts = getPaginatedProducts(
    filteredProducts,
    currentPage,
    itemsPerPage
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      searchTerm = searchTerm.charAt(0).toLowerCase() + searchTerm.slice(1);
    }
    setSearchProducts(searchTerm);
  };
  const submitSearchproducts = (e: any) => {
    e.preventDefault();
    axios
      .get(`https://better-stole-lion.cyclic.app/products`)
      .then((res) => {
        const filtered = res.data.filter(
          (product: any) =>
            product.category.charAt(0).toLowerCase() +
              product.category.slice(1) ===
            searchedProduct
        );
        setFilteredProducts(filtered);
      })
      .catch((error) =>
        console.error("Error fetching filtered products:", error)
      );
  };
  const handleProductClick = () => {
    handleClose();
    setSearchProducts("");
    setFilteredProducts([]);
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={style.fullWidthOffcanvas}
      >
        <Offcanvas.Body className="color-black mx-auto d-flex flex-wrap">
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
          {paginatedProducts.map((item) => {
            return (
              <div
                key={item.id}
                className={style.filteredProduct}
                onClick={handleProductClick}
              >
                <Link href={`http://localhost:3000/products/${item.id}`}>
                  <Product {...item} />
                </Link>
              </div>
            );
          })}
          {filteredProducts.length > 0 && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredProducts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SearchFilter;
