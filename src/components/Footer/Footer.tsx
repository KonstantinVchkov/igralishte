import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const Footer = () => {
  const handleJoin = () => {
    console.log("mail submitted");
  };
  return (
    <div className={style.Footer}>
      <div className="text">
        <h3>Следете ги нашите новости!</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos fugiat
          amet quia possimus recusandae quisquam.
        </p>
      </div>
      <div>
        <label htmlFor="email">E-mail Адреса</label>
        <input type="text" />
        <button type="button" onClick={handleJoin}>
          Зачлени се
        </button>
      </div>
      <div className="lists">
        <ul>
          <Link href={"/AboutUs"}>
            <li>lorem ipsum</li>
          </Link>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li></li>
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
