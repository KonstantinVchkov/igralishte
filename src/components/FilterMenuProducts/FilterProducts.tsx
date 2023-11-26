import React, { useState } from "react";
import style from "./style.module.css";
import FilterSearchIcon from "../../../public/images/group-55.svg";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
// import Header from "../Header/Header";
import NavBar from "../Header/NavBar";
import { IProductProps } from "../Products/Product";
import { getUniquePropertyCounts } from "@/utils/uniqueProducts";

interface IFilteredData {
  data: IProductProps[];
}
const FilterProducts = ({ data }: IFilteredData) => {

  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamMenu = () => {
    console.log("ham menu clicked");
    setOpenMenu(!openMenu);
  };
  const filterSideBar = () => {
    setShow(!show);
  };
  const categoryCounts = getUniquePropertyCounts(data, "category");
  const brandCounts = getUniquePropertyCounts(data, "brand");
  const uniqueAccessories = getUniquePropertyCounts(data, "accessory");
  // const sizes = getUniquePropertyCounts(uniqueSizes, "size");

  const handleFiltering = (e: any) => {
    console.log(e.target);
  };
  return (
    <div className={style.FilteredMenu}>
      <img
        src={`/images/group-55.svg`}
        alt="Filter Products"
        onClick={filterSideBar}
      />
      <HamburgerMenu open={openMenu} toggleHamMenu={toggleHamMenu} />
      <div className={style.filteredBody}>
        <Offcanvas placement="end" show={show}>
          <NavBar
            hambMenu={"/images/icons/hamburger-menu.png"}
            searchFilter={"/images/icons/navSearchIcon.png"}
            toggleHamMenu={() => {
              toggleHamMenu();
            }}
          />
          <Offcanvas.Body>
            <p>Категорија</p>
            <ul>
              {categoryCounts.map((category, idx) => (
                <li key={idx}>
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <p>Брендови</p>
            <ul>
              {brandCounts.map((category, idx) => (
                <li key={idx}>
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <p>Аксесоари</p>
            <ul>
              {uniqueAccessories.map((category, idx) => (
                <li
                  onClick={(e) => {
                    handleFiltering(e);
                  }}
                  key={idx}
                >
                  {category.name}
                </li>
              ))}
            </ul>
            <p>Големини</p>
            <ul>
              {/* {uniqueSizes} */}
            </ul>
          </Offcanvas.Body>
          <button onClick={filterSideBar}>otkazi</button>
        </Offcanvas>
      </div>
    </div>
  );
};

export default FilterProducts;
