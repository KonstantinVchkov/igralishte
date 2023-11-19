import React, { useState } from "react";
import style from "./style.module.css";
import { IHamMenu } from "@/types/ProjectTypes";
import NavBar from "./NavBar";
import { Offcanvas } from "react-bootstrap";
import { toggleDropItems } from "./menuItemsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
type OpenSections = {
  Vintage?: boolean;
  Brands?: boolean;
  Accessories?: boolean;
};

const HamburgerMenu = ({ open, toggleHamMenu }: IHamMenu) => {
  const [openSections, setOpenSections] = useState<OpenSections>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
            hambMenu={"/images/icons/hamburger-menu.png"}
            searchFilter={"/images/icons/navSearchIcon.png"}
          />
          <div className={style.menuContent}>
            <div
              className="d-flex justify-content-between"
              onClick={() => toggleSection("Vintage")}
            >
              Vintage Облека
              {openSections.Vintage ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#919397", width: "20px" }}
                />
              )}
            </div>
            {openSections.Vintage && (
              <div>
                <ul>
                  {/* {toggleDropItems.vintage.map((dropItem, index) => (
                    <li key={index}>{dropItem}</li>
                  ))} */}
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            )}
            <div
              className="d-flex justify-content-between"
              onClick={() => toggleSection("Brands")}
            >
              Брендови
              {openSections.Brands ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#919397", width: "20px" }}
                />
              )}
            </div>
            {openSections.Brands && (
              <div>
                <ul>
                  {/* {toggleDropItems.brands.map((dropItem, index) => (
                    <li key={index}>{dropItem}</li>
                  ))} */}
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            )}
            <div
              className="d-flex justify-content-between"
              onClick={() => toggleSection("Accessories")}
            >
              Аксесоари
              {openSections.Accessories ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#919397", width: "20px" }}
                />
              )}
            </div>
            {openSections.Accessories && (
              <div>
                <ul>
                  {/* {toggleDropItems.accessories.map((dropItem, index) => (
                    <li key={index}>{dropItem}</li>
                  ))} */}
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            )}
            <ul>
              {toggleDropItems.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HamburgerMenu;
