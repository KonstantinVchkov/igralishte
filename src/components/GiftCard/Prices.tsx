import React from "react";
import style from "./style.module.css";
import { IGiftCard } from "@/types/ProjectTypes";


const Prices = ({ choosePrice, prices }: IGiftCard) => {
  return (
    <div className={style.GiftCardPrices}>
      <h1>{choosePrice}</h1>
      {prices &&
        prices.map((price, idx) => (
          <div key={idx} className={style.Price}>
            <h2>{price}</h2>
          </div>
        ))}
    </div>
  );
};

export default Prices;
