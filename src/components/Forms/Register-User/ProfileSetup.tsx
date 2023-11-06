import React from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import Link from "next/link";
const ProfileSetup = () => {
  return (
    <div className={style.ProfileSetup}>
      <LogoComponent />
      <form>
        <label htmlFor="adress">Адреса</label>
        <input type="text" placeholder="email" />
        <label htmlFor="number">Телефонски Број</label>
        <input type="number" placeholder="телефонски број" />
        <label htmlFor="adress">Биографија</label>
        <textarea name="biography" id="" ></textarea>
        <button>Заврши</button>
      </form>
      <Link href={"/"}>
        <p>Прескокни</p>
      </Link>
    </div>
  );
};

export default ProfileSetup;
