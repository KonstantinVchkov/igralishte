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
import SearchFilter from "../Header/SearchFilter";
import SortFilter from "./SortFilter";
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
  // const [pricePickCat, setPricePickCat] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortNew, setSortNew] = useState("");
  console.log('value from the select',sortNew)
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
      console.log("Color attribute not found");
    }
  };
  const handlePriceRangeCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setSelectedPriceRange(e.target.value);
    } else {
      setSelectedPriceRange("");
    }
  };

  const handleFiltering = () => {
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
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(String);
      queryParams.push(`price_gte=${minPrice}&price_lte=${maxPrice}`);
    }

    const queryString = queryParams.join("&");
    if (queryString) {
      router.push(`/products?${queryString}`);
    }

    setShow(false);
  };
  const openSearch = () => {
    console.log("search values searched");
  };
  const sortItems = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSortNew(e.target.value)
  };
  return (
    <div className={style.FilteredMenu}>
      <div className={style.firstSection}>
        <div className={style.searchFilterMenu}>
          <img
            src={`/images/group-55.svg`}
            alt="Filter Products"
            onClick={filterSideBar}
          />
        </div>
        <div className={style.sortFilter}>
          <SortFilter handleChange={(e) => sortItems(e)} valueTake={sortNew} />
        </div>
      </div>

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
            <div className={style.searchBar}>
              <div className={style.SearchInputs}>
                <input
                  type="text"
                  placeholder="Пребарувај..."
                  onChange={(e: any) => {
                    console.log(e.target.value);
                  }}
                />
                <img
                  src={`/images/fluent_search.svg`}
                  alt="search-icon"
                  onClick={openSearch}
                />

                <SearchFilter
                  show={false}
                  handleClose={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </div>
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
                    value={`${range.min}-${range.max}`}
                    checked={selectedPriceRange === `${range.min}-${range.max}`}
                    onChange={handlePriceRangeCheckboxChange}
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
