import React from "react";
import style from './style.module.css'
import { ISortFilter } from "@/types/ProjectTypes";

const SortFilter = ({handleChange,valueTake}:ISortFilter) => {
  return (
    <div className={style.sortFilter}>
      {" "}
      <span>Подреди според:</span>
      <select
        value={valueTake}
        onChange={handleChange}
      >
        <option value="default">Селектирај</option>
        <option value="New">Најново</option>
        <option value="Old">Најстаро</option>
      </select>
    </div>
  );
};

export default SortFilter;
