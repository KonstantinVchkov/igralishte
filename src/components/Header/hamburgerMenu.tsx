import React, { useState } from "react";
import style from "./style.module.css";
import { IHamMenu } from "@/types/ProjectTypes";
import NavBar from "./NavBar";
import { Offcanvas } from "react-bootstrap";
import { toggleDropItems } from "./menuItemsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
type OpenSections = {
  Vintage: string;
  Brands: string;
  Accessories: string;
};

const HamburgerMenu = ({ open, toggleHamMenu }: IHamMenu) => {
  const initialOpenSections: OpenSections = {
    Vintage: "",
    Brands: "",
    Accessories: "",
  };

  const [openSections, setOpenSections] =
    useState<OpenSections>(initialOpenSections);

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: prev[section] === "" ? "active" : "",
    }));
  };

  const handleFilter = (brand: any) => {
    if (brand.name === "Види ги сите") {
      router.push(`/local_designers`);
    } else {
      console.log("Selected brand:", brand.name);
      router.push(`/local_designers/${brand.id}?brandName=${brand.name}`);
    }
  };
  const handleCategory = (category: any) => {
    if (category.category === "Види ги сите") {
      router.push(`/products`);
    } else {
      router.push(
        `/products?category=${encodeURIComponent(category.category)}`
      );
    }
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
                  {toggleDropItems.vintage.map((category, index) => (
                    <li onClick={() => handleCategory(category)} key={index}>
                      {category.category}
                    </li>
                  ))}
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
                  {toggleDropItems.brands.map((brand, index) => (
                    <li onClick={() => handleFilter(brand)} key={index}>
                      {brand.name}
                    </li>
                  ))}
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
                  {toggleDropItems.accessories.map((dropItem, index) => (
                    <li key={index}>{dropItem}</li>
                  ))}
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
