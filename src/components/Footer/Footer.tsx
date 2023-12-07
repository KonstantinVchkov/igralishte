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
        <h1>Следете ги нашите новости!</h1>
        <p>
          Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
          нови колекции.
        </p>
      </div>
      <div className={style.infoSection}>
        <label htmlFor="email">E-mail Адреса:</label>
        <input type="text" />
        <div className={style.goldenBtn}>
          <ButtonComp text={"Зачлени се"} handleClick={handleJoin} />
        </div>
      </div>
      <div className={style.footerLists}>
        <ul>
          <Link href={"/AboutUs"}>
            <li>За нас</li>
          </Link>
          <Link href={"/ContactUs"}>
            <li>Контакт</li>
          </Link>
          <Link
            href={"https://maps.app.goo.gl/2mmoSKcZ1tLgW95T8"}
            target="_blank"
          >
            <li>Локатор на Продавницата</li>
          </Link>
          <Link href={"/FAQ"}>
            <li>Често поставувани Прашања(FAQ)</li>
          </Link>
          <li>
            <Link href={"/register"}>Регистрирај се</Link>/
            <Link href={"/login"}>логирај се</Link>
          </li>
        </ul>
      </div>
      <div className={style.footerSocialMedia}>
        <span className={style.FollowUs}>Следете не на:</span>
        <div className={`${style.instagram} d-flex`}>
          <img
            src="/images/icons/instagram-icon.png"
            alt="instagram-social-media"
          />{" "}
          <Link href={"https://www.instagram.com/igraliste.sk/"} target="_blank">
            <span className="ml-2">igralishte.sk</span>
          </Link>
        </div>
        <div className="tikTok d-flex">
          <img
            src="/images/icons/tik-tok-icon.png"
            alt="instagram-social-media"
          />{" "}
          <Link href={""} target="_blank">
            <span className="ml-2">igralishte.sk</span>
          </Link>
        </div>
      </div>
      <div className={style.copyRight}>
        <p>Сите права задржани © 2023 igralishtesk.mk</p>
      </div>
    </div>
  );
};

export default Footer;
