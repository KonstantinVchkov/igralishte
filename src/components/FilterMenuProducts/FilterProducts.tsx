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
import { FilterCheckbox } from "./FilterCheckBox";
import ButtonComp from "../ButtonComponent/ButtonComp";
interface IFilteredData {
  data: IProductProps[];
}
interface FiltersState {
  category: string[];
  brand: string[];
  accessory: string[];
  size: string[];
  color: string[];
  priceRange: string;
  // Add other filters as needed
}
const FilterProducts = ({ data }: IFilteredData) => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    category: [],
    brand: [],
    accessory: [],
    size: [],
    color: [],
    priceRange: "",
  });

  const toggleHamMenu = () => setOpenMenu(!openMenu);
  const filterSideBar = () => setShow(!show);

  const handleFilterChange = (
    filterType: keyof FiltersState,
    value: string,
    checked: boolean
  ) => {
    setFilters((prevFilters) => {
      if (filterType !== "priceRange") {
        const updatedArray = checked
          ? [...prevFilters[filterType], value]
          : prevFilters[filterType].filter((v) => v !== value);
        return { ...prevFilters, [filterType]: updatedArray };
      } else {
        return { ...prevFilters, priceRange: checked ? value : "" };
      }
    });
  };
  const applyFilters = (
    productsData: IProductProps[],
    filters: FiltersState
  ) => {
    let filteredProducts = productsData;

    Object.entries(filters).forEach(([filterType, filterValues]) => {
      if (filterType !== "priceRange" && filterValues.length > 0) {
        filteredProducts = filteredProducts.filter((product: any) =>
          filterValues.includes(product[filterType])
        );
      } else if (filterType === "priceRange" && filterValues) {
        // For price range
        const [minPrice, maxPrice] = filterValues.split("-").map(Number);
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      }
    });

    return filteredProducts;
  };
  const chooseColor = (color: string) => {
    setFilters((prevFilters) => {
      const isColorSelected = prevFilters.color.includes(color);
      const updatedColors = isColorSelected
        ? prevFilters.color.filter((c) => c !== color)
        : [...prevFilters.color, color];

      return { ...prevFilters, color: updatedColors };
    });
  };
  const handleFiltering = () => {
    let queryParams = Object.entries(filters)
      .map(([key, value]) => {
        if (Array.isArray(value) && value.length > 0) {
          return `${key}_like=${value.join("&" + key + "_like=")}`;
        } else if (key === "priceRange" && typeof value === "string" && value) {
          const [minPrice, maxPrice] = value.split("-");
          return `price_gte=${minPrice}&price_lte=${maxPrice}`;
        }
        return "";
      })
      .filter((param) => param)
      .join("&");

    if (queryParams) {
      router.push(`/products?${queryParams}`);
    }
  };

  const filterCategories = {
    category: getUniquePropertyCounts(data, "category"),
    brand: getUniquePropertyCounts(data, "brand"),
    accessory: getUniquePropertyCounts(data, "accessory"),
    size: toggleDropItems.sizes.map((size) => ({ name: size, count: 0 })),
    color: getUniquePropertyCounts(data, "color"),
  };
  const sortItems = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    if (value === "default") {
      router.push({});
    }
    router.push(`/products?condition_like=${value}`);
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
                  // onClick={openSearch}
                />

                <SearchFilter
                  show={false}
                  handleClose={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </div>
            {Object.entries(filterCategories).map(
              ([filterType, filterOptions]) => (
                <div className={style.FilterType} key={filterType}>
                  <p>
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </p>
                  
                  {filterType !== "color" ? (
                    <ul>
                      {filterOptions.map((option, idx) => (
                        <FilterCheckbox
                          key={idx}
                          label={option.name}
                          count={option.count}
                          onChange={(e) =>
                            handleFilterChange(
                              filterType as keyof FiltersState,
                              option.name,
                              e.target.checked
                            )
                          }
                          checked={filters[
                            filterType as keyof FiltersState
                          ].includes(option.name)}
                        />
                      ))}
                    </ul>
                  ) : (
                    <div className={style.colorPaletteContainer}>
                      {filterOptions.map((option, idx) => (
                        <ColorPallete
                          key={idx}
                          color={option.name}
                          colorPicker={() => chooseColor(option.name)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </Offcanvas.Body>
          <ButtonComp text={"Филтрирај"} handleClick={handleFiltering} />
          <button onClick={filterSideBar} className={style.closeBtn}>
            Откажи
          </button>
        </Offcanvas>
      </div>
    </div>
  );
};

export default FilterProducts;
