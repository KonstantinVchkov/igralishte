import React, { useState } from "react";
import style from './style.module.css'
import { IProductProps } from "../Products/Product";
interface ISortFilter{
    handleChange:(e:React.ChangeEvent<HTMLSelectElement>) => void;
    valueTake?:string   
}
const SortFilter = ({handleChange,valueTake}:ISortFilter) => {
    // const [sortNew,setSortNew] = useState('')
    // console.log(sortNew)
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
