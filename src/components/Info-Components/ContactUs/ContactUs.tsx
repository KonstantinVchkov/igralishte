import React from "react";
import style from "./style.module.css";
export interface IContactComponent {
  PageTitle: string;
  image: string;
  title: string;
  subtitle: string;
  contactInfo: string;
  number:string;
  workTime:string;
  mobNumber:string;
}
const ContactusComponent = ({PageTitle,image,title,subtitle,contactInfo,number,workTime,mobNumber}:IContactComponent) => {
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
    </div>
  );
};

export default ContactusComponent;
