import React from "react";
import style from "./style.module.css";
import { IFaqComp } from "@/types/ProjectTypes";

const FaQInfo = ({
  PageTitle,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  firstAnswer,
  secondAnswer,
}: IFaqComp) => {
  return (
    <div className={style.FaqInfo}>
      <div className={style.firstSection}>
        <div className={style.Title}>
          <h1>{PageTitle}</h1>
          <img src="/images/icons/sparks-elements-icon.png" alt="" />
        </div>
        <div className={style.faqCard}>
          <h2>{firstQuestion}</h2>
          <p>{firstAnswer}</p>
        </div>
        <div className={style.faqCard}>
          <h2>{secondQuestion}</h2>
          <p>{secondAnswer}</p>
        </div>
        <div className={style.faqCard}>
          <h2>{thirdQuestion}</h2>
          <p>{firstAnswer}</p>
        </div>
        <div className={style.faqCard}>
          <h2>{fourthQuestion}</h2>
          <p>{secondAnswer}</p>
        </div>
        <div className={style.faqCard}>
          <h2>{fourthQuestion}</h2>
          <p>{secondAnswer}</p>
        </div>
        <div className={style.faqCard}>
          <h2>{firstQuestion}</h2>
          <p>{firstAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaQInfo;
