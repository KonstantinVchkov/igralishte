import React, { useState } from "react";
import style from "./style.module.css";
import SearchFilter from "../Header/SearchFilter";
import ColorPallete from "./ColorPallete";
import { IFilterNames } from "@/types/ProjectTypes";

const FilterNames = ({
  categoryCounts,
  brandCounts,
  uniqueAccessories,
  toggleDropItems,
  colors,
  selectedCategories,
  brandSelectedCategories,
  accessoriesSelectedCategories,
  sizesCategories,
  selectedPriceRange,
  handleAccessoryChange,
  handleBrandCategoryChange,
  handleCategoryChange,
  handlePriceRangeCheckboxChange,
  handleSizeChange,
  chooseColor,
  searchValue,
}: IFilterNames) => {
  const [selectedColor, setSelectedColor] = useState("");

  const highlightColorDiv = (color: string) => {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color);
    }
  };
  return (
    <>
      <div className={style.searchBar}>
        <div className={style.SearchInputs}>
          <input
            type="text"
            placeholder="Пребарувај..."
            onChange={searchValue}
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
      <div className={style.FilterType}>
        <p>Категорија</p>
        <ul>
          {categoryCounts.map((category) => (
            <li key={category.name}>
              <input
                type="checkbox"
                value={category.name}
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
                checked={selectedCategories.includes(category.name)}
              />
              {category.name} <span>({category.count})</span>
            </li>
          ))}
        </ul>
        <p>Брендови</p>
        <ul>
          {brandCounts.map((category) => (
            <li key={category.name}>
              <input
                type="checkbox"
                value={category.name}
                onChange={(e) => {
                  handleBrandCategoryChange(e);
                }}
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
                checked={accessoriesSelectedCategories.includes(category.name)}
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
        <div className={style.colorPaletteContainer}>
          {colors.map((color) => (
            <div
              key={color.name}
              className={
                selectedColor === color.name ? `${style.borderSquare}` : ""
              }
              onClick={() => {
                highlightColorDiv(color.name);
              }}
            >
              <ColorPallete
                color={color.name}
                colorPicker={(e) => chooseColor(e)}
                colorPicked={selectedColor === color.name}
              />
            </div>
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
      </div>
    </>
  );
};

export default FilterNames;
