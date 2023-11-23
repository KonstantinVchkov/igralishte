import React, { useState } from "react";
import style from "./style.module.css";
import { IHamMenu } from "@/types/ProjectTypes";
import NavBar from "./NavBar";
import { Offcanvas } from "react-bootstrap";
import { toggleDropItems } from "./menuItemsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
import Link from "next/link";
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
  // const handleFilter = (value: string) => {
  //   console.log("ova ",value)
  //   // if(value === "Види ги сите"){
  //   //   router.push(`/products`);
  //   // } else {

  //   // }
  //   // router.push({
  //   //   pathname:`/local_designers?`,
  //   //   query: value
  //   // })
  //   // console.log(`Navigating to: /local_designers/?brandName=${value}`);
  //   router.push(`/local_designers?brandName=${value}`);

  //   // router.push(`/local_designers/?brandName_like=${value}`);
  // }
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
      router.push(`/products?category=${encodeURIComponent(category.category)}`);
    }
  }
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
                    <li
                      onClick={() => {
                        handleFilter(dropItem);
                      }}
                      key={index}
                    >
                      {dropItem}
                    </li>
                  ))} */}
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
