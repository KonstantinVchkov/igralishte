import React from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfileForm } from "@/types/ProjectTypes";
const ProfileSetup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IProfileForm> = (data) => {
    console.log(data);
  };
  return (
    <div className={style.ProfileSetup}>
      <div className={style.logoUp}>
        <LogoComponent />
      </div>
      <form
      //  onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="file"
          name="picture"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
          }}
        />
        <button className={style.uploadImg}>Прикачи слика</button>
        <label htmlFor="adress">Адреса</label>
        <input type="text" placeholder="email" />
        <label htmlFor="password">Промени го пасвордот</label>
        <input type="password" placeholder="password" />
        <label htmlFor="adress">Адреса</label>
        <input type="text" placeholder="Адреса на живеење" />
        <label htmlFor="number">Телефонски Број</label>
        <input type="number" placeholder="телефонски број" />
        <label htmlFor="adress">Биографија</label>
        <textarea name="biography" id=""></textarea>
        <div className={style.profileButtons}>
          <button className={style.btnDone}>Зачувај</button>
          <Link href={"/"}>
            <p>Прескокни</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
