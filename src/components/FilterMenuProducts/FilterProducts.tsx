import React from "react";
import style from "./style.module.css";
import FilterSearchIcon from "../../../public/images/group-55.svg";
const FilterProducts = () => {
  const openMenu = () => {
    console.log("this is filter menu")
  }
  return (
    <div className={style.FilteredMenu}>
      {/* <img src={FilterSearchIcon} alt="" /> */}
      <img src={`/images/group-55.svg`} alt="Filter Products" onClick={openMenu}/>
    </div>
  );
};

export default FilterProducts;
