import React, { useState } from "react";
import style from "./style.module.css";
import FilterSearchIcon from "../../../public/images/group-55.svg";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
import Header from "../Header/Header";
const FilterProducts = () => {
  const [show,setShow] = useState(false)
  const filterSideBar = () => {
    setShow(!show)
  }
  return (
    <div className={style.FilteredMenu}>
      <img src={`/images/group-55.svg`} alt="Filter Products" onClick={filterSideBar}/>
      <Offcanvas placement="end" show={show} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Header />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <button onClick={filterSideBar}>otkazi</button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default FilterProducts;
