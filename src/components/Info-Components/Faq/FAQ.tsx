import React from "react";
import style from "./style.module.css";
import { IFaqComp } from "@/types/ProjectTypes";

const FaQInfo = ({
  PageTitle,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
}: IFaqComp) => {
  return (
    <div className={style.FaqInfo}>
      <div className={style.secondSection}>
        <div className={style.Title}>
          <h1>{PageTitle}</h1>
          <img src="/images/icons/sparks-elements-icon.png" alt="" />
        </div>
        <h2>{firstQuestion}</h2>
        <p>{}</p>
        <h2>{secondQuestion}</h2>
        <p>{}</p>
        <h2>{}</h2>
        <p>{}</p>
      </div>
    </div>
  );
};

export default FaQInfo;
