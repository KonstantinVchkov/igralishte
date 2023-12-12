import { useRouter } from "next/router";
import style from "./style.module.css";
import React from "react";
import { IButtonComponent } from "@/types/ProjectTypes";

const ButtonComp = ({ text, handleClick }: IButtonComponent) => {
  const router = useRouter();
  const addClassName = () => {
    if (router.pathname === "/orderpage") {
      return style.orderPageGoldenBtn;
    } else {
      return style.goldenBtn;
    }
  };
  return (
    <div className={addClassName()}>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default ButtonComp;
