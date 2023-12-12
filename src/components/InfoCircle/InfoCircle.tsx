import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { IInfoCircle } from "@/types/ProjectTypes";



const InfoCircle = ({ title, paragraph, arrowImg }: IInfoCircle) => {
  return (
    <div className={style.text}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <Link href={`http://localhost:3000/products`}>
        <img src={arrowImg} alt="black-arrow-icon" />
      </Link>
    </div>
  );
};

export default InfoCircle;
