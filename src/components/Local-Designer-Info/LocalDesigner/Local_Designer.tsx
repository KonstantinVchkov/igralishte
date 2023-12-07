import React from "react";
import style from "./style.module.css";
import { ILDesignerProps } from "@/types/ProjectTypes";
import { useRouter } from "next/router";
const LocalDesignerComponent = ({
  id,
  brandName,
  brandImage,
  brandDescription,
  brandAnswer,
  brandConcept,
  detailClick,
}: ILDesignerProps) => {
  const router = useRouter();
  const isBrandDetailRoute = router.asPath === `/local_designers/${id}`;
  return (
    <div className={style.LocalDesigner} onClick={detailClick}>
      <div className={style.textTitle}>
        <h1>{brandName}</h1>
        <img src="/images/icons/sparks-elements-icon.png" alt="spark-icon" />
      </div>
      <div className={style.brand}>
        <img src={brandImage} alt="" />
        <p>{brandConcept}</p>
        {isBrandDetailRoute && (
          <ul>
            <li>{brandAnswer}</li>
            <li>{brandAnswer}</li>
            <li>{brandAnswer}</li>
            <li>{brandAnswer}</li>
          </ul>
        )}
        <p>{brandDescription}</p>
      </div>
    </div>
  );
};

export default LocalDesignerComponent;
