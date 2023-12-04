import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import ButtonComp from "../ButtonComponent/ButtonComp";

const Footer = () => {
  const handleJoin = () => {
    console.log("mail submitted");
  };
  return (
    <div className={style.Footer}>
      <div className={style.textSection}>
        <h3>Следете ги нашите новости!</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos fugiat
          amet quia possimus recusandae quisquam.
        </p>
      </div>
      <div className={style.infoSection}>
        <label htmlFor="email">E-mail Адреса</label>
        <input type="text" />
        <div className={style.goldenBtn}>
          <ButtonComp text={"Зачлени се"} handleClick={handleJoin} />
        </div>
      </div>
      <div className="lists">
        <ul>
          <Link href={"/AboutUs"}>
            <li>За нас</li>
          </Link>
          <Link href={"/ContactUs"}>
            <li>Контакт</li>
          </Link>
          <li>Локатор на Продавницата</li>
          <Link href={"/FAQ"}>
            <li>Често поставувани Прашања(FAQ)</li>
          </Link>
          <li>
            <Link href={"/register"}>Регистрирај се</Link>/
            <Link href={"/login"}>логирај се</Link>
          </li>
        </ul>
      </div>
      <div className="socialMedia">
        <div className="instagram d-flex">
          <img
            src="/images/icons/instagram-icon.png"
            alt="instagram-social-media"
          />{" "}
          <span className="ml-2">igralishte.sk</span>
        </div>
        <br />
        <div className="tikTok d-flex">
          <img
            src="/images/icons/tik-tok-icon.png"
            alt="instagram-social-media"
          />{" "}
          <span className="ml-2">igralishte.sk</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
