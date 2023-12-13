import React from "react";
import style from "./style.module.css";

import ButtonComp from "@/components/ButtonComponent/ButtonComp";
import router from "next/router";
import { IContactComponent } from "@/types/ProjectTypes";

const ContactusComponent = ({
  PageTitle,
  image,
  title,
  subtitle,
  contactInfo,
  number,
  workTime,
}: IContactComponent) => {
  const openShop = () => {
    console.log("go to home page");
    router.push("/products");
  };
  return (
    <div className={style.ContactInfo}>
      <div className={style.title}>
        <h1>{PageTitle}</h1>
        <img src="/images/icons/sparks-elements-icon.png" alt="" />
      </div>
      <div className={style.secondSection}>
        <img src={image} alt="Contact-Img" />
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{contactInfo}</p>
        <p>{number}</p>
        <p>{workTime}</p>
      </div>
      <div className={style.btnComp}>
        <ButtonComp text={"Кон Продавницата"} handleClick={openShop} />
      </div>
    </div>
  );
};

export default ContactusComponent;
