import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
import NavBar from "../Header/NavBar";
import { IProductProps } from "../Products/Product";
import { getUniquePropertyCounts } from "@/utils/uniqueProducts";
import { toggleDropItems } from "../Header/menuItemsData";
import ColorPallete from "./ColorPallete";
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
  // const prices = getUniquePropertyCounts(data, "price");

  // const sortedPrices = prices.sort(
  //   (a, b) => parseFloat(a.name.substring(1)) - parseFloat(b.name.substring(1))
  // );

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
                  <input type="checkbox" /> {category.name}{" "}
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <p>Брендови</p>
            <ul>
              {brandCounts.map((category, idx) => (
                <li key={idx}>
                  <input type="checkbox" /> {category.name}{" "}
                  <span>({category.count})</span>
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
                  <input type="checkbox" /> {category.name}
                </li>
              ))}
            </ul>
            <p>Големини</p>
            <ul>
              {toggleDropItems.sizes
                .slice()
                .reverse()
                .map((productSize, idx) => {
                  return (
                    <li key={idx}>
                      <input type="checkbox" /> {productSize}
                    </li>
                  );
                })}
            </ul>
            <p>Боја</p>
            <ColorPallete />
            <p>Цена</p>
            <ul>
              <li>На попуст</li>
              {toggleDropItems.priceRange.map((range, idx) => (
                <li key={idx}>
                  <input type="checkbox" /> {range.label}
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
