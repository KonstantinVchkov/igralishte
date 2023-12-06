import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { IHamMenu } from "@/types/ProjectTypes";
import NavBar from "./NavBar";
import { Offcanvas } from "react-bootstrap";
import { toggleDropItems } from "./menuItemsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
import Link from "next/link";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [openSections, setOpenSections] =
    useState<OpenSections>(initialOpenSections);

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: prev[section] === "" ? "active" : "",
    }));
  };

  const handleNavigation = (
    type: "brand" | "category" | "accessory",
    item: { name?: string; category?: string; accessory?:string; id?: string }
  ) => {
    const itemName = item.name ?? "";
    const itemCategory = item.category ?? "";
    const itemId = item.id ?? "";
    const itemAccessory = item.accessory ?? ''
  
    let basePath = "/";
  
    if (type === "brand") {
      basePath = "/local_designers";
    } else if (type === "category" || type === "accessory") {
      basePath = "/products";
    }
  
    let itemPath = basePath; 
  
    if (type === "brand") {
      itemPath = `${basePath}/${encodeURIComponent(itemId)}?brandName=${encodeURIComponent(itemName)}`;
    } else if (type === "category") {
      itemPath = `${basePath}?category=${encodeURIComponent(itemCategory)}`;
    } else if(type === 'accessory'){
      itemPath = `${basePath}?accessory=${encodeURIComponent(itemAccessory)}`
    }
  
    if (itemName === "Види ги сите" || itemCategory === "Види ги сите") {
      router.push(basePath); 
    } else {
      router.push(itemPath); 
    }
    toggleHamMenu();
  };
  
  
  const checkLoginStatus = () => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem("user") || "false");
    setLoggedIn(isUserLoggedIn);
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);

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
              className={`d-flex cursor-pointer justify-content-between m-2`}
              onClick={() => toggleSection("Vintage")}
            >
              Vintage Облека
              {openSections.Vintage ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px",cursor:'pointer' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#919397", width: "20px",cursor:'pointer' }}
                />
              )}
            </div>
            {openSections.Vintage && (
              <div>
                <ul>
                  {toggleDropItems.vintage.map((category, index) => (
                    <li className="m-2 cursor-pointer"
                      onClick={() =>
                        handleNavigation("category", {
                          category: category.category,
                        })
                      }
                      key={index}
                    >
                      {category.category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div
              className={`d-flex cursor-pointer justify-content-between m-2`}
              onClick={() => toggleSection("Brands")}
            >
              Брендови
              {openSections.Brands ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px",cursor:'pointer' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#919397", width: "20px",cursor:"pointer" }}
                />
              )}
            </div>
            {openSections.Brands && (
              <div>
                <ul>
                  {toggleDropItems.brands.map((brand, index) => (
                    <li className="m-2 cursor-pointer"
                      onClick={() =>
                        handleNavigation("brand", {
                          name: brand.name,
                          id: brand.id,
                        })
                      }
                      key={index}
                    >
                      {brand.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div
              className={`d-flex cursor-pointer justify-content-between m-2`}
              onClick={() => toggleSection("Accessories")}
            >
              Аксесоари
              {openSections.Accessories ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "#919397", width: "20px",cursor:'pointer' }}
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
                    <li className="m-2 cursor-pointer"
                      onClick={() =>
                        handleNavigation("accessory", {
                          accessory: dropItem.accessory,
                        })
                      }
                      key={index}
                    >
                      {dropItem.accessory}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ul>
              {toggleDropItems.other.map((item, index) => (
                <li className="m-2 cursor-pointer" key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
      <div className={style.offCanvasFooter}>
        <div className={style.hamMenu_ShopCart} onClick={toggleHamMenu}>
          <img src="/images/icons/shop-cart-icon.png" alt="" />
          <Link href={"http://localhost:3000/orderpage"}>
            <span>Кошничка</span>
          </Link>
        </div>
        <div className={style.hamMenu_favorites} onClick={toggleHamMenu}>
          <img src="/images/icons/Vector.png" alt="" />
          <Link href={"http://localhost:3000/favorites"}>
            <span>Омилени</span>
          </Link>
        </div>
        <div className={style.ClientProfile} onClick={toggleHamMenu}>
          <FontAwesomeIcon icon={faUser} style={{ width: "30px" }} />
          <Link
            href={
              loggedIn
                ? "http://localhost:3000/profile_setup"
                : "http://localhost:3000/register"
            }
          >
            {loggedIn ? <span>Мој Профил</span> : <span>Регистрирај се</span>}
          </Link>
          {!loggedIn && <span> / </span>}
          {!loggedIn && (
            <Link href="http://localhost:3000/login">
              <span>Логирај се</span>
            </Link>
          )}
        </div>
      </div>
    </Offcanvas>
  );
};

export default HamburgerMenu;
