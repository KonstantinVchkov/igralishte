import GiftCard from "@/components/GiftCard/GiftCard";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import style from "../components/GiftCard/style.module.css";
import Prices from "@/components/GiftCard/Prices";
import { IGiftCard } from "@/types/ProjectTypes";
export interface IGiftsPage {
  giftCardsData: IGiftCard[];
  giftPrices: IGiftCard;
}
const gifts: NextPage<IGiftsPage> = ({ giftCardsData, giftPrices }) => {
  return (
    <div className={style.GiftPage}>
      <h1>Gift картички за подарок</h1>
      {giftCardsData.map((card, idx) => (
        <GiftCard key={idx} {...card} />
      ))}
      <Prices {...giftPrices} />
    </div>
  );
};

export default gifts;

export const getStaticProps: GetStaticProps = async () => {
  const resUrl = "http://localhost:3001/giftCards/";
  const giftCardsResponse = (await axios.get(`${resUrl}giftCards`)).data;
  const giftPrices = (await axios.get(`${resUrl}giftPrices`)).data;

  const giftCardsData = giftCardsResponse.cards || [];

  return {
    props: {
      giftCardsData,
      giftPrices,
    },
  };
};
