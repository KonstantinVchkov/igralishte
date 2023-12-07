import React from "react";
import style from "./style.module.css";
import { IColors } from "@/types/ProjectTypes";

const ColorPallete = ({ color, colorPicker }: IColors) => {
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
