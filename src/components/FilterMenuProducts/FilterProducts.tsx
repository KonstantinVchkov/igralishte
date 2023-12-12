import React, { useState } from "react";
import style from "./style.module.css";
import { Offcanvas } from "react-bootstrap";
import HamburgerMenu from "../Header/hamburgerMenu";
import NavBar from "../Header/NavBar";
import { getUniquePropertyCounts } from "@/utils/uniqueProducts";
import router from "next/router";
import SortFilter from "./SortFilter";
import ButtonComp from "../ButtonComponent/ButtonComp";
import FilterNames from "./FilterNames";
import { IFilteredData } from "@/types/ProjectTypes";
import { transformNameProperty } from "@/utils/transformToString";

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
  const [searchBarValue,setSearchBarValue] = useState<string>('')
  const [isColorPicked, setIsColorPicked] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const resetFilters = () => {
    setSelectedCategories([]);
    setBrandSelectedCategories([]);
    setAccessoriesSelectedCategories([]);
    setSizesCategories([]);
    setColorPickCat([]);
    setSelectedPriceRange("");
    setSearchBarValue('')
  };
  const toggleHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  const filterSideBar = () => {
    setShow(!show);
    router.push({})
  };
  const sortItems = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    if (value ) {
      router.push({});
    }
    router.push(`/products?condition_like=${value}`);
  };
  const categoryCounts = getUniquePropertyCounts(data, "category");
  const brandCounts = getUniquePropertyCounts(data, "brand");
  const uniqueAccessories = getUniquePropertyCounts(data, "accessory");
  const colors = getUniquePropertyCounts(data, "color");
  const filterChoose = (
    filterName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    switch (filterName) {
      case "category":
        if (selectedCategories.includes(value)) {
          setSelectedCategories(selectedCategories.filter((c) => c !== value));
        } else {
          setSelectedCategories([...selectedCategories, value]);
        }
        break;

      case "brand":
        if (brandSelectedCategories.includes(value)) {
          setBrandSelectedCategories(
            brandSelectedCategories.filter((c) => c !== value)
          );
        } else {
          setBrandSelectedCategories([...brandSelectedCategories, value]);
        }
        break;

      case "accessory":
        if (accessoriesSelectedCategories.includes(value)) {
          setAccessoriesSelectedCategories(
            accessoriesSelectedCategories.filter((c) => c !== value)
          );
        } else {
          setAccessoriesSelectedCategories([
            ...accessoriesSelectedCategories,
            value,
          ]);
        }
        break;

      case "size":
        if (sizesCategories.includes(value)) {
          setSizesCategories(sizesCategories.filter((c) => c !== value));
        } else {
          setSizesCategories([...sizesCategories, value]);
        }
      
      break;
      case "searchBar":
        setSearchBarValue(e.target.value);
        break;
      default:
        break;
    }
  };

  const chooseColor = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    const color = target.getAttribute("data-color");

    if (color !== null) {
      if (colorPickCat.includes(color)) {
        setColorPickCat(colorPickCat.filter((c) => c !== color));
        setIsColorPicked(true);
      } else {
        setColorPickCat([...colorPickCat, color]);
        setIsColorPicked(false);
      }
    } else {
      console.log("Color attribute not found");
      setColorPickCat(["color not found"]);
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
    if(searchBarValue) {
      queryParams.push(`category_like=${searchBarValue}`);
    }

    const queryString = queryParams.join("&");
    if (queryString) {
      router.push(`/products?${queryString}`);
    }
    resetFilters();
    setShow(false);
  };
  const transformedCategoryCounts = transformNameProperty(categoryCounts);
  const transformedBrandCounts = transformNameProperty(brandCounts);
  const transformedUniqueAccessories = transformNameProperty(uniqueAccessories);
  const transformedColorsCounts = transformNameProperty(colors)
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
          <SortFilter handleChange={(e) => sortItems(e)} />
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
            <FilterNames
              searchValue={(e) => {
                filterChoose('searchBar',e)
              }}
              categoryCounts={transformedCategoryCounts}
              brandCounts={transformedBrandCounts}
              uniqueAccessories={transformedUniqueAccessories}
              toggleDropItems={{
                sizes: selectedCategories,
                priceRange: [
                  { label: "500 - 1000 Ден.", min: 10.99, max: 44.99 },
                  { label: "1500 - 2000 Ден.", min: 79, max: 100 },
                  { label: "2000 - 2500 ден.", min: 100, max: 130 },
                  { label: "Над 80$ Ден", max: 300 },
                ],
              }}
              colors={transformedColorsCounts}
              selectedCategories={selectedCategories}
              brandSelectedCategories={brandSelectedCategories}
              accessoriesSelectedCategories={accessoriesSelectedCategories}
              sizesCategories={sizesCategories}
              selectedPriceRange={selectedPriceRange}
              handlePriceRangeCheckboxChange={handlePriceRangeCheckboxChange}
              chooseColor={chooseColor}
              handleCategoryChange={(e) => filterChoose("category", e)}
              handleBrandCategoryChange={(e) => filterChoose("brand", e)}
              handleAccessoryChange={(e) => filterChoose("accessory", e)}
              handleSizeChange={(e) => filterChoose("size", e)}
            />
          </Offcanvas.Body>
          <ButtonComp text={"Филтрирај"} handleClick={handleFiltering} />
          <button className={style.closeBtn} onClick={filterSideBar}>
            Откажи
          </button>
        </Offcanvas>
      </div>
    </div>
  );
};

export default FilterProducts;
