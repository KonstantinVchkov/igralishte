import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
import NavBar from "../Header/NavBar";
import { IProductProps } from "../Products/Product";
import { getUniquePropertyCounts } from "@/utils/uniqueProducts";
import { toggleDropItems } from "../Header/menuItemsData";

interface IFilteredData {
  data: IProductProps[];
}
const FilterProducts = ({ data }: IFilteredData) => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamMenu = () => {
    // console.log("ham menu clicked");
    setOpenMenu(!openMenu);
  };
  const filterSideBar = () => {
    setShow(!show);
  };

  const categoryCounts = getUniquePropertyCounts(data, "category");
  const brandCounts = getUniquePropertyCounts(data, "brand");
  const uniqueAccessories = getUniquePropertyCounts(data, "accessory");
  const prices = getUniquePropertyCounts(data, "price");
  console.log();

  const sortedPrices = prices.sort(
    (a, b) => parseFloat(a.name.substring(1)) - parseFloat(b.name.substring(1))
  );
  // console.log(sortedPrices)
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
              {toggleDropItems.sizes
                .slice()
                .reverse()
                .map((productSize, idx) => {
                  return <li key={idx}>{productSize}</li>;
                })}
            </ul>
            <p>Цена</p>
            <ul>
              <li>На попуст</li>
              {sortedPrices.map((price, idx) => (
                <li key={idx}>
                  {price.name} 
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
          <button onClick={filterSideBar}>Филтрирај</button>
          <button onClick={filterSideBar}>Откажи</button>
        </Offcanvas>
      </div>
    </div>
  );
};

export default FilterProducts;
