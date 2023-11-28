import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
import NavBar from "../Header/NavBar";
import { IProductProps } from "../Products/Product";
import { getUniquePropertyCounts } from "@/utils/uniqueProducts";
import { toggleDropItems } from "../Header/menuItemsData";
import ColorPallete from "./ColorPallete";
import router from "next/router";
interface IFilteredData {
  data: IProductProps[];
}
const FilterProducts = ({ data }: IFilteredData) => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [brandSelectedCategories, setBrandSelectedCategories] = useState<string[]>([]);
  const toggleHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  const filterSideBar = () => {
    setShow(!show);
  };
  const categoryCounts = getUniquePropertyCounts(data, "category");
  const brandCounts = getUniquePropertyCounts(data, "brand");
  const uniqueAccessories = getUniquePropertyCounts(data, "accessory");
  const colors = getUniquePropertyCounts(data, "color");
  // const prices = getUniquePropertyCounts(data, "price");

  // const sortedPrices = prices.sort(
  //   (a, b) => parseFloat(a.name.substring(1)) - parseFloat(b.name.substring(1))
  // );
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleBrandCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const category = e.target.value;
    if (brandSelectedCategories.includes(category)) {
      setBrandSelectedCategories(
        brandSelectedCategories.filter((c) => c !== category)
      );
    } else {
      setBrandSelectedCategories([...brandSelectedCategories, category]);
    }
  };
  const handleFiltering = () => {
    const categoryQuery = selectedCategories.join("&category_like=");
    const brandCategoryQuery = brandSelectedCategories.join("&brand_like=")
    if (categoryQuery) {
      router.push(`/products?category_like=${categoryQuery}`);
    setShow(false);

    } else if(brandCategoryQuery) {
      router.push(`/products?brand_like=${brandCategoryQuery}`)
    setShow(false);

    }
    // console.log('Sending query:', categoryQuery);
    // setSelectedCategories([])
    // setShow(false);
  };
  // const handleFilteringBrand = () => {
  //   const categoryQuery = brandSelectedCategories.join("&category_like=");
  //   // console.log('Sending query:', categoryQuery);
  //   router.push(`/products?category_like=${categoryQuery}`);
  //   // setSelectedCategories([])
  //   setShow(false);
  // };
  const chooseColor = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    const color = target.getAttribute("data-color");
    console.log("Picked up color:", color);
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
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={handleCategoryChange}
                    checked={selectedCategories.includes(category.name)}
                  />
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <p>Брендови</p>
            <ul>
              {brandCounts.map((category, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={handleBrandCategoryChange}
                    checked={brandSelectedCategories.includes(category.name)}
                  />{" "}
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
            <p>Аксесоари</p>
            <ul>
              {uniqueAccessories.map((category, idx) => (
                <li key={idx}>
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
            <div className={style.ColorPallete}>
              {colors.map((color, idx) => (
                <ColorPallete
                  key={idx}
                  color={color.name}
                  colorPicker={(e: any) => chooseColor(e)}
                />
              ))}
            </div>
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
          <button onClick={handleFiltering}>Филтрирај</button>
          <button onClick={filterSideBar}>Откажи</button>
        </Offcanvas>
      </div>
    </div>
  );
};

export default FilterProducts;
