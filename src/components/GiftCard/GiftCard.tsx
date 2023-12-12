import React from "react";
import style from "./style.module.css";
import { IGiftCard } from "@/types/ProjectTypes";


const GiftCard = ({ img }: IGiftCard) => {
  return (
    <div className={style.giftCard}>
      <div className={style.giftImgCard}>
        <img src={img} alt={"gift image"} />
      </div>
    </div>
  );
};

export default GiftCard;
