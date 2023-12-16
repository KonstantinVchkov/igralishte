import React, { useState } from "react";
import style from "./style.module.css";
import LogoComponent from "@/components/Header/logo";
import Link from "next/link";
import {  useForm } from "react-hook-form";
const ProfileSetup = () => {
  const [profileImage, setProfileImage] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
  );
  const { register, handleSubmit } = useForm();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className={style.ProfileSetup}>
      <div className={style.logoUp}>
        <LogoComponent />
      </div>
      <div className={style.displayImg}>
        <img src={profileImage} alt="Profile" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
          onChange={handleImageChange}
          className={style.hiddenInput}
        />
        <label htmlFor="profilePictureInput" className={style.uploadButton}>
          Прикачи слика
        </label>
        <label htmlFor="email">Смени го емаилот</label>
        <input
          {...register("email")}
          type="text"
          id="adress"
          placeholder="емаил адреса"
        />
        <label htmlFor="password">Смени го пасвордот</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          placeholder="Нов Пасворд"
        />
        <label htmlFor="adress">Смени адреса</label>
        <input
          {...register("address")}
          type="text"
          id="adress"
          placeholder="Адреса на живеење"
        />
        <label htmlFor="number">Смени го бројот</label>
        <input
          {...register("phoneNumber")}
          type="text"
          placeholder="Телефонски број"
        />
        <textarea {...register("biography")} placeholder="Биографија" />
        <div className={style.profileButtons}>
          <button type="submit" className={style.btnDone}>
            Зачувај
          </button>
          <Link href="/">Прескокни</Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
