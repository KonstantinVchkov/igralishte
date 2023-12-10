import React from "react";
import style from "./style.module.css";
import { ICustomerBar } from "@/types/ProjectTypes";
import Link from "next/link";

const CustomerInteractionBar = ({
  cartAmount,
  favAmount,
  imgCart,
  favHeartImg,
}: ICustomerBar) => {
  return (
    <div className={style.CustomerBar}>
      <Link href={"/orderpage"}>
        <div className={style.Amount}>
          <img src={imgCart} alt="" />
          Koшничка <span>({cartAmount})</span>
        </div>
      </Link>
      <Link href={"/favorites"}>
        <div className={style.Amount}>
          <img src={favHeartImg} alt="" />
          Омилени <span>({favAmount})</span>
        </div>
      </Link>
    </div>
  );
};

export default CustomerInteractionBar;
