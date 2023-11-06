// HamburgerMenu.js
import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import { IHamMenu } from "@/types/GlobalTypes";
import NavBar from "./NavBar";
import { Offcanvas } from "react-bootstrap";

const HamburgerMenu = ({ open, toggleHamMenu }: IHamMenu) => {
  return (
    <Offcanvas
      show={open}
      onHide={toggleHamMenu}
      placement="end"
      className={style.fullWidthOffcanvas}
    >
      <Offcanvas.Body>
        <div className={style.menu}>
          <NavBar
            toggleHamMenu={toggleHamMenu}
            logo={"/images/logo.png"}
            hambMenu={"/images/icons/hamburger-menu.png"}
            searchFilter={"/images/icons/navSearchIcon.png"}
          />
          <div className={style.menuContent}>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
    // </div>
  );
};

export default HamburgerMenu;
