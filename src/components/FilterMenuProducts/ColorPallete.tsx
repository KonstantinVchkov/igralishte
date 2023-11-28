import React from "react";
import style from "./style.module.css";
interface IColors {
  color: string;
  colorPicker:(e:any) => void;
}
const ColorPallete = ({ color,colorPicker }: IColors) => {
  const chooseColor = (e: any) => {
    const color = e.target.getAttribute("data-color");
    console.log(color);
  };

  return (
    <div
      data-color={color}
      onClick={colorPicker}
      className={style.colorSquare}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorPallete;
