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
  const [brandSelectedCategories, setBrandSelectedCategories] = useState<
    string[]
  >([]);
  const [accessoriesSelectedCategories, setAccessoriesSelectedCategories] =
    useState<string[]>([]);
  const [sizesCategories, setSizesCategories] = useState<string[]>([]);
  const [colorPickCat, setColorPickCat] = useState<string[]>([]);
  const [pricePickCat, setPricePickCat] = useState<string[]>([]);
  const [isPriceRangeSelected, setIsPriceRangeSelected] = useState(false);
  useEffect(() => {
    console.log("all selected colors", pricePickCat);
  }, [pricePickCat]);
  const toggleHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  const filterSideBar = () => {
    setShow(!show);
  };
  const handlePriceRangeCheckboxChange = () => {
    setIsPriceRangeSelected(!isPriceRangeSelected);
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
  const handleAccessoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    if (accessoriesSelectedCategories.includes(category)) {
      setAccessoriesSelectedCategories(
        accessoriesSelectedCategories.filter((c) => c !== category)
      );
    } else {
      setAccessoriesSelectedCategories([
        ...accessoriesSelectedCategories,
        category,
      ]);
    }
  };
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    if (sizesCategories.includes(category)) {
      setSizesCategories(sizesCategories.filter((c) => c !== category));
    } else {
      setSizesCategories([...sizesCategories, category]);
    }
  };
  const chooseColor = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    const color = target.getAttribute("data-color");

    if (color !== null) {
      if (colorPickCat.includes(color)) {
        setColorPickCat(colorPickCat.filter((c) => c !== color));
      } else {
        setColorPickCat([...colorPickCat, color]);
      }
      console.log("Picked up color:", color);
    } else {
      // Handle the case when color is null, if needed
      console.log("Color attribute not found");
    }
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    if (pricePickCat.includes(target)) {
      setPricePickCat(pricePickCat.filter((c) => c !== target));
    } else {
      setPricePickCat([...pricePickCat,target])
    }
  };
  const handleFiltering = () => {
    // const categoryQuery = selectedCategories.join("&category_like=");
    // const brandCategoryQuery = brandSelectedCategories.join("&brand_like=");
    // const accessoriesCategoryQuery =
    //   accessoriesSelectedCategories.join("&accessory_like=");
    // const sizeCategoryQuery = sizesCategories.join("&size_like=");
    // setShow(false);
    // const colorCategoryQuery = colorPickCat.join("&color_like=");
    // console.log(colorCategoryQuery)
    // if (categoryQuery) {
    //   router.push(`/products?category_like=${categoryQuery}`);
    // } else if (brandCategoryQuery) {
    //   router.push(`/products?brand_like=${brandCategoryQuery}`);
    //   // setShow(false);
    // } else if (accessoriesCategoryQuery) {
    //   router.push(`/products?accessory_like=${accessoriesCategoryQuery}`);
    //   // setShow(false);
    // } else if (sizesCategories) {
    //   router.push(`/products?size_like=${sizeCategoryQuery}`);
    // } else if (colorCategoryQuery) {
    //   router.push(`/products?color_like=${colorCategoryQuery}`);
    // }
    let queryParams = [];

    if (selectedCategories.length) {
      queryParams.push(
        `category_like=${selectedCategories.join("&category_like=")}`
      );
    }
    if (brandSelectedCategories.length) {
      queryParams.push(
        `brand_like=${brandSelectedCategories.join("&brand_like=")}`
      );
    }
    if (accessoriesSelectedCategories.length) {
      queryParams.push(
        `accessory_like=${accessoriesSelectedCategories.join(
          "&accessory_like="
        )}`
      );
    }
    if (sizesCategories.length) {
      queryParams.push(`size_like=${sizesCategories.join("&size_like=")}`);
    }
    if (colorPickCat.length) {
      queryParams.push(`color_like=${colorPickCat.join("&color_like=")}`);
    }
    if (pricePickCat.length) {
      queryParams.push(`price_like=${pricePickCat.join("&price_like=")}`);
    }
    const queryString = queryParams.join("&");
    if (queryString) {
      router.push(`/products?${queryString}`);
    }

    setShow(false);
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
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={handleAccessoryChange}
                    checked={accessoriesSelectedCategories.includes(
                      category.name
                    )}
                  />{" "}
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
                  return (
                    <li key={idx}>
                      <input
                        type="checkbox"
                        value={productSize}
                        onChange={handleSizeChange}
                        checked={sizesCategories.includes(productSize)}
                      />{" "}
                      {productSize}
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
                  colorPicker={(e) => chooseColor(e)}
                />
              ))}
            </div>
            <p>Цена</p>
            <ul>
              <li>На попуст</li>
              {toggleDropItems.priceRange.map((range, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    value={`${range.max}`}
                    checked={pricePickCat.includes(`${range.max}`)}
                    onChange={handlePrice}
                  />{" "}
                  {range.label}
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
