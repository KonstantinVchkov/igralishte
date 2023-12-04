import React, { useState } from "react";
import {  Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { ISearchMenu } from "@/types/ProjectTypes";
const SearchFilter = ({ show, handleClose }: ISearchMenu) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={style.fullWidthOffcanvas}
      >
        <Offcanvas.Body>
          <Form>
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
