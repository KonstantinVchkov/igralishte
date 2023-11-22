import React from "react";
import style from "./style.module.css";

interface IInfoCircle {
  title: string;
  paragraph: string;
  arrowImg: string;
}

const InfoCircle = ({ title, paragraph, arrowImg }: IInfoCircle) => {
  return (
    <div className={style.text}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <img src={arrowImg} alt="black-arrow-icon" />
    </div>
  );
};

export default InfoCircle;
